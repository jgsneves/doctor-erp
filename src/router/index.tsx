import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/login';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact/>
                <Route component={Dashboard} path="/teste"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;