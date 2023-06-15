
import React from 'react'
import { About, Galleries, Hero, Wedding } from '../component/Hero'

export default function HomePage() {
  return (
    <div>
        <Hero />       
      <About />
      <Wedding />
      <Galleries />
    </div>
  )
}
