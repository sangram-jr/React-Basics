import { createContext, useEffect, useState } from "react";

//step1: create a context
export const cartContext=createContext();

function UniversalStore({children}){
    const [cartItem,setCartItem]=useState(localStorage.getItem('totalItem')? JSON.parse(localStorage.getItem('totalItem')) : [] );

    //Add
    function addToCart(product){
        //cheak the product is already in the cart
        const isProductExist=cartItem.find((x)=>x.id===product.id);
        //if exist then increse the quantity
        if(isProductExist){
            const p=cartItem.map((x)=>(
                x.id===product.id ? {...x,quantity:x.quantity+1} : x //traverse the whole cartItem array and if id is same then increse the quantity
            ))
            setCartItem(p);
        }else{
            //else push the product to the cartItem array with quantity 1
            setCartItem([
                ...cartItem,
                {...product,quantity:1}
            ])
        }
    }

    //Delete

    function deleteFromCart(product){
        //cheak wheather the product is available
        const isProductExist=cartItem.find((x)=>x.id===product.id);
        //if quantity is 1 then delete the product
        if(isProductExist.quantity==1){
            const p=cartItem.filter((x)=>x.id!==product.id);
            setCartItem(p);//which id mismatch, push that into cartItem array
        }else{
            //decrese the quantity
            const q=cartItem.map((x)=>(
                x.id===product.id ? {...x,quantity:x.quantity-1} : x  //traverse the whole cartItem array and if id is same then decrese the quantity
            ))
            setCartItem(q);
        }
    }

    //total price
    function getTotal(){
        return cartItem.reduce((total,product)=>total+product.quantity*product.price,0);
    }

    //store in localstorage
    useEffect(()=>{
        localStorage.setItem('totalItem',JSON.stringify(cartItem) )
    },[cartItem])




    return (
        <cartContext.Provider value={{cartItem,setCartItem, addToCart,deleteFromCart,getTotal}}>
            {children}
        </cartContext.Provider>
    )
}
export default UniversalStore;