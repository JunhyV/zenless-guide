import React from 'react'

const InputData = ({label, data, set}) => {
  return (
    <div className='flex items-center'>
        <label htmlFor={label} className='min-w-20 capitalize font-medium text-md'>{label}: </label>
        <input type="text" id={label} value={data[label]} onChange={(e) => set({...data, [label]: e.target.value})} className='w-full p-2 border border-neutral-400 rounded-md'/>
    </div>
  )
}

export default InputData