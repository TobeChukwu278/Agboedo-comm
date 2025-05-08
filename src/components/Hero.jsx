import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh()

    })

    return (
        <div className='container relative p-10 bg-gray-100 h-screen mx-16'>

            <div data-aos="slide-left" data-aos-delay='500'>
                <img src='https://media.istockphoto.com/id/532550846/photo/old-parts-of-motorcycles-background.jpg?s=1024x1024&w=is&k=20&c=IUcFci1PqSAniT_dFN4iXPYt3QC9G7ehNMe42vtBkEY='
                    alt='hero' className='sm:w-3/4 h-screen object-cover justify-self-end' />
            </div>

            <div data-aos="slide-right" data-aos-delay='700' className='w-1/2 backdrop-blur-md text-center  absolute -top-0/4 -left-12  text-gray-900 font-bold h-4/4' >

                <h1 data-aos="slide-up" data-aos-delay='900' className='text-6xl sm:text-7xl mb-10 text-center'>Hub For Motorcyles, Spare-Parts and Repairs</h1>

                <p data-aos="slide-up" data-aos-delay='1010' className='opacity-60'>
                    Buy high-quality motorcycles, spare parts, and get expert repairs from our trusted importers and skilled mechanics.
                </p>

            </div>

        </div>
    )
}

export default Hero