import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';
import { useState } from 'react';


const Navbar=()=>{
    
    const[open,setOpen]=useState(false);

    function toggleOpen(){
        setOpen(!open);
    }

    return(
        <div>
            <BrowserRouter>
                {/* Navlink */}
                <nav className='flex justify-between bg-slate-900 h-14  text-white'>
                    <div className='ml-30 mt-2.5 cursor-pointer font-bold text-2xl  hover:text-slate-300 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <h4>amazon.in</h4>
                    </div>
                    {/*Desktop Nav */} 
                    <div className='hidden sm:flex sm:mr-30 sm:mt-3.5 sm:font-semibold'>
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
                    
                    <button onClick={toggleOpen} className='sm:hidden text-2xl cursor-pointer mr-3'>☰</button>
                    
                </nav>
                {/*Mobile Nav */}
                {open && (
                    <nav>
                        <div className='sm:hidden flex flex-col bg-slate-900 text-white items-center justify-center p-4  font-semibold '>
                            <NavLink to="/" className=' cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                                Wishlist
                            </NavLink>

                            <NavLink to="/cart" className=' cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                                Cart
                            </NavLink>

                            <NavLink to="/" className=' cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                                About Us
                            </NavLink>

                            <NavLink to="/" className=' cursor-pointer inline-block transform hover:text-slate-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                                Login
                            </NavLink>
                            
                        </div>
                    </nav>
                )}

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