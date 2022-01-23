import React, {useState } from "react";

const SignUp=()=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState('')
    const [pass,setpass]=useState("")
    const [repass,setrepass]=useState("")
    const subHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(pass)
        console.log(repass)
    }
    return(
        <React.Fragment>
            <h6>name:{name}&nbsp;&nbsp;email:{email}&nbsp;&nbsp;password:{pass}&nbsp;&nbsp;repassword{repass}</h6>
           
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <div className="card mt-5 bg-success" style={{boxShadow:"0 0 20px red"}}>
                        <div className="card-header">
                            <h2 className="text-center">SignUp</h2>
                        </div>
                        <div className="card-body  bg-secondary">
                            <form onSubmit={subHandler}>
                                <input type="text" placeholder="Enter Name " className="form-control mt-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setname(e.target.value)} />
                                <input type="email" placeholder="Enter Email " className="form-control mt-2"onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setemail(e.target.value)} />
                                <input type="password" placeholder="Enter password " className="form-control mt-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setpass(e.target.value)}/>
                                <input type="password" placeholder=" Re-Enter password " className="form-control mt-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setrepass(e.target.value)}/>
                                <button className="btn btn-primary mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default SignUp;