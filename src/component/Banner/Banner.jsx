import React from 'react';
import bannerImg from '../../../public/assets/Banner-min.jpg'
const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[60%]"
        style={{ backgroundImage: `url(${bannerImg})`}}>
            <div className='px-36 pt-60 pb-28'>
                <div className='flex flex-col gap-5'>
                <h1 className='text-4xl font-semibold m-4 text-white'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='m-4 text-white'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <div className='m-4'>
                    <button className='btn bg-[#FFFFFF] w-50 h-10 rounded-xl shadow-sm'>Explore Auctions</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;