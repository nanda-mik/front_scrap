import React, { Component } from 'react';
import './main.css'
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }

    onSubmit = () => {
        this.setState({redirect: true});
    }

    render(){
        let redirect = null;
        if(this.state.redirect){
            redirect = <Redirect to="/table" />
        }
        return(
                <div>
                    <div>
                        <h2>Enter websites to monitor</h2>
                        <input className="input" placeholder="Add website"></input>
                        <div className="btn"><Button variant="contained" color="primary">Add</Button></div>
                    </div>
                    <div className="added-sites">
                        <h3>Websites under monitor</h3>   
                        <Button variant="contained" color="primary" onClick={this.onSubmit}>StartupTalky</Button>
                    </div>
                    {redirect}
                </div>
        );
    }
}

export default Main;