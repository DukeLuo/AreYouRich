import React, { Component } from 'react';
import Menu from '../../components/Menu';
import { getPoem } from '../../api';
import './index.scss';

export class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            poem: '',
        };
    }

    componentDidMount() {
        getPoem().then(({ content }) => {
            this.setState({
                poem: content,
            });
        });
    }

    render() {
        return (
            <div className='Home' >
                <Menu />
                <section className='content'>
                    <h2 className='poem'>{this.state.poem}</h2>
                </section>
            </div>
        );
    }
}

export default Home;
