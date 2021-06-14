import React from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './LoginForm.css';

/**
 * A função LoginForm reutiliza os componentes Input e Button do diretório components/ é um componente stateless
 * 
 * 
 * @author Mieli
 * @param {email, senha, onChange, onSign} props 
 * @returns  exibe na tela um formulário para o usuário efetuar Login
 */

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