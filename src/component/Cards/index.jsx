import React from 'react'
import { Img1, Img2 , Img3 } from '../../assets/image'

export default function Cards() {
    return (
        <div className='bg-white px-40 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16 my-20 py-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img1} alt="Shoes" width={384} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img2} alt="Shoes" width={384} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img3} alt="Shoes" width={384} / ></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img1}alt="Shoes" width={384} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img2}alt="Shoes" width={384} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Img3} alt="Shoes" width={384} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-purple-500 hover:bg-purple-500">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
