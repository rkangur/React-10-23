import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import AddProduct from './pages/admin/AddProduct';
import Supplier from './pages/admin/Supplier';
import { NotFound } from './pages/global/NotFound';
import NavigationBar from './components/NavigationBar';

// 1. Pange Firebase üles
// 2. SingleProduct vastavalt kommentaaridele
// 3. AddProduct vastavalt kommentaaridele
// 4. MaintainProducts failis kustutamine
// 5. HomePages sorteerimised:
//         nimi A-Z ja Z-A
//         hind kasvavalt ja kahanevalt
// 6. Ostukorvi lisamine HomePagest cart.json faili
// 7. Cart lehe tegemine
// 8. Filtreerimine HomePage lehel category järgi
// näidake mitu toodet on avalehel nähtavad

function App() {

  return (
    <div className="App">

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Playfair+Display&display=swap');
    </style>

    <NavigationBar /> 

        <Routes>
          <Route path="" element={ <HomePage />} />
          <Route path="cart" element={ <Cart />} />
          <Route path="contact" element={ <ContactUs />} />
          <Route path="shops" element={ <Shops />} />
          <Route path="product/:product_id" element={ <SingleProduct />} />
          <Route path="admin" element={ <AdminHome />} />
          <Route path="admin/add" element={ <AddProduct />} />
          <Route path="admin/edit/:product_id" element={ <EditProduct />} />
          <Route path="admin/categories" element={ <MaintainCategories/>} />
          <Route path="admin/products" element={ <MaintainProducts />} />
          <Route path="admin/supplier" element={ <Supplier />} />
          <Route path="admin/shops" element={ <MaintainShops />} />
          <Route path="login" element={ <Login />} />
          <Route path="signup" element={ <SignUp />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      
    </div>
  );
}

export default App;
