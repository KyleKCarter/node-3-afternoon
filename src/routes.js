import React from "react";
import {Switch, Route} from "react-router-dom";

//components
import firstView from "./firstView";
import secondView from "./secondView";

export default (
    <Switch>
        <Route component={firstView} exact path='/' />
        <Route component={secondView} path='/page2' />
    </Switch>
)