import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Auction = ({ auction, handleFavorite, isFavorite }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="rounded-xl h-12 w-12">
            <img src={auction.image} alt="item" />
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
          onClick={() => handleFavorite(auction)} // Trigger handleFavorite when clicked
          disabled={isFavorite}
          className={`btn btn-ghost btn-xs ${isFavorite ? 'cursor-not-allowed text-red-500' : ''}`}
        >
          <FaRegHeart size={22} />
        </button>
      </td>
    </tr>
  );
};

export default Auction;
