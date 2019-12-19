import React, { Component } from 'react';
import levels from '../../constants/levels';
import './index.scss';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.makeRadial = this.makeRadial.bind(this);
        this.getLevel = this.getLevel.bind(this);
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

    getLevel() {
        let level = levels.find(item => this.props.score >= item.lo
            && this.props.score <= item.hi);

        return level.description;
    }

    render() {
        let radials = this.makeRadial(28);

        return (
            <div className='Dashboard'>
                <div id="main">
                    <div id="home">
                        <div id="radial">
                            {radials}
                            <div id="empty"></div>
                        </div>
                        <h1 id="score">{this.props.score}</h1>
                        <div id="level" data-testid='level'>{this.getLevel()}</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;
