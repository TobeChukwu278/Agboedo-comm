import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh()

    })

    return (
        <div className='mt-38 mx-2.5 sm:mx-16' >

            <div className='flex flex-col sm:flex-row justify-between my-7'>

                <div className='w-full sm:w-2/4'>
                    <h1 data-aos='fade-up' className='text-2xl font-bold'>About Us</h1>
                    <p data-aos='fade-up' data-aos-delay='500' className='opacity-60'>
                        Agboedo is your go-to marketplace for motorcycles, genuine spare parts, and expert repairs in Nnewi,
                        Anambra State Nigeria.
                        We connect buyers directly with trusted importers and skilled mechanics, ensuring quality and
                        affordability.
                        Shop with confidence, enjoy unbeatable deals, and experience hassle-free service—all in one place.
                    </p>
                </div>

                <div>
                    <button type='button' data-aos='fade-up' data-aos-delay='200' className='cursor-pointer bg-[#254d4d] p-3 my-3.5 rounded-md hover:text-gray-200 hover:bg-[#567272]'>Learn more</button>
                </div>

            </div>

            <div className='flex flex-col-reverse sm:flex-row mt-24'>

                <div className='flex flex-col'>
                    <div className='flex flex-col sm:flex-row gap-2.5 mb-15'>

                        <div>

                            <h3 data-aos='fade-up' className='text-4xl text-bold text-green-900'>1.</h3>
                            <h4 data-aos='fade-up' className='my-2 text-2xl'>Who we are</h4>
                            <p data-aos='fade-up' className='opacity-60'>
                                Agboedo is a trusted e-commerce platform specializing in motorcycles, spare parts, and repairs.
                                Based in Nnewi, we bridge the gap between buyers and verified importers, ensuring quality,
                                affordability, and reliability.
                            </p>

                        </div>

                        <div>
                            <h3 data-aos='fade-up' className='text-4xl text-bold text-green-900'>2.</h3>
                            <h4 data-aos='fade-up' className='my-2 text-2xl'>What do we do</h4>
                            <p data-aos='fade-up' className='opacity-60'>
                                We provide a seamless shopping experience for motorcycle enthusiasts, offering a wide range of
                                motorcycles, genuine spare parts, and professional repair services—all from trusted suppliers
                                and mechanics.
                            </p>
                        </div>

                    </div>
                    <div className='flex  flex-col sm:flex-row gap-2.5'>

                        <div>

                            <h3 data-aos='fade-up' className='text-4xl text-bold text-green-900'>3.</h3>
                            <h4 data-aos='fade-up' className='my-2 text-2xl'>How do we help</h4>
                            <p data-aos='fade-up' className='opacity-60'>
                                By connecting customers directly with importers and mechanics, we eliminate middlemen, reduce
                                costs, and ensure quick access to high-quality products and services. Our flexible payment
                                options and cashback rewards make purchases even more convenient.
                            </p>

                        </div>

                        <div>


                            <h3 data-aos='fade-up' className='text-4xl text-bold text-green-900' >4.</h3>
                            <h4 data-aos='fade-up' className='my-2 text-2xl'>Create Success Story</h4>
                            <p data-aos='fade-up' className='opacity-60'>
                                Agboedo has transformed motorcycle trading in Nnewi by making spare parts and repairs more
                                accessible and affordable. Our growing community of satisfied riders, importers, and mechanics
                                reflects our commitment to quality service and customer satisfaction.
                            </p>

                        </div>

                    </div>
                </div>

                <img data-aos='fade-up'
                    src='/images/image (3).jpg'
                    alt='about image'
                    className='object-cover h-96 w-[500px]'
                />

            </div>

        </div>
    )
}

export default About