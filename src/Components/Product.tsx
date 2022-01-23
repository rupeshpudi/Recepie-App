import React from "react";

interface Types {
    image: string;
    label: string;
    calories: number;
}
const Product = (props: { data: any }) => {
    return (

        <React.Fragment>

            <h1>products</h1>

            <div className="container " >
                <div className="row">
                    {
                        props.data.map((data: { recipe: Types }) =>

                            <div className="col ">
                                <div className="card mt-3" style={{
                                    "width": "19rem", height: "450px", borderRadius: "20px 20px 20px 20px"
                                    , boxShadow: "0 0 40px green"
                                }}>
                                    <img className="card-img-top " style={{ borderRadius: "20px 20px 0 0", height: "200px" }} src={data.recipe.image} />
                                    <div className="card-body bg-secondary" style={{ borderRadius: "0 0 20px 20px " }}>

                                        <h5 className="card-title">{data.recipe.label}</h5>
                                        <p className="card-text text-white">Total Calories : {data.recipe.calories}</p>
                                     <div>
                                       <p>Star Rating</p>
                                        <span style={{color:"orange"}}  className="fa fa-star "></span>
                                        <span style={{color:"orange"}}  className="fa fa-star "></span>
                                        <span style={{color:"orange"}}  className="fa fa-star "></span>
                                        <span style={{color:"orange"}}  className="fa fa-star "></span>
                                        <span className="fa fa-star "></span><br/>
                                        </div>
                                        <a href="" className="btn btn-primary ">Buy</a>

                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </React.Fragment>
    )
}
export default Product;




