import React from 'react'

const Nav = () => {
  return (
    <nav className='min-w-[50%]'>
      <a href="/" className='text-slate-800 mx-3 font-medium text-lg active:text-pink-600'>New arrivals</a>
      <a href="/" className='text-slate-800 mx-3 font-medium text-lg'>Categories</a>
      <a href="/" className='text-slate-800 mx-3 font-medium text-lg'>Dress</a>
      <a href="/" className='text-slate-800 mx-3 font-medium text-lg'>Sale</a>
    </nav>
  )
}

export default Nav