import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PrivateLayot = () => {
  return (
    <div className='flex h-screen w-screen'>
        <nav className='bg-neutral-800 h-full flex flex-col p-2 text-white'>
            <Link className='hover:underline text-center p-3 rounded-md' to='/admin-zzz'>Home</Link>
            <Link className='hover:underline text-center p-3 rounded-md' to='/admin-zzz/engines'>Engines</Link>
            <Link className='hover:underline text-center p-3 rounded-md' to='/admin-zzz/agents'>Agents</Link>
            <Link className='hover:underline text-center p-3 rounded-md' to='/admin-zzz/bangboos'>Bangboos</Link>
            <Link className='hover:underline text-center p-3 rounded-md' to='/admin-zzz/disks'>Drive disks</Link>
        </nav>
        <div className='flex-1 overflow-auto'>
        <Outlet/>
        </div>
    </div>
  )
}

export default PrivateLayot