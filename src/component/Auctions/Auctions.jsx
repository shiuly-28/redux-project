import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';
import { FaRegHeart} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiCircleRemove } from "react-icons/ci";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setAuctions(data));
  }, []);

  const handleFavorite = (auction) => {
    // Check if the auction already exists in favorites
    const exists = favorites.find(item => item.id === auction.id);
    if (!exists) {
      setFavorites([...favorites, auction]);
      toast.success(`🐷 items added to favorites 🏀`)
        
    }
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    toast.warn(`🐷 items Removed from favorites`);
  };

  const total = favorites.reduce((sum, item) => sum + parseFloat(item.courrenBidPrice.replace('$', '').replace(',', '')), 0);

  return (
    <div className='bg-[#dbdfe7] min-h-screen'>
      <div className='p-20 flex flex-col gap-11'>
        <div className='flex flex-col justify-center gap-2'>
          <h1 className='text-[#0E2954] font-semibold text-xl'>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
        </div>

        <div className='grid grid-cols-4 gap-7'>
          {/* Left - Auction Table */}
          <div className='col-span-3  bg-white h-fit p-8 rounded-2xl'>
            <table className="table w-full">
              <thead className='border-2 border-[#000000]'>
                <tr>
                  <th>Item</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
              <tbody>
                {auctions.map((auction) => (
                  <Auction
                    key={auction.id}
                    auction={auction}
                    handleFavorite={handleFavorite}
                    isFavorite={favorites.some(item => item.id === auction.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Right - Favorites */}
          <div className='col-span-1 p-5 h-auto bg-white rounded-2xl '>
            <h1 className='flex justify-center items-center gap-2 text-2xl text-[#0E2954]'>
              <FaRegHeart size={22} /> Favorite Items
            </h1>
            <hr className="my-3" />

            {favorites.length === 0 ? (
              <div className="text-center pt-6">
                <h1 className='text-xl'>No favorites yet</h1>
                <p className='pt-4 text-sm'>Click the heart icon on any item to add it to your favorites</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {favorites.map((item) => (
                  <li key={item.id} className='flex justify-between items-center text-sm border-2 border-[#000000] p-3'>
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.title} className="h-12 w-12 rounded-xl" />
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <p>${item.courrenBidPrice} | Bids: {item.bidsCount}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFavorite(item.id)}>
                      <CiCircleRemove size={20}/>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <hr className="my-3" />
            <div className='flex justify-between font-bold'>
              <span>Total bids Amount</span>
              <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position='top-right' />
    </div>
  );
};

export default Auctions;
