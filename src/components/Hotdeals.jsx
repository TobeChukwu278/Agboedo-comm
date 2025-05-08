import React, { useEffect } from 'react';
import { FaMoneyBillWave, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hotdeals = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh()

    })

    return (
        <div className='container flex flex-col sm:flex-row gap-3 mt-40 pb-8 mx-2.5 sm:mx-16'>

            <div>

                <h2 className='text-2xl text-center mr-4'>
                    Hot 🔥 deals for you
                </h2>

                <p className='opacity-60'>Shop motorcycles and spare parts directly from importers</p>

            </div>

            <div data-aos='fade-up' className='flex flex-col gap-2 justify-center items-center text-left'>

                <span>
                    <FaMoneyBillWave className='text-2xl' />
                </span>
                <h4 className='text-2xl'>1.5% cashback</h4>
                <p className='opacity-60'>Earn a 5% cashback reward on every Motorcycle and spare parts purchase you make!</p>

            </div>

            <div data-aos='fade-up' data-aos-delay='200' className='flex flex-col gap-2 justify-center items-center text-left'>

                <span>
                    <FaCalendarAlt className='text-2xl' />
                </span>
                <h4 className='text-2xl'>30-Day Payment Terms</h4>
                <p className='opacity-60'>
                    Enjoy flexible 30-day payment terms with no added interest!
                </p>

            </div>

            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-col gap-2 justify-center items-center text-left'>

                <span>
                    <FaDollarSign className='text-2xl' />
                </span>
                <h4 className='text-2xl'>Save money</h4>
                <p className='opacity-60'>Get the best deals on motorcycles, spare parts, and repairs at unbeatable prices!</p>

            </div>

        </div>
    )
}

export default Hotdeals