import React from 'react'
import Cart from './Cart'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'
import User from './User'

export const Header = () => {
  return (
    <header className='flex justify-evenly gap-2 items-center p-8'>
      <Logo />
      <Search />
      <Nav />
      <Cart />
      <User />
    </header>
  )
}
