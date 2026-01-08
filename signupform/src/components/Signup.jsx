import { useState } from "react";
import Showdata from "./Showdata";


const Signup=()=>{

    const [user,setUser]=useState({ //first store the data into object 
        petname:"",
        pettype:"",
        breed:"",
        yourname:"",
        email:"",
        phone:""

    });
    const [formData,setFormData]=useState([]);//all data store to the array, because we cannot display the data in object form 
    const [showTable,setShowTable]=useState(false);// to display the table or not

   
    



    function handleChange(e){
        //console.log(e);
        //console.log(e.target.name,e.target.value);

        const name=e.target.name;
        const value=e.target.value;
        setUser({
            ...user,        //preserve previous all the data
            [name]:value     //then add this one to the user state variable
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("all form data:", user);

        
       

        setFormData([
            ...formData,     // preserve previous data
            user             // then add the new data to the formData state varialbe(now all the data store in formData array)
        ]);

        //after submit empty the input field
        setUser({
            petname:"",
            pettype:"",
            breed:"",
            yourname:"",
            email:"",
            phone:""
        })
        //after submit display the table
        setShowTable(true);
        
    }


    //The handleGoBack function toggles the value of showTable.
     
    function handleGoBack(){
        setShowTable(!showTable);
    }
    

    if(!showTable){   //if showTable is false

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
                <br />
                <br />
                
                
            </div>
            
        );

    }
    //if showTable==true, then go to showData component(where we print the table)
    return <Showdata formData={formData} handleGoBack={handleGoBack}/>
    
    
}
export default Signup;