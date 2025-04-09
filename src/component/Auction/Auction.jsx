import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Auction = ({auction}) => {
    
    return (
       <tr>
          <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                <img src={auction.image} alt="" />
                </div>
                </div>
                <div>
                <div className="font-bold">{auction.title}</div>
                    </div>
                        </div>
                        </td>
                        <td>
                            <div className="font-bold">{auction.courrenBidPrice}</div>
                        </td>
                        <td>
                     <div className="font-bold">{auction.timeLeft}</div>
                    </td>
                                            
                 <th>
            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
        </th>
    </tr>
    );
};

export default Auction;