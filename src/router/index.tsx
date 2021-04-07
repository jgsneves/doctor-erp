import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Login } from '../pages/login';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;