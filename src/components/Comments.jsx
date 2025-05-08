import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import AOS from 'aos';
import 'aos/dist/aos.css';


const comments = [
    {
        id: 1,
        img: '/images/user-1.jpg',
        comment: ' "Agboedo has made sourcing spare parts so much easier. I now get geniue parts directly from importers at the best prices. My business now has grown significantly!." ',
        firstName: 'Chuwkudi',
        lastname: 'Obi',
        jobDescription: 'Motocyle Dealer'
    },
    {
        id: 2,
        img: '/images/user-2.jpg',
        comment: ' "I used to struggle to find reliable repair services, but Agboedo changed that.Now, I can easily get my motorcycle fixed by skilled mechanics without stress!" ',
        firstName: 'Amarachi',
        lastname: ' Onyekachi',
        jobDescription: 'Motorcycle Owner'
    },
    {
        id: 3,
        img: '/images/user-3.jpg',
        comment: ' "The platform is a game-changer! Access to high-quality spare parts and flexible payment options has helped me expand my store and satisfy more customers."',
        firstName: ' Ifeanyi ',
        lastname: ' Chinonso ',
        jobDescription: ' Motorcycle Spare Parts Retailer '
    }
]

const Comments = () => {

    const [current, setCurrent] = useState(0);
    const slideCount = comments.length;

    // swipe handlers
    const swipe = useSwipeable({
        onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slideCount),
        onSwipedRight: () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    })

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh()

    })



    // const goToSlide = (index) => setCurrent(index);



    return (
        <div className='flex flex-col justify-center mt-20 mx-16'>
            <div >
                <h2 data-aos='fade-up' className='text-center text-2xl text-bold'>
                    What our happy clients say
                </h2>

                <p data-aos='fade-up' className='text-center opacity-70'>
                    Testimonials Highlighting Our Commitment to Quality, Exceptional Service, and Customer Satisfaction
                </p>
            </div>

            <div className='flex justify-center text-center' {...swipe}>

                <div
                    className='flex justify-center transition-transform duration-500 ease-in-out overflow-hidden'
                    style={{
                        //    transform: `translateX(-${current * 100}%)`, 
                        width: `${slideCount * 100}%`
                    }}>
                    {
                        comments.map((item, index) => (
                            <div key={index} data-aos='slide-left' className={` transition-transform duration-500 ease-in-out ${index === current ? 'block' : 'hidden'} w-full  sm:w-2/3 overflow-x-hidden  flex flex-col sm:flex-row items-center justify-center text-gray-900`}>

                                <img
                                    src={item.img || 'default-image.jpg'}
                                    alt={`${item.firstName} ${item.lastname}`}
                                    className='rounded-md w-48 h-60 object-cover mr-4'
                                />
                                <div>
                                    <p className='opacity-70'> {item.comment} </p>
                                    <h1 className='text-2xl my-5'>{item.firstName} {item.lastname} </h1>
                                    <p className='opacity-70'> {item.jobDescription} </p>
                                </div>

                            </div>
                        ))
                    }


                </div>

            </div>

            <div className='flex justify-center mt-4'>
                {comments.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${index === current ? 'bg-blue-500' : 'bg-gray-500'}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments