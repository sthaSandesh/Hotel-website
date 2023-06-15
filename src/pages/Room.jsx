import React from 'react'
import Cards from '../component/Cards'


export default function Room() {
  return (
    <div>
      <div className="hero min-h-screen bg-[url(/src/assets/Rooms.jpg)] ">
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold text-white">OUR ROOMS AND RATE</h1>
          </div>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}
