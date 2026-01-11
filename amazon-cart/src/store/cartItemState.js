
import {create} from 'zustand';

//create the state
const cartState=create((set,get)=>({
    count:0,
    setCount:()=> set((state)=>({count:state.count+1}))
}))

export default cartState;