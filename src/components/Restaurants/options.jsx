
import { LuUtensilsCrossed } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Delivery from "./Delivery";
import Dine from "./DineIn";
import Filters from "./Filters/filters"
import ResFilters from '../../objects/restaurantFilters';

const Options = () => {

    const { id } = useParams();
    const [isOrder, setIsOrder] = useState('');

    useEffect(() => {

        if (id === '1') {
            setIsOrder(true)
        }
        if (id === '2') {
            setIsOrder(false)
        }
    }, [id]);

    return (


        <>

            <div className="flex items-center md:px-16 mt-10">
                <ul className="flex text-lg md:text-2xl space-x-4 lg:space-x-6">
                    <li className={`flex ${!isOrder ? "text-rose-500 pb-6 border border-b-2 border-b-rose-400 " : "text-black"}`}>

                        <LuUtensilsCrossed className="text-4xl text-black" />


                        <a href="#" onClick={() => setIsOrder(false)}>Dining Out</a>

                    </li>
                    <li className={`flex ${isOrder ? "text-rose-500 pb-6 border border-b-2 border-b-rose-400 px-2  " : "text-black"}`}>

                        <TbTruckDelivery className="text-4xl text-black" />


                        <a href="#" onClick={() => setIsOrder(true)}>Delivery</a>

                    </li>
                </ul>
            </div>




            {isOrder &&
                (
                    <>
                        <Filters filters={ResFilters.delivery} />
                        <Delivery />
                    </>
                )
            }
            {!isOrder &&
                (

                    <>
                        <Filters filters={ResFilters.dinning} />
                        <Dine />
                    </>


                )
            }

        </>
    )
}
export default Options