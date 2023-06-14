import React from 'react'
import BedImg from '/src/assets/Bed.jpg'
export  function About() {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={BedImg} className="w-[2000px] rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex gap-4 font-bold text-black text-4xl'>
                            <h1>About </h1>
                            <h1 className='text-purple-500'>Hotel Lunar</h1>
                        </div>
                        <div className='text-black font-semibold mb-10'>

                            <p className="py-6">Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and
                                again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they
                                want to change. </p>
                            <p>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today,
                                ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change.
                            </p>
                        </div>
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
