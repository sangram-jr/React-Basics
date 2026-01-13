import { useState } from "react";

const Wishlist=()=>{
    const [item,setItem]=useState([
        { 
            id: 1, 
            name: 'GFG T-shirt', 
            price: 499, 
            image:'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
        },
        { 
            id: 2, 
            name: 'GFG Bag', 
            price: 699, 
            image:'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
        },
        { 
            id: 3, 
            name: 'GFG Hoodie', 
            price: 799, 
            image:'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
		}
    ])

    return (
        <div>
            {
                item.map((x)=>(
                    <div key={x.id}>
                        <img src={x.image}/>
                        <div>
                            <p>{x.name}</p>
                            <p>{x.price}</p>
                        </div>
                        <div>
                            <button>add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Wishlist;