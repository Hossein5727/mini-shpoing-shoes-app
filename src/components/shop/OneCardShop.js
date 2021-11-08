import React from 'react'

function OneCardShop({ item, handleClick, handleDelete }) {
    return (
        <div>
            < >
                <img src={item.imgCard} className="object-contain w-full  rounded-md " />
                <h1 className="text-4xl text-black m-4 text-center ">{item.name}</h1>
                <h2 className="text-indigo-700 text-2xl mb-3">{item.price}$</h2>
                <p className="text-xl">Info: {item.info}</p>
                <div className="mt-4">
                    <button onClick={() => handleClick(item.id)} disabled={item.disabled} style={{ background: item.disabled && 'gray' }} className="bg-blue-600 py-1 px-3 w-20 text-1xl rounded text-center text-white">Add</button>
                    {item.disabled &&
                        <button onClick={() => handleDelete(item.id)} className="bg-red-600 py-1 px-3 w-20 text-1xl rounded text-center text-white ml-5">Delete</button>
                    }
                </div>
            </>
        </div>
    )
}

export default OneCardShop
