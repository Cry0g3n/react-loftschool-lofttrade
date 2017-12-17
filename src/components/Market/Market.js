import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import "./Market.css";
import Header from "../Header";
import Footer from "../Footer";
import {LineChart} from "react-chartkick";

import {fetchUserRequest, selectBtc, selectEth, selectOffset} from "../../actions/currency";
import TradeOperations from "../TradeOperations";
import Wallet from "../Wallet";

import {getMaxVal, getMinVal, getOffset, getSymbol, isFetching, purchase, sell} from "../../reducers/currency";
import Loader from "../Loader/Loader";

const offsets = [
    ['2h', '2ч'],
    ['4h', '4ч'],
    ['8h', '8ч'],
    ['1d', '1д'],
    ['7d', '7д'],
];

export class Market extends PureComponent {

    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        if (symbol) {
            this.props.selectBtc(symbol);
        }
        this.props.fetchUserRequest();
    }

    componentWillReceiveProps(nextProps) {
        const currentSymbol = this.props.match.params.symbol;
        const nextSymbol = nextProps.match.params.symbol;

        if (currentSymbol !== nextSymbol) {
            if (nextSymbol !== undefined) {
                this.props.selectBtc(nextSymbol);
            }
        }
    }

    selectPeriodHandler = (e) => {
        this.props.selectOffset(e.target.name);
    };

    render() {

        const {isFetching, minVal, maxVal, sell, purchase, currOffset, symbol} = this.props

        return (
            <div className="app">
                <div className="wrap">
                    <Header symbol={symbol}/>
                    <main className="container main">
                        <aside className="main__sidebar">
                            <Wallet/>
                            <TradeOperations/>
                        </aside>
                        <article className="main__content">
                            <div className="period-panel" onClick={this.selectPeriodHandler}>
                                {offsets.map((el, index) => (
                                    (el[0] === currOffset)
                                        ?
                                        <button
                                            className="period-panel__item period-panel__item_active"
                                            name={el[0]}
                                            key={index}>{el[1]}
                                        </button>
                                        :
                                        <button className="period-panel__item" name={el[0]} key={index}>{el[1]}</button>
                                ))}

                            </div>
                            {isFetching ?
                                <div className="main__loader-wrapp">
                                    <Loader/>
                                </div>
                                :
                                <LineChart
                                    colors={["#3694dc", "#e2428e"]}
                                    data={[{name: 'Продажа', data: sell}, {name: 'Покупка', data: purchase}]}
                                    min={minVal}
                                    max={maxVal}
                                    width={750}
                                    height={400}
                                />
                            }
                        </article>
                    </main>
                </div>
                <Footer/>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    sell: sell(state),
    purchase: purchase(state),
    minVal: getMinVal(state),
    maxVal: getMaxVal(state),
    isFetching: isFetching(state),
    currOffset: getOffset(state),
    symbol: getSymbol(state)
});

const mapDispatchToProps = {
    selectBtc,
    selectEth,
    selectOffset,
    fetchUserRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);