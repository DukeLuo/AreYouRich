import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../../components/Menu';
import { getPoem } from '../../redux/poem/action';
import './index.scss';

export class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            poem: '',
        };
    }

    componentDidMount() {
        this.props.getPoem();
    }

    render() {
        return (
            <div className="Home" data-testid="home">
                <Menu />
                <section className="content">
                    <h2 className="poem">{this.props.poem}</h2>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    poem: state.poemReducer.poem,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getPoem,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
