import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import Auction from '../Auction/Auction';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setAuctions(data))
  }, []);
//   console.log(auctions)


    return (
 <div className='bg-[#dbdfe7]'>
           <div  className='p-20 flex flex-col gap-11'>
                <div className='flex flex-col justify-center gap-2 '>
                    <h1 className='text-[#0E2954] font-semibold  text-xl'>Active Auctions</h1>
                    <p>Discover and bid on extraordinary items</p>
                </div>
                <div>
                <div className='grid grid-cols-4  gap-7  '>
                    <div className='col-span-3 p-7 bg-[#FFFF] rounded-2xl'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Current Bid</th>
                                        <th>Time Left</th>
                                        <th>Bid Now</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
          auctions.map((auction) => <Auction auction ={auction}></Auction>)
        }
        </tbody>
            </table>
            </div>
                </div>
                    <div className='col-span-1 p-2 h-60 bg-[#FFFF] rounded-2xl'>
                            <h1 className='flex justify-center items-center gap-2 text-2xl text-[#0E2954]'><FaRegHeart />Favorite Items</h1>
                            
                            
                            <hr />
                            <div>
                                <h1 className='text-xl text-center pt-8'>No favorites yet</h1>
                                <p className='text-center pt-6'>Click the heart icon on any item <br /> to add it to your favorites</p>
                                
                                
                                <hr />
                                <div className='flex justify-between pt-10'>
                                    <h2 className='font-bold'>Total bids Amount</h2>
                                    <h2 className='font-bold'>$0000</h2>
                                </div>
                        </div>
                        </div>
                        
                        
                </div>
                </div>
        </div>  
        </div>
    );
};

export default Auctions;
    
