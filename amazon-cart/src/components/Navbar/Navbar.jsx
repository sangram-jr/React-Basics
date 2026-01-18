import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';


const Navbar=()=>{
    return(
        <div>
            <BrowserRouter>
                {/* Navlink */}
                <nav className='flex justify-between bg-slate-900 h-14  text-white'>
                    <div className='ml-30 mt-2.5 cursor-pointer font-bold text-2xl  hover:text-slate-300 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <h4>amazon</h4>
                    </div> 
                    <div className='mr-30 mt-3.5 font-semibold '>
                        <NavLink to="/" className='mr-8 cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                            Wishlist
                        </NavLink>

                        <NavLink to="/cart" className='mr-8 cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                            Cart
                        </NavLink>

                        <NavLink to="/" className='mr-8 cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                            About Us
                        </NavLink>

                        <NavLink to="/" className='mr-8 cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                            Login
                        </NavLink>
                        
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