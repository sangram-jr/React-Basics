import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import logo from '../../assets/logo.png'

const Navbar=()=>{
    return(
        <div>
            <BrowserRouter>
                {/* Navlink */}
                <nav className='flex justify-between bg-violet-700 h-10  text-white'>
                    <div className='ml-30 mt-1 cursor-pointer font-bold'>
                        <h4>amazon</h4>
                    </div>
                    <div className='mr-30 mt-1'>
                        <span className='mr-8 cursor-pointer'><NavLink to={"/"}>Wishlist</NavLink></span>
                        <span className='mr-8 cursor-pointer'><NavLink to={"/cart"}>Cart</NavLink></span>
                        <span className='mr-8 cursor-pointer'><NavLink to={"/"}>About Us</NavLink></span>
                        <span className='cursor-pointer'><NavLink to={"/"}>Login</NavLink></span>
                        
                    </div>
                    
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