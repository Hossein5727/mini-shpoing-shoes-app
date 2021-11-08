import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge'
import { UseCard, UseCardShop, UseCardShopDispatcher, UseNumberCard } from '../../provider/ShopProviderContext'
import { FaShoppingCart } from 'react-icons/all'
import { Button } from '@mui/material'
import CardNav from './CardNav'
import { Outlet, Link, NavLink } from 'react-router-dom'
// import { Router } from 'react-router'

function NavShop() {

    const [showCard, setShowCard] = useState(false)
    const [totalCard, setTotalCard] = useState()

    const numberCard = UseNumberCard()
    const card = UseCard()
    const cardShop = UseCardShop()

    const { incrementQty, decremebtQty } = UseCardShopDispatcher()

    const calculateTotal = () => {
        const totalItemCount = card.reduce((total, item) => {
            return total + item.price * item.qty;
        }, 0);

        setTotalCard(totalItemCount);
    };

    useEffect(() => {
        calculateTotal()
    }, [card, totalCard, cardShop])


    return (
        <div className="bg-gray-100 relative p-8 shadow-md fixed w-full mb-11 text-2xl flex justify-end">
            <Badge badgeContent={numberCard} color="error" onClick={() => setShowCard(!showCard)} >
                <FaShoppingCart className="cursor-pointer" />
            </Badge>

            {showCard && card.length > 0 && (
                <div className="absolute right-6 top-20 w-72 bg-yellow-400 p-6">
                    {card.map((item) => (
                        <CardNav
                            key={item.id}
                            item={item}
                            decremebtQty={decremebtQty}
                            incrementQty={incrementQty}
                        />
                    ))}
                    <h1 className="p-2 bg-gray-300 text-black rounded-md">Total: {totalCard}$</h1>
                    <Link to="/buy" state={card} >
                        <button className="bg-purple-700 py-1 px-5 text-2xl flex justify-center items-center  text-white shadow-xl  rounded-md mt-4 hover:bg-purple-900 transition-all duration-100 ease-in">Buy</button>
                    </Link>
                </div>
            )
            }
        </div >
    )
}

export default NavShop
