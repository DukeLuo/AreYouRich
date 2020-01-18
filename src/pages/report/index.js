import React, { Component } from 'react';
import Menu from '../../components/Menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReport } from '../../redux/finance/action';
import './index.scss';

export class FinanceReport extends Component {
    constructor(props, context) {
        super(props, context);
        this.generateReport = this.generateReport.bind(this);
    }

    generateReport() {
        const report = this.props.report || {};
        return (
            <div className="report">
                <h2>体检单</h2>
                <p>
                    应急能力：
                    {report.emergencyAbility ? report.emergencyAbility : 0}
                </p>
                <p>
                    储蓄能力：{report.savingAbility ? report.savingAbility : 0}
                </p>
                <p>
                    资产生息能力：
                    {report.assetGrowthAbility ? report.assetGrowthAbility : 0}
                </p>
                <p>综合能力：{report.totalAbility ? report.totalAbility : 0}</p>
                <p>{report.comment}</p>
                <p id="signature">
                    Report by: <span>Fan</span>
                </p>
            </div>
        );
    }

    componentDidMount() {
        this.props.getReport();
    }

    render() {
        return (
            <div className="finance-report">
                <Menu />
                <section className="content">{this.generateReport()}</section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    report: state.financeReducer.report,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getReport,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(FinanceReport);
