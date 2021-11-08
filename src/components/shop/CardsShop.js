import React, { useEffect, useState } from 'react'
import { UseCard, UseCardDispatcher, UseCardShop, UseNumberCardDispatcher } from '../../provider/ShopProviderContext'
import { toast } from 'react-toastify';
import OneCardShop from './OneCardShop';

function CardsShop() {

    const cards = UseCardShop()
    const content = UseCard()
    const setContent = UseCardDispatcher()

    const [shopCards, setShopCards] = useState(cards)
    const [searchTerm, setSearchTerm] = useState("");

    const { incrementCard, decrementCard } = UseNumberCardDispatcher()

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleClick = (id) => {
        const clone = [...shopCards]

        const selectedIndex = clone.find(shop => shop.id == id)
        const name = selectedIndex.name;

        if (!selectedIndex.disabled) {
            incrementCard()
            setContent([...content, selectedIndex])
            console.log(selectedIndex);
        }
        selectedIndex.disabled = true;
        toast.success(`${name}  added`)
    }

    const handleDelete = (id) => {
        const clone = [...shopCards]
        const cloneCard = [...content]

        const select = clone.find(shop => shop.id == id)
        const filter = cloneCard.filter(shop => shop.id !== id)
        console.log(select);

        if (select.disabled) {
            decrementCard()
            setContent(filter)
            select.disabled = false
        }
    }



    return (
        <div className="flex flex-col justify-center items-center">

            <div className="mb-4 w-80">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

            {shopCards.filter((item) => {
                if (searchTerm.length <= 0) {
                    return item
                }
                else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }

            }).map((item) => (
                <div key={item.id} className="w-10/12 h-5/6 m-6 shadow-2xl bg-red-400 p-4 rounded-md sm:w-3/12 md:w-6/12 lg:w-6/12 xl:w-3/12">
                    <OneCardShop
                        item={item}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                    />
                </div>
            ))

            }
        </div >
    )
}

export default CardsShop
