import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4 pb-20 pt-24'>
                 <div className="">
                <a className="text-3xl font-semibold"><span className='text-[#003EA4]'>Action</span><span className='text-[#FFD337]'>Gallery</span></a>
            </div>
            <div className='flex flex-row gap-10 text-2xl px-8 '>
                <a>Bid.</a>
                <a>Win.</a>
                <a>Own.</a>
                </div>
                <div className='flex gap-10 text-2xl px-8 '>
                    <a>Home</a>
                    <a>Auctions</a>
                    <a>Categories</a>
                    <a>How to works</a>
                </div>
                <div className='pt-8'>
                    <p>©2025AuctionHub. All rights reserved.</p>
                </div>
           </div>
        </div>
    );
};

export default Footer;