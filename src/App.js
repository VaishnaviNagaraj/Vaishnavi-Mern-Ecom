
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import OrderSummary from './Pages/OrderSummary';
import Footer from './Components/Footer/Footer';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Breadcrumb/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/ordersummary' element={<OrderSummary/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
