import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';
import { getStorage } from '../utils/storage';
import Home from '../pages/home';
import FinanceDetail from '../pages/financeDetail';
import financeDetailInputFieldConfig from '../constants/financeDetailInputFieldConfig';
import './app.scss';

const financeDetailPaths = ['/emergency', '/solvency', '/saving', '/interest'];
const financeDetailRender = (routeProps) => {
    const {
        match: { path: match },
    } = routeProps;
    const { [match]: inputFieldConfig } = financeDetailInputFieldConfig;

    if (getStorage('tokenId')) {
        return <FinanceDetail inputFields={inputFieldConfig} />;
    }
    return (
        <Redirect
            to={{
                pathname: '/',
                state: { from: routeProps.location },
            }}
        />
    );
};

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            path={financeDetailPaths}
                            exact
                            render={financeDetailRender}
                        />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
