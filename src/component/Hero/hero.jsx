import React from 'react'


export default function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-[url(/src/assets/Background.jpg)] ">
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold text-white">A Memorable Expreience.</h1>
            <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
