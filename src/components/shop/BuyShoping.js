import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function BuyShoping() {

    const history = useLocation()
    // const ulet = useMatch()

    const [dataUser, setDataUser] = useState()

    const calculateTotal = () => {
        const totalItemCount = history.state.reduce((total, item) => {
            return total + item.price * item.qty;
        }, 0);

        setDataUser(totalItemCount);
    };

    useEffect(() => {
        calculateTotal()
    }, [history.state, dataUser])

    return (
        <>
            <div className="p-1 flex items-center flex-wrap">
                {history.state.map((item) => (
                    <div className="w-7/12 rounded-md shadow-xl sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-2/12 m-4 p-3 bg-gray-300 ">
                        <img src={item.imgCard} className="w-full h-full object-contain rounded-md shadow-lg mb-3 " />
                        <p className="text-2xl shadow-md bg-gray-400 rounded p-0.5">{item.name}</p>
                        <h2 className="shadow-md text-xl mt-4">Price:{item.price}</h2>
                    </div>
                ))}
            </div>
            <h1 className="bg-gray-600 text-white py-2 text-4xl px-4 rounded-md shadow-md text-center">TOTAL: {dataUser}$</h1>
        </>
    )
}

export default BuyShoping
