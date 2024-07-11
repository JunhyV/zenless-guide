import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/extras/cropped-cropped-Zenlesslab-logo4-2-1.png'

const Header = () => {
  return (
    <header className='flex-none bg-neutral-800 text-white text-center p-4 overflow-hidden'>
      <Link to='/' className='flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-110'>
      <img src={logo} alt="zzz-logo" className='w-12' />
      <p className='text-xl font-black'>ZENLESS GUIDE</p>
      </Link>
    </header>
  )
}

export default Header