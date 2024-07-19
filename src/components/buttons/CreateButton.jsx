import React from 'react'
import { Link } from 'react-router-dom'

const CreateButton = ({url}) => {
  return (
    <Link to={url} className='bg-emerald-500 text-white font-medium p-2 w-fit mb-5 hover:cursor-pointer hover:bg-emerald-700 transition-colors duration-500'>+ Create New Disk</Link>
  )
}

export default CreateButton