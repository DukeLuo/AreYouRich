import React, { Component } from 'react';
import './index.scss';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 0,
        };
        this.makeRadial = this.makeRadial.bind(this);
    }

    makeRadial(amount = 60) {
        let degree = 360 / amount;

        return [...Array(amount / 2).keys()].map((_, index) => {
            return (
                <div key={index} className={`tick tick-${((index + 1) * degree).toFixed(0)}`}>
                    <div className='dot dot-top'></div>
                    <div className='dot dot-bottom'></div>
                </div>);
        }
        );
    }

    render() {
        let radials = this.makeRadial(28);

        return (
            <div className='Dashboard'>
                <div className="table">
                    <div className="table-cell">
                        <div id="main">
                            <div id="home">
                                <div id="radial">
                                    {radials}
                                    <div id="empty"></div>
                                </div>
                                <h1 id="countdown">{this.state.count}</h1>
                                <div id="mph">mph</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;
