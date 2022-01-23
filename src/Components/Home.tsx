
import React from "react";
import Img1 from '../models/Image/chicken.jpg'
import Img2 from '../models/Image/mutton.jpg'
import Img3 from '../models/Image/fish.jpg'
import Img4 from '../models/Image/tanduri.jpg'
import Img5 from '../models/Image/pizza.jpg'
import Img6 from '../models/Image/burger.jpg'
import Img7 from '../models/Image/rice.jpg'
import Img8 from '../models/Image/curdrice.jpg'
import Card from "./Card";


const Home=()=>{
    return(
<React.Fragment>
    <h1 style={{backgroundColor:"blue",marginRight:"83rem",paddingLeft:"10px"}}>RECIPES</h1>
<Card Image={Img1} name={"Chicken"} Para={"Chicken Leg Pieces"}/>
<Card Image={Img2} name={"Mutton"} Para={"mutton Soop"}/>
<Card Image={Img3} name={"Fish"} Para={"Fish Fry"}/>
<Card Image={Img4} name={"Tanduri"} Para={"Rosting full chicken tanduri"}/>
<Card Image={Img5} name={"Pizza"} Para={"cheese with chicken burger"}/>
<Card Image={Img6} name={"Burger"} Para={"Double and cheeseburgers"}/>
<Card Image={Img7} name={"Rice"} Para={"Normal Rice"}/>
<Card Image={Img8} name={"Curdrice"} Para={"Normal Curd Rice"}/>

    
</React.Fragment>
    )
}
export default Home;
