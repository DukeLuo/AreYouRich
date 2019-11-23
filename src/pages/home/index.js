import React, { Component } from 'react';
import Menu from '../../components/Menu';
import './index.scss';

export class Home extends Component {
    render() {
        return (
            <div className='Home' >
                <Menu />
            </div>
        );
    }
}

export default Home;
