import React from 'react'
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#254d4d] px-16 py-8 text-gray-300 mt-2.5'>

            <div className='flex flex-col sm:flex-row gap-8'>

                <div className='h-2/5'>
                    <h1 className='text-3xl'>Agboedo</h1>
                    <p>
                        Join us in revolutionizing motorcycle trade with quality bikes, genuine spare parts, and expert
                        repairs—all at unbeatable prices.
                    </p>

                    <ul className='flex gap-4 mt-9'>
                        <li> <FaFacebook /> </li>
                        <li> <FaTwitterSquare /> </li>
                        <li> <FaLinkedin /> </li>
                        <li> <FaPinterest />     </li>
                    </ul>

                </div>

                <div className='w-1/5'>

                    <h3 className='text-2xl mb-2'>Services</h3>

                    <ul>
                        <li className='cursor-pointer'>Contact Us</li>
                        <li className='cursor-pointer'>Press</li>
                        <li className='cursor-pointer'>Payrol</li>
                        <li className='cursor-pointer'>Library</li>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Help Center</li>
                    </ul>

                </div>

                <div className='w-1/5'>

                    <h3 className='text-2xl mb-2'>Resources</h3>

                    <ul>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>FAQs</li>
                        <li className='cursor-pointer'>Contact Support</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Terms and Agreement</li>
                    </ul>

                </div>

                <div className='w-1/5'>

                    <h3 className='text-2xl mb-2'>Support</h3>

                    <ul>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Affiliates</li>
                        <li className='cursor-pointer'>Sitemap</li>
                        <li className='cursor-pointer'>Cancelation Policy</li>
                        <li className='cursor-pointer'>Security</li>
                    </ul>

                </div>

            </div>

            <div className='w-full text-center mt-25'>
                <p>&copy; 2025 Agboedo. All Rights Reserved. </p>
            </div>

        </div>
    )
}

export default Footer