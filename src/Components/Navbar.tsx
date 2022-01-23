import React from "react";



const Navbar=()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark navbar-expand m-auto text-white bg-secondary mb-1">
           <h1 style={{marginLeft:"20px",backgroundColor:"sandybrown",color:"black",padding:"3px",borderRadius:"10px" }}>RECIPE APP</h1>

          <a href="/Home"className='navbar-brand m-auto'>Home</a>
          <a href="/Details" className='navbar-brand m-auto'>Details</a>
          <a href="/About"className='navbar-brand m-auto'>About</a>
          <a href="/ContactUs"className='navbar-brand m-auto'>ContactUs</a>
          <form>
              <a href="/SignUp" className="btn btn-success btn-m" >SignUp</a>
              <a href="/SignIn" className="btn btn-success btn-m" >SignIn</a>
              
          </form>
            </nav>
        </React.Fragment>
    )
}

    

export default Navbar;