import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar bg-white px-10 absolute'>
        <div className='flex-1'>
            <h1 className='font-bold text-purple-500 text-2xl normal-case cursor-pointer'>Hotel Lunar</h1>
        </div>
        <div className='flex-none text-black  font-semibold'>
            <ul className='menu menu-horizontal gap-10'>
                <li className='hover:text-purple-500 cursor-pointer'>Home</li>
                <li className='hover:text-purple-500 cursor-pointer'>Rooms & Suites</li>
                <li className='hover:text-purple-500 cursor-pointer'>Facilites</li>
                <li className='hover:text-purple-500 cursor-pointer'>Contacts</li>
                <li className='hover:text-purple-500 cursor-pointer'>Offers</li>
                <li className='hover:text-purple-500 cursor-pointer'>Events</li>
            </ul>
        </div>

    </div>
  )
}
