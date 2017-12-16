import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import "./Wallet.css";
import Loader from 'react-svg-spinner';
import {
    getError,
    getIsLoading,
    getCoinsMoney,
    getCoinsBtc,
    getCoinsEth

} from "../../reducers/wallet";

export class Wallet extends PureComponent{

    render(){
        const { isLoading, coinsMoney, coinsBtc, coinsEth } = this.props;
        return(
            <div className="user-info">
                <h3 className="user-info__title">Ваш счет</h3>
                { isLoading ?
                    <Loader size="70px" gap={4} color="fuchsia"/>
                :
                    <div className="user-info-list">
                        <div className="user-info-list__item">
                            <div className="user-info-list__area">{coinsMoney}</div>
                            <div className="user-info-list__symbol">$</div>
                        </div>
                        <div className="user-info-list__item">
                            <div className="user-info-list__area">{coinsBtc}</div>
                            <div className="user-info-list__symbol">BTC</div>
                        </div>
                        <div className="user-info-list__item">
                            <div className="user-info-list__area">{coinsEth}</div>
                            <div className="user-info-list__symbol">ETH</div>
                        </div>
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
const mapDispatchToProps = dispatch => ({
    //authorize: auth => dispatch(auth) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);