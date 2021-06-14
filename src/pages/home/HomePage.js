import React from 'react'
import * as AuthorizationService from '../../service/AuthorizatonService';

class HomePage extends React.Component{

    render(){
        const user = AuthorizationService.getCurrentUser();
        return(
            <div>
                <h1>Página Home</h1>
                <p>Bem vindo, {user.userName}</p>
            </div>
        );
    }
}

export default HomePage;