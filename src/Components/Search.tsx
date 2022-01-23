
// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
import Product from "./Product";


const Search=()=>{
    const [Search, setSearch]=useState("") 
    const [data,setData]=useState("")
    const YOUR_APP_ID = "6b204bfa";
  const YOUR_APP_KEY =" 5ce93ee006c16bbebb674428da3adab8";
  const submitHandler = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data =>setData(data.hits)
    )
  }
      //  axios.get(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then((Response=>{
      //  Response.data})
    //    ).catch((error)=>console.log(error))
    
    //   const  OnchangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
//       e.target.value

//     }
    
    return(
        <React.Fragment>
    {/* {JSON.stringify(Search)} */}

   
    <div style={{backgroundColor:"lightgray", paddingTop:"15px", paddingBottom:"10px"}}>
            <div className="container ">
                <div className="row">
                    <div className="col">
                    <h1 className="bg-primary text-white text-center p-2" style={{borderRadius:"10px"}}><b>RECIPE APP</b></h1>
                        <form onSubmit={submitHandler}>
                            <input type="text" placeholder="Search Order" className="form-control" value={Search} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} />
                            <input type="submit" className="btn btn-success mt-2" value="search" />
                        </form>
                        {data.length >= 1 ? <Product data ={data}/>:null} 
                    </div>
                </div>
            </div>
            </div>
        
        </React.Fragment>
    )
    } 

export default Search;





