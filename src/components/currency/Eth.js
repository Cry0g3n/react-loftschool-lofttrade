import React from "react";
import {withState, compose, pure, lifecycle} from "recompose";
import {Link} from "react-router-dom";
import "../../components/UserPage/UserPage.css";
import {CurrencyItem} from "./Styles";

const Eth = ({disabled, price, currency, cur}) => (
    <div>
        {!disabled ? (
            <Link className="toggle-cur" to="/trade/eth">
                <CurrencyItem>
                    {cur}
                    <b>1 ETH</b>
                </CurrencyItem>
            </Link>
        ) : (
            <CurrencyItem>
                {cur}
                <b>1 ETH</b>
            </CurrencyItem>
        )}
    </div>
);

const enhance = compose(
    withState("cur", "setCurrency", "00.00"),
    lifecycle({
        componentWillReceiveProps(nexpProps) {
            if (this.props.price !== nexpProps.price && nexpProps.price) {
                this.props.setCurrency(nexpProps.price);
            }
        }
    }),
    pure
);

export default enhance(Eth);
