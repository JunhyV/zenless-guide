import React from 'react'
import { Link } from "react-router-dom";

const BackButton = ({url}) => {
  return (
    <Link to={url} className='absolute top-10 left-20 bg-neutral-900  font-medium p-2 px-4 text-white rounded-2xl hover:cursor-pointer hover:scale-105 transform transition-transform duration-300'>&laquo; Back</Link>
  )
}

export default BackButton