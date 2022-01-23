import React from "react";
    


// import Img7 from '../models/Image/chicken.jpg'
// import Img8 from '../models/Image/chicken.jpg'
const Card = (props: { Image: string, name: string, Para: string }) => {
    return (
        <React.Fragment>

            <div style={{ float: "left" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-3 " style={{
                                width: "300px", height: "450px", marginLeft: "20px",
                                boxShadow: "0 0 50px brown", backgroundColor: "white", borderRadius: "50px"
                            }}>                                                                                             
                                <img src={props.Image} style={{ width: "300px", height: "200px", borderRadius: "50px" }} />
                                <div className="card-body bg-success" style={{ borderRadius: "50px" }}>
                                    <h1>{props.name}</h1>
                                    <p>{props.Para}</p>
                                    <h2>Star Rating</h2>
                                    <span style={{color:"orange"}} className="fa fa-star "></span>
                                    <span style={{color:"orange"}}className="fa fa-star "></span>
                                    <span style={{color:"orange"}} className="fa fa-star"></span>
                                    <span style={{color:"orange"}} className="fa fa-star"></span>
                                    <span className="fa fa-star"></span><br/>
                                    <button className="btn btn-info">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Card;