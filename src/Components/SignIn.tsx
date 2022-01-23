import React, {  FormEvent, useState } from "react";
// interface Types{
//     username:string;
//     password:string;
// }

const SignIn=()=>{
    const [data,setdata]=useState("")
    const [pass,setpass]=useState("")
    // const [hi,sethi]=useState("")
    // const[submit,setsubmit]=useState("")
   const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       console.log(data)
       console.log(pass)

   }
    return(
        <React.Fragment>
            <h6>email:{data}&nbsp;&nbsp; password:{pass}</h6>
      
           
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="card mt-5" style={{boxShadow:"0 0 20px red"}}>
                        <div className="card-header bg-success">
                            <h2 className="text-center">SignIn</h2>
                        </div>
                        <div className="card-body bg-secondary">
                            <form onSubmit={submitHandler} >
                                <input type="email" placeholder="Enter Email " className="form-control mt-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setdata(e.target.value)} />
                                <input type="password" placeholder="Enter password " className="form-control mt-2"onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setpass(e.target.value)}/> 
                                <button className="btn btn-primary mt-2" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default SignIn;


