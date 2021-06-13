import React from 'react';
import LoginForm from './LoginForm';
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

    render() {
        return (
            <div className="login__page">
                <LoginForm credential={this.state.credential} />
            </div>
        );
    }
}

export default LoginPage;