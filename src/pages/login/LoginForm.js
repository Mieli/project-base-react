import React from 'react';
import Input from '../../components/input/Input';
import './LoginForm.css';

class LoginForm extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="login__form">
                <h1>Login</h1>
                <label>Email</label>
                <Input
                    name="email"
                    type="text"
                    value={this.props.credential.email}
                ></Input>
                <label>Senha</label>
                <Input
                    name="senha"
                    type="password"
                    value={this.props.credential.senha}
                ></Input>

                <button>Entrar</button>
            </div>
        )
    }

}

export default LoginForm;