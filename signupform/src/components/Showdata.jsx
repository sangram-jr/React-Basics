import './Showdata.css'
function Showdata({formData,handleGoBack}){
    return (
        <div className='upper'>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Breed</th>
                            <th>Your Name</th>
                            <th>Gmail</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formData.map((data,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{data.petname}</td>
                                        <td>{data.pettype}</td>
                                        <td>{data.breed}</td>
                                        <td>{data.yourname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>   
                </table>
            </div>

            <div>
                <button onClick={handleGoBack} className='btn2'>Go to signUp form</button>
            </div>

        </div>
    )
}
export default Showdata;