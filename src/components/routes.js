import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'
import Form from './Form/Form';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add" component={Form} />
        <Route path="/add:id" component={Form} />
    </Switch>
)