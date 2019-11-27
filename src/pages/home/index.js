import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Dashboard from '../../components/Dashboard';
import './index.scss';

export class Home extends Component {
    render() {
        return (
            <div className='Home' >
                <Menu />
                <section className='content'>
                    <Dashboard />
                </section>
            </div>
        );
    }
}

export default Home;
