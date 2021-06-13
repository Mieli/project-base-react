import React from 'react';
import { LoginForm } from './LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            credential: {
                email:"",
                senha:""
            }
        }
    }

    handlerChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const credential = {
            ...this.state.credential,
            [name]:value
        }
        this.setState({credential});
    }

    handlerSign = (event) => {
        alert('botão clicado');
    }



    render() {
        console.log(this.state.credential)
        return (
            <div className="login__page">
                <LoginForm 
                    credential={this.state.credential} 
                    onChange={this.handlerChange}
                    onSign={this.handlerSign}

                />
            </div>
        );
    }
}

export default LoginPage;