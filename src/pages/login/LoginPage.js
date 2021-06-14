import React from 'react';
import { LoginForm } from './LoginForm';
import * as AuthorizationService from '../../service/AuthorizatonService';
import './LoginPage.css';

/**
 * A Classe LoginPage é responsável por gerenciar o estado do formulário de login, é um componente statefull  
 * 
 * 
 * @author Mieli
 * @param {} props 
 * @returns página responsável pelo gerenciamento do estado do componente formulário 
 */
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage:"",
            credential: {
                email: "",
                senha: ""
            }
        }
    }

    handlerChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const credential = {
            ...this.state.credential,
            [name]: value
        }
        this.setState({ credential });
    }

    handlerSign = async (event) => {
        let authenticated = false;
        try {
            authenticated = await AuthorizationService.authenticated(this.state.credential);
            if (authenticated) {
                this.setState({errorMessage:""});
                this.props.history.push('/');
            } else {
               this.setState({errorMessage:"Credenciais inválidas"});
            }
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        console.log(this.state.credential)
        return (
            <div className="login__page">
                <LoginForm
                    messageError={this.state.errorMessage}
                    credential={this.state.credential}
                    onChange={this.handlerChange}
                    onSign={this.handlerSign}
                />
            </div>
        );
    }
}

export default LoginPage;