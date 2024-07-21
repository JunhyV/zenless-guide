import React from 'react'

const AgentMindscapes = ({mindscape, data, set}) => {
  return (
    <div className='grid gap-2'>
        {mindscape.map(mind => 
        <div key={mind} className='flex items-center'>
            <label htmlFor={mind} className='min-w-20 capitalize font-medium text-md'>{mind}:</label>
            <textarea value={data.mindscape[mind]} id={mind} className='h-10 flex-1 p-2 border border-neutral-400 rounded-md' onChange={(e) => set({...data, mindscape: {...data.mindscape, [mind]: e.target.value}})}/>
        </div>
        )}
    </div>
  )
}

export default AgentMindscapes