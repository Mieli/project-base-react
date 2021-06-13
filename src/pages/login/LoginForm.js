import React from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './LoginForm.css';

export function LoginForm(props) {

    return (
        <div className="login__form">
            <h1>Login</h1>
            <label>Email</label>
            <Input
                name="email"
                type="text"
                value={props.credential.email}
                onChange={props.onChange}
            ></Input>
            <label>Senha</label>
            <Input
                name="senha"
                type="password"
                value={props.credential.senha}
                onChange={props.onChange}
            ></Input>

            <Button
                className="btn__login"
                name="Entrar"
                onClick={props.onSign}
            ></Button>
        </div>
    )
}