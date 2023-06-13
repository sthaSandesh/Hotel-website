import React from 'react'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-white">
            <div>
                <div >
                    <h1 className='font-bold text-2xl'>Hotel Lunar</h1>
                    <p className='mb-2'>will give you comfort you deserve</p>
                </div>

                <a className='link link-hover font-semibold'>Address : Road 12, Peace Avenue,Ado,Ekiti</a>
                <a className='link link-hover font-semibold'>Phone number : +2349061504648</a>
                <a className='link link-hover font-semibold'>Email: oluwadamilolafaj@gmail.com</a>

            </div>

            <div className='font-semibold'>
                <a className='link link-hover '>ABOUT US</a>
                <a className='link link-hover '>CONTACT US</a>
                <a className='link link-hover'>ROOMS & RATES</a>
                <a className='link link-hover'>FACILITIES</a>
            </div>


            <div className='font-semibold'>
                <a className="link link-hover font-semibold">FACEBOOK</a>
                <a className="link link-hover font-semibold">INSTAGRAM</a>
                <a className="link link-hover font-semibold">TWITTER</a>
                <a className="link link-hover font-semibold">SNAP CHAT</a>
            </div>
        </footer>
    )
}
