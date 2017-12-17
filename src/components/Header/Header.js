import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import "./Header.css";
import {Link} from 'react-router-dom';
import {getCurrentBtcPurchase, getCurrentEthPurchase} from "../../reducers/currency";
import {logout} from '../../actions/auth';
import LogoWhite from "../../assets/Logo-white.svg";

export class Header extends PureComponent {

    logoutHandler = () => {
        this.props.logout();
    };

    render() {
        const {currentBtcPurchase, currentEthPurchase, symbol} = this.props;
        let btcClass = '';
        let ethClass = '';

        if (symbol === "btc") {
            btcClass = "currency-instrument__link_active";
        } else if (symbol === "eth") {
            ethClass = "currency-instrument__link_active";
        }

        return (
            <header className="header-wrap">
                <div className="container">
                    <div className="header">
                        <div className="header__logo-box">
                            <div className="header__logo">
                                <img src={LogoWhite} className="header__logo-img" alt="logo"/>
                            </div>
                        </div>

                        <div className="currency-instrument">
                            {[
                                [btcClass, currentBtcPurchase, 'BTC'],
                                [ethClass, currentEthPurchase, 'ETH'],
                            ].map(([className, courseValue, currencyName]) => (
                                <div className="currency-instrument__item" key={currencyName}>
                                    <Link to={'/trade/' + currencyName.toLowerCase()}
                                          className={"currency-instrument__link " + className}>
                                        <span className="currency-instrument__txt-wrap">
                                            <span
                                                className="currency-instrument__course">{courseValue}</span>
                                            <span className="currency-instrument__name">{'1' + currencyName}</span>
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <nav className="header-nav">
                            <div className="header-nav__item">
                                <button className="header-nav__link" onClick={this.logoutHandler}>Выход</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    };
}

const mapStateToProps = state => ({
    currentBtcPurchase: getCurrentBtcPurchase(state).toFixed(1),
    currentEthPurchase: getCurrentEthPurchase(state).toFixed(1)
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);