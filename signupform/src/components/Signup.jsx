import { useState } from "react";


const Signup=()=>{

    const [user,setUser]=useState({
        petname:"",
        pettype:"",
        breed:"",
        yourname:"",
        email:"",
        phone:""

    });

    function handleChange(e){
        console.log(e);
        
        console.log(e.target.name,e.target.value);
        const name=e.target.name;
        const value=e.target.value;
        setUser({
            ...user,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Signup Form</h2>
                </div>

                <div className="petname">
                    <label>Pet Name</label>
                    <input type="text" placeholder="Pet Name" name="petname" onChange={handleChange} value={user.petname}/>
                </div>

                <div className="pettype">
                    <label>Pet Type</label>
                    <input type="text" placeholder="Pet Type" name="pettype" onChange={handleChange} value={user.pettype}/>
                </div>

                <div className="breed">
                    <label>Breed</label>
                    <input type="text" placeholder="Breed" name="breed" onChange={handleChange} value={user.breed}/>
                </div>

                <div className="yourname">
                    <label>Your Name</label>
                    <input type="text" placeholder="Your Name" name="yourname" onChange={handleChange} value={user.yourname}/>
                </div>

                <div className="email">
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange} value={user.email}/>
                </div>

                <div className="phone">
                    <label>Phone</label>
                    <input type="number" placeholder="Phone" name="phone" onChange={handleChange} value={user.phone}/>
                </div>

                <div>
                    <button type="submit">submit</button>
                </div>
                


            </form>
            
        </div>
    );
    
}
export default Signup;