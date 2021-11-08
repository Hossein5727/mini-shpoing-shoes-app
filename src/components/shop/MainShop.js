import React from 'react'
import CardsShop from './CardsShop'
import NavShop from './NavShop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainShop() {
    return (
        <div className="bg-gray-300">
            <NavShop />
            <CardsShop />
            <ToastContainer />
        </div>
    )
}

export default MainShop
