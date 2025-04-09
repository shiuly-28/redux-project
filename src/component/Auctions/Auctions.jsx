import React, { useEffect, useState } from 'react';

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
 <div>
           
        {
          auctions.map((auction) => <Auction auction ={auction}></Auction>)
        }
        </div>
    );
};

export default Auctions;
    
