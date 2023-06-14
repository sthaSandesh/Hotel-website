import React from 'react'
import Img1 from '/src/assets/Gal1.jpg'
import Img2 from '/src/assets/Gal2.jpg'
import Img3 from '/src/assets/Gal3.jpg'

export function Galleries() {
    return (
        <div className='bg-white text-black font-bold text-center text-2xl pt-5'>
            <h1>Our Galleries</h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative  space-x-5 h-[250px] px-4 py-10">
                    <img src={Img1}/>
                    <img src={Img2}/>
                    <img src={Img3}/>
                    <img src={Img2}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative  space-x-5 h-[250px] px-4 py-10">
                    <img src={Img1}/>
                    <img src={Img2}/>
                    <img src={Img3}/>
                    <img src={Img2}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative  space-x-5 h-[250px] px-4 py-10">
                    <img src={Img1}/>
                    <img src={Img2}/>
                    <img src={Img3}/>
                    <img src={Img2}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle ">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative  space-x-5 h-[250px] px-4 py-10">
                    <img src={Img1}/>
                    <img src={Img2}/>
                    <img src={Img3}/>
                    <img src={Img2}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
