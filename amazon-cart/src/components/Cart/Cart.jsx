import { useContext } from "react";
import { cartContext } from "../../store/context";


const Cart=()=>{
    const {cartItem, addToCart,deleteFromCart,getTotal,clearCart}=useContext(cartContext)

    return(
        <div className="min-h-screen bg-slate-100 text-black">
            <div>
                <h1 className=" flex justify-center items-center font-bold pt-8 text-4xl">Shoping Cart</h1>
            </div>
            <div className="flex justify-between my-4">
                <div className="ml-30 mr-7">
                {
                    cartItem.map((x)=>(
                        <div key={x.id} className="flex h-50 w-230 bg-white shadow-md m-5">
                            <div className="p-10">
                                <img src={x.image} height={100} width={150}/>
                            </div>
                            <div className="pl-45 pt-15">
                                <p className="font-bold text-xl text-gray-800">{x.name}</p>
                                <p className="text-green-500 text-md font-semibold mt-1.5">In Stock</p>
                                <div className="flex gap-4.5 mt-1.5">
                                    <button onClick={()=> addToCart(x)} className="bg-gray-400 text-black font-semibold text-lg rounded-sm h-5 w-5 cursor-pointer flex justify-center items-center hover:bg-gray-300">+</button>
                                    <p className="font-semibold text-md">{x.quantity}</p>
                                    <button onClick={()=>deleteFromCart(x)} className="bg-gray-400 text-black font-semibold text-lg rounded-sm h-5 w-5 cursor-pointer flex justify-center items-center hover:bg-gray-300">-</button> 
                                </div>
                                   
                            </div>
                            <div className="pl-75 pt-20 font-bold text-lg">
                                <p>${x.price}.00</p>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className="mr-30">
                    {
                        cartItem.length>0 ? (
                            <div className="bg-white h-80 w-70 mr-10 mt-6 rounded-sm ">
                                <h1 className="font-bold text-2xl pt-5 pl-3">Order Summary</h1>

                                {/* this div for horizontal line*/}
                                <div className="px-3 mt-6">
                                    <div className="h-px bg-gray-400"></div>
                                </div>
                                
                                <div className="pt-7 flex justify-between">
                                    <h1 className="font-bold text-lg pl-4">Order Total : </h1>
                                    <h1 className="font-bold text-lg pr-4">${getTotal()}</h1>
                                </div>

                                <div className="flex justify-center items-center mt-7">
                                    <button className="bg-amber-300 text-black h-8 w-42 rounded-sm text-center font-semibold cursor-pointer shadow-2xl transition-all delay-150 duration-300 ease-in hover:bg-amber-400 hover:scale-105">Proceed to Buy</button>
                                </div>
                                <div className="flex justify-center items-center mt-9">
                                    <button onClick={()=>clearCart()} className="bg-red-500 text-black h-8 w-42 rounded-sm text-center font-semibold cursor-pointer shadow-2xl transition-all delay-150 duration-300 linier hover:bg-red-600 hover:scale-105">clear cart</button>
                                </div>
                                
                            </div>
                        ) : (<h1 className="font-bold text-4xl mt-55 mr-120 text-red-500 shadow-2xl">your cart is empty</h1>)
                    }
                </div>
            </div>            
        </div>
    )
}



export default Cart;