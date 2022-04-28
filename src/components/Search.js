import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const f = () => {
    console.log('uwu');
  }
  return (
    <div id='search' className='flex items-center'>
      <FaSearch onClick={f} className='-mr-7 z-10 cursor-pointer' />
      <input type="text" className='w-40 p-3 pl-10 rounded-xl ' placeholder='Search' />
    </div>
  )
}

export default Search