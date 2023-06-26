import React from 'react'
import { NavLink } from './Navlink'

const PageRoutes = [
  { name: 'Home', link: '/' },
  { name: 'Rooms & Suites', link: '/rooms-and-suites' },
  { name: 'Facilities', link: '/facilities' },
  { name: 'Contacts', link: '/contacts' },
  { name: 'Offers', link: '/offers' },
  { name: 'Events', link: '/events' }
] 

export default function Navbar() {
  return (
    <div className='navbar bg-white px-10 absolute'>
        <div className='flex-1'>
            <h1 className='font-bold text-purple-500 text-2xl normal-case cursor-pointer'>Hotel Lunar</h1>
        </div>
        <div className='flex-none text-black  font-bold'>
            <ul className='menu menu-horizontal gap-10'>
            {PageRoutes.map((link) => (
                        <NavLink key={link.name} label={link.name} link={link.link} />
                    ))} 
            </ul>
        </div>

    </div>
  )
}
