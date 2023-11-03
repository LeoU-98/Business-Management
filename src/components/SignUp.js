import React, { Component } from 'react'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import './SignUp.css'

class SignUp extends Component {
    state={
        fullname:'',
        email:'',
        password:'',
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.fullname);
        console.log(this.state.email);
        console.log(this.state.password);
    }


    handleChange=(e)=>{
        const value = e.target.value;
        this.setState({ ...this.state, [e.target.name]: value });
    }
    
    render() {
    return (

        <div class="sign-up">

            <div class="text">
                <h1>LeoU's</h1>
                <p>
                    We will help You to manage Your business with ease and modern world technologies
                </p>
            </div>



            <div class="sign-up-box">
                <form onSubmit={this.handleSubmit}>
                    <div class="logo">
                        <img src="images/user.png" alt="user icon" />
                        <h1>CREATE ACCOUNT</h1>
                    </div>
                    <p>already have an account ? <a href="#" id="link-in-p">Sign In</a></p>
                    <br />
                    <input type="text" name="fullname" id="fullname" placeholder=" FullName"onChange={this.handleChange}required /> <br />
                    <br />
                    <input type="email" name="email" id="email" placeholder=" Email"onChange={this.handleChange}required /> <br />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password"onChange={this.handleChange} required /> <br />
                    <FormControlLabel control = {<Checkbox />} id="terms" label = "I accept the Terms of Use & Privacy Policy." required /> 
                    <br />
                    <button onClick={this.changeState} className="sign-up-btn">Sign Up</button>
                    <p> Problem with signup <a href="/Contact" id="link-in-p"> Contact Us</a></p>
                </form>

            </div>

        </div>






        




























    )
}
}

export default SignUp;



