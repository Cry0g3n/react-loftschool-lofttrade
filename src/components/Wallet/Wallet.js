import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import "./Wallet.css";
import {getCoinsBtc, getCoinsEth, getCoinsMoney, getError, getIsLoading} from "../../reducers/wallet";
import Loader from "../Loader/Loader";

export class Wallet extends PureComponent {

    render() {
        const {isLoading, coinsMoney, coinsBtc, coinsEth} = this.props;
        return (
            <div className="wallet">
                <h3 className="wallet__title">Ваш счет</h3>
                {isLoading ?
                    <Loader/>
                    :
                    <div className="wallet-list">
                        {[[coinsMoney, '$'], [coinsBtc, 'BTC'], [coinsEth, 'ETH']].map(([amount, symbol]) => (
                            <div className="wallet-list__item" key={symbol}>
                                <div className="wallet-list__amount">{amount}</div>
                                <div className="wallet-list__symbol">{symbol}</div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        );
    };
}

const mapStateToProps = state => ({
    error: getError(state),
    IsLoading: getIsLoading(state),
    coinsMoney: getCoinsMoney(state),
    coinsBtc: getCoinsBtc(state),
    coinsEth: getCoinsEth(state)
});

export default connect(mapStateToProps, null)(Wallet);