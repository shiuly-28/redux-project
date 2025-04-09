import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Auction = ( {auction}) => {
    // console.log(props.auction)
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
                                    {/* row 1 */}
                                    <tr>
                                       <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={auction.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
                                        </th>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={auction.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                    <div className="text-sm opacity-50">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Carroll Group
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                        </td>
                                        <td>Red</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
                                        </th>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                       
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={auction.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Marjy Ferencz</div>
                                                    <div className="text-sm opacity-50">Russia</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Rowe-Schoen
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                        </td>
                                        <td>Crimson</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
                                        </th>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                       
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={auction.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Yancy Tear</div>
                                                    <div className="text-sm opacity-50">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
                                        </th>
                                    </tr>
                                    <tr>
                                       
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={auction.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Yancy Tear</div>
                                                    <div className="text-sm opacity-50">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Wyman-Ledner
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><FaRegHeart /></button>
                                        </th>
                                    </tr>
                                </tbody>
                               
                            </table>
                        </div>
                    </div>
                    <div className='col-span-1 p-2 h-60 bg-[#FFFF] rounded-2xl'>
                        <h1 className='flex justify-center items-center gap-2 text-[#0E2954]'><FaRegHeart />Favorite Items</h1>

                    </div>
                </div>
                </div>
        </div>
        </div>
    );
};

export default Auction;