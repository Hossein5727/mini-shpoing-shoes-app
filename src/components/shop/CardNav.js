import { Button } from '@mui/material'
import React from 'react'

function CardNav({ item, incrementQty, decremebtQty }) {
    return (
        <div>
            <div key={item.id} className="w-full my-8 bg-gray-300 p-4 rounded-md shadow-xl transition-all duration-200 ease-in">
                <img src={item.imgCard} className="object-contain relative" />
                <h1>{item.name}</h1>
                <div className="p-2 rounded-md shadow-md border border-gray-400">
                    <p>Quantity:{item.qty}</p>
                    <Button variant="contained" onClick={() => incrementQty(item.id)}>+</Button>
                    {item.qty != 1 && (
                        <Button variant="contained" color="error" onClick={() => decremebtQty(item.id)}>-</Button>
                    )}
                </div>
                <h1 className="mt-4 shadow-2xl rounded-md p-4">price:{item.price}$</h1>
            </div>
        </div>
    )
}

export default CardNav
