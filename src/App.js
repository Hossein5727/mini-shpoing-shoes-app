import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BuyShoping from './components/shop/BuyShoping';
import MainShop from './components/shop/MainShop';
import ShopProviderContext from './provider/ShopProviderContext';


function App() {
  return (
    <div>
      <ShopProviderContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainShop />} />
            <Route path="/buy" element={<BuyShoping />} />
          </Routes>
        </BrowserRouter>
      </ShopProviderContext>
    </div>
  );
}

export default App;
