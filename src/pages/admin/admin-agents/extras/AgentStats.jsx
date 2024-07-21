import React from 'react'

const AgentStats = ({stats, data, set}) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
        {stats.map(stat => 
        <div key={stat} className='grid grid-cols-2 items-center'>
            <label htmlFor={stat} className='min-w-20 capitalize font-medium text-md'>{stat}:</label>
            <input type="number" value={data.stats[stat]}  id={stat} className='text-end p-2 border border-neutral-400 rounded-md' onChange={(e) => set({...data, stats: {...data.stats, [stat]: e.target.value}})} placeholder={stat === "crit_rate" || stat === "crit_dmg" || stat === "pen_ratio" ? '%' : null}/>
        </div>
        )}
    </div>
  )
}

export default AgentStats