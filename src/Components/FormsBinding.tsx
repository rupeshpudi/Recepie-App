import React from "react";
import { Iuser } from "./Iuser";

interface IProps { }
interface IState 
{
    user:Iuser;
}

class FormsBinding extends React.Component<IProps, IState>
{
    constructor(props: IProps) {
        super(props);

        this.state={
            user:{
                username:'',
                email:'',
                password:'',
                desc:'',
                desg:'',
                terms:false
            }
        }
    }
    //Update Text

    updateText=(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>
    {
        this.setState(
            {
                user:{
                   ...this.state.user,
                   [event.target.name]:event.target.value 
                }
            }
        )
    }
    //UpdateCkeck
    updateCheck=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                user:{
                   ...this.state.user,
                   [event.target.name]:event.target.checked 
                }
            }
        )
    }

    //Submit Register
    submitRegister=(event:React.FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        console.log(this.state.user);
    }
    render()//instance Method
    {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <section className="mt-3">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <div className="card">
                                <div className="card-header bg-primary text-white text-center">
                                    <h1>Register Here</h1></div>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={this.submitRegister}>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control"
                                         placeholder="Enter Username" 
                                         onChange={this.updateText} name="username"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" 
                                        placeholder="Enter Email" onChange={this.updateText} name="email"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" className="form-control" 
                                        placeholder="Enter Password" name="password" onChange={this.updateText}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea id="" cols={30} 
                                        rows={3} className="form-control" 
                                        placeholder="Description" 
                                        name="desc" onChange={this.updateText}></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <select name="desg" 
                                        id="" className="form-control" onChange={this.updateText}>
                                            <option>Select Designation</option>
                                            <option>Team Lead</option>
                                            <option>Team Manager</option>
                                            <option>Software Dev..</option>
                                        </select>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input"
                                         type="checkbox" value="" name="terms" onChange={this.updateCheck}/>
                                        <label className="form-check-label">
                                        Accept Terms & Conditions
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" />
                                    </div>
                                   
                        </form>
                    </div>
                </div>
            </div>
              </section >
          </React.Fragment >
       )
    }
}

export default FormsBinding;