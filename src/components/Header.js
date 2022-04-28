import React from 'react'
import Cart from './Cart'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'

export const Header = () => {
  return (
    <header className='flex justify-evenly gap-2 items-center'>
      <Logo />
      <Search />
      <Nav />
      <Cart />
    </header>
  )
}
