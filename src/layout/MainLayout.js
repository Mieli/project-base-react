import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';

class MainLayout extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact={true} component={HomePage} />
                        <Route path='/login' component={LoginPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MainLayout;