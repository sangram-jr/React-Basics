import { createContext, useContext } from "react";
import { useState } from "react";
import { cartContext } from "../../store/context";

const Wishlist=()=>{
    const { addToCart }=useContext(cartContext)
    const [item,setItem]=useState([
        { 
            id: 1, 
            name: 'Laptop Stand', 
            price: 299, 
            image:'https://m.media-amazon.com/images/I/610ar-RgbpL._AC_UL480_FMwebp_QL65_.jpg'
        },
        { 
            id: 2, 
            name: 'Desktop', 
            price: 1999, 
            image:'https://m.media-amazon.com/images/I/71I0KQmcYBL._AC_UY327_FMwebp_QL65_.jpg'
        },
        { 
            id: 3, 
            name: 'Laptop', 
            price: 7999, 
            image:'https://m.media-amazon.com/images/I/71H9R4OoBOL._AC_UY327_FMwebp_QL65_.jpg'
		}
    ])

    return (
        <div className="min-h-screen bg-slate-100 text-black">
            <div>
                <h1 className=" flex justify-center items-center font-bold pt-8 text-4xl">Your Wish List</h1>
            </div>
            <div className=" flex justify-center items-center flex-wrap my-4">
                {
                    item.map((x)=>(
                        <div key={x.id} className="bg-white h-100 w-100 m-3 shadow-md rounded-xl flex flex-col justify-center items-center">
                            <img src={x.image} height={100} width={150}/>
                            <div className="font-bold my-4">
                                <p>{x.name}</p>
                                <p>${x.price}</p>
                            </div>
                            
                            <button onClick={()=> addToCart(x)} className="bg-amber-300 text-black  rounded-3xl w-48 h-8 text-center font-semibold cursor-pointer py-1 transition delay-100 duration-300 ease-in hover:bg-amber-400 hover:translate-y-1 hover:scale-105 hover:cursor-pointer  shadow-md">add to cart</button>
                            
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}
export default Wishlist;