import React from 'react';
import { FaRegHeart,FaHeart } from "react-icons/fa";

const Auction = ({ auction, handleFavorite, isFavorite }) => {
  return (
    <tr className='border-2 border-[#000000]'>
      <td>
        <div className="flex items-center gap-3">
          <div className="rounded-xl h-12 w-12">
            <img className='h-12 w-12 rounded-xl' src={auction.image} alt="item" />
          </div>
          <div>
            <div className="font-bold">{auction.title}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">${auction.courrenBidPrice}</td>
      <td className="font-bold">{auction.timeLeft}</td>
      <td>
        <button
          onClick={() => handleFavorite(auction)} 
          disabled={isFavorite}
          className={` ${isFavorite ? 'cursor-not-allowed text-red-500' : ''}`}
        >
          <FaHeart size={22} />
        </button>
      </td>
    </tr>
  );
};

export default Auction;
