import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
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

    return <FinanceDetail inputFields={inputFieldConfig} />;
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
