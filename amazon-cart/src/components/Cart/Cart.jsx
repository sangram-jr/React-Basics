import { useContext } from "react";
import { cartContext } from "../../store/context";


const Cart=()=>{
    const {cartItem, addToCart,deleteFromCart,getTotal,clearCart}=useContext(cartContext)

    return(
        <div>
          <div>
            {
                cartItem.map((x)=>(
                    <div key={x.id}>
                        <img src={x.image}/>
                        <div>
                            <p>{x.name}</p>
                            <p>{x.price}</p>
                        </div>
                        <div>
                            <button onClick={()=> addToCart(x)}>+</button>
                            <button onClick={()=>deleteFromCart(x)}>-</button>
                            <p>{x.quantity}</p>
                        </div>
                    </div>
                ))
            }
          </div>
          {
            cartItem.length>0 ? (
                <div>
                    <h1>total: ${getTotal()}</h1>
                    <button onClick={()=>clearCart()}>clear cart</button>
                </div>
            ) : (<h1>your cart is empty</h1>)
          }
         
        </div>
    )
}



export default Cart;