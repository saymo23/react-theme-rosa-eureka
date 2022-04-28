import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
function Cart() {
  return (
    <div className='flex items-center cursor-pointer'>
      
      <FiShoppingCart className='text-xl'/>
      <div className='pl-2 font-medium text-lg'>
        Cart
      </div>
      {/* <BsDot className='text-red-600 text-4xl w-8 h-8' /> */}

    </div>
  )
}

export default Cart