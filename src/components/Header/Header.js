import React, {Component} from "react";
import {connect} from "react-redux";
import {HeaderMain, HeaderWrapper, Logo, CurrencyWrap} from "./Styles";
import {selectBtc, selectEth} from "../../actions/currency";
import {withRouter} from "react-router-dom";
import Btc from "../Currency/Btc";
import Eth from "../Currency/Eth";
import LogoWhite from "../../assets/Logo-white.svg";

export class Header extends Component {
    componentDidMount() {
        const {selectBtc, selectEth} = this.props;
        if (this.props.match.params.cur === "eth") {
            selectEth();
        } else {
            selectBtc();
        }
    }

    componentWillReceiveProps(nextProps) {
        const {selectBtc, selectEth} = this.props;
        if (this.props.match.params.cur && this.props.match.params.cur !== nextProps.match.params.cur) {
            if (nextProps.match.params.cur === "eth") {
                selectEth();
            } else {
                selectBtc();
            }
        }
    }

    render() {
        const {currentBtc, currentEth} = this.props;
        const {cur} = this.props.match.params;
        return (
            <HeaderMain>
                <HeaderWrapper>
                    <Logo
                        src={LogoWhite}
                        alt="logo"
                    />
                    <CurrencyWrap>
                        <Btc
                            disabled={cur === "btc" || !cur}
                            price={currentBtc}
                            currency="1 BTC"
                        />
                        <Eth
                            disabled={cur === "eth"}
                            price={currentEth}
                            currency="1 ETH"
                        />
                    </CurrencyWrap>
                    <span>User email</span>
                </HeaderWrapper>
            </HeaderMain>
        );
    }
}

const mapDispatchToProps = {
    selectBtc,
    selectEth
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
