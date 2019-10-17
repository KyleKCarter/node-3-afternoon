import React, {Component} from "react";
import axios from "axios";
import { HashRouter } from "react-router-dom";
import routes from './routes';

//components

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <HashRouter>
                <div>
                    {routes}
                </div>
            </HashRouter>
        )
    }
}