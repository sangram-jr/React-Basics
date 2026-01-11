import cartState from "../../store/cartItemState";


const Cart=()=>{
    //use the state
    const cnt=cartState((state)=> state.count);
    const setCnt=cartState((state)=>state.setCount);

    

    return(
        <div>
          {cnt}
          <button onClick={setCnt}>add</button>
         
        </div>
    )
}



export default Cart;