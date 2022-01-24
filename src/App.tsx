import React from "react";
import Form from "./Components/Form";
import FormsBinding from "./Components/FormsBinding";

interface Istate{}
    
interface Iprops{}

class App extends React.Component<Istate, Iprops>{
    constructor(props:Iprops){
        super(props)
      
    }
    
    render(){
        return(
            <React.Fragment>
           <FormsBinding/>
           <Form/>
            </React.Fragment>
        )
    }
}
export default App;