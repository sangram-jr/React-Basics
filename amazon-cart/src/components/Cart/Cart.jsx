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
                <div className="ml-30">
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
                            <div>
                                <h1>total: ${getTotal()}</h1>
                                <button onClick={()=>clearCart()}>clear cart</button>
                            </div>
                        ) : (<h1>your cart is empty</h1>)
                    }
                </div>
            </div>
            
          
          
         
        </div>
    )
}



export default Cart;