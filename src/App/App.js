import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from '../pages/home';
import './app.scss'

export class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        <Route path='/' component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
