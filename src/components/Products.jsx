import React from 'react'

const Products = () => {

    const tray = [
        {
            id: 1,
            title: 'Tiger',
            price: '$178',
            img: 'https://www.themotorcyclebarn.co.uk/wp-content/uploads/mlo-assets/New/a607f04e0a72bde514a3509ced6087f9-full.jpg'
        },
        {
            id: 2,
            title: 'Bajaj',
            price: '$178',
            img: 'https://cdn.bajajauto.com/en-ng/-/media/globalbajajauto/common-media/product-detail-page-banners/dominar/400-black.webp'
        },
        {
            id: 3,
            title: 'Cater',
            price: '$178',
            img: 'https://www.adsafrica.com.ng/uimages/nigeria/29/b99/2969629/1.jpg'
        },
        {
            id: 4,
            title: 'Kymco Scooter',
            price: '$178',
            img: 'https://kymco.com.ph/wp-content/uploads/2024/05/PL_COL21-3-500x333.png'
        },
        {
            id: 5,
            title: 'Super Star',
            price: '$178',
            img: '/images/Superstar SS70CC.jpeg'
        },
        {
            id: 6,
            title: 'Vino',
            price: '$178',
            img: 'https://m.media-amazon.com/images/I/61NJjCiypTL._AC_SY450_.jpg'
        }
    ]

    return (
        <div className='mx-2.5'>

            <h1 className='text-2xl my-9 mx-16'>Products</h1>

            <div>

                <div className='flex flex-col justify-center sm:flex-row sm:flex-wrap gap-17 mx-2.5'> {
                    tray.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.img}
                                className='w-75 h-69 object-cover rounded-md hover:scale-105 transition-transform duration-500 ease-in-out shadow-gray-800 hover:shadow-md'
                                alt={item.title}
                            />
                            <h2 className='my-5'>{item.title}</h2>
                            <p>{item.price}</p>
                        </div>
                    ))
                }

                </div>

            </div>

        </div>
    )
}

export default Products