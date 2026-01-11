import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import './Navbar.css'
const Navbar=()=>{
    return(
        <div>
            <BrowserRouter>
                {/* Navlink */}
                <nav>
                    <NavLink to={"/"}>Wishlist</NavLink>
                    <NavLink to={"/cart"}>Cart</NavLink>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path='/' element={<Wishlist/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navbar;