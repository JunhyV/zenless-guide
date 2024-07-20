import React from 'react'

const TextData = ({label, data, set}) => {
  return (
    <div className='flex'>
        <label htmlFor={label} className='w-20 capitalize font-medium text-lg'>{label}: </label>
        <textarea type="text" id={label} value={data[label]} onChange={(e) => set({...data, [label]: e.target.value})} className='flex-1 p-2 h-20 border border-neutral-400 rounded-md'/>
    </div>
  )
}

export default TextData