import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home';
import FinanceDetail from '../pages/finance';
import FinanceReport from '../pages/report';
import './app.scss';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <PrivateRoute
                            component={FinanceDetail}
                            authed={
                                this.props.isRegisteredSuccess ||
                                this.props.isLoggedInSuccess
                            }
                            path={[
                                '/emergency',
                                '/solvency',
                                '/saving',
                                '/interest',
                            ]}
                        />
                        <PrivateRoute
                            component={FinanceReport}
                            authed={
                                this.props.isRegisteredSuccess ||
                                this.props.isLoggedInSuccess
                            }
                            path="/report"
                        />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isRegisteredSuccess: state.userReducer.isRegisteredSuccess,
    isLoggedInSuccess: state.userReducer.isLoggedInSuccess,
});

export default connect(mapStateToProps)(App);
