import React, {Component} from "react";
import {connect} from "react-redux";
import {LineChart} from "react-chartkick";
import Spinner from 'react-svg-spinner';
import HeaderContent from "../Header";
import "./UserPage.css";
import {
    Content,
    ContentWrapper,
    Main,
    MainRight,
    Offsets,
    ButtonOffset,
    Footer
} from "./Styles";
import {selectBtc, selectEth, selectOffset} from "../../actions/currency";
import {
    getOffset,
    getSelected,
    getIsBtcLoading,
    getIsEthLoading,
    sellBtc,
    purchaseBtc,
    sellEth,
    purchaseEth,
    getMax,
    getMin
} from "../../reducers/currency";

const offsets = {
    "2h": "2ч",
    "4h": "4ч",
    "8h": "8ч",
    "1d": "1д",
    "7d": "7д"
};

export class UserPage extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            currency: this.props.select
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.select !== nextProps.select) {
            this.setState({currency: nextProps.select});
        }
    }

    handleClickOffset = event => {
        const {selectOffset} = this.props;
        selectOffset(event.target.dataset.name);
    };

    render() {
        const {currency} = this.state;
        const {
            offset,
            sellBtc,
            sellEth,
            purchaseEth,
            purchaseBtc,
            minBtc,
            maxBtc,
            minEth,
            maxEth,
            isBtcLoading,
            isEthLoading
        } = this.props;
        const buttons = Object.keys(offsets).map(el => (
            <ButtonOffset
                onClick={this.handleClickOffset}
                key={el}
                data-name={el}
                selected={offset === el}
            >
                {offsets[el]}
            </ButtonOffset>
        ));
        return (
            <div style={{height: "100%"}}>
                <HeaderContent
                    currentBtc={sellBtc[0] ? sellBtc[0][1] : null}
                    currentEth={sellEth[0] ? sellEth[0][1] : null}
                />
                <Content>
                    <ContentWrapper>
                        <Main>
                            <MainRight>
                                <h2>Окно графика</h2>
                                <Offsets>{buttons}</Offsets>
                                {currency === "btc" ? (
                                    isBtcLoading ? (
                                        <div className="preloader-container">
                                            <Spinner size="64px" color="fuchsia" gap={5}/>
                                        </div>
                                    ) : (
                                        <LineChart
                                            colors={["#AD1457", "#C5CAE9"]}
                                            data={[
                                                {name: "Продажа", data: sellBtc},
                                                {name: "Покупка", data: purchaseBtc}
                                            ]}
                                            min={minBtc}
                                            max={maxBtc}
                                            width={750}
                                            height={400}
                                        />
                                    )
                                ) : isEthLoading ? (
                                    <div className="preloader-container">
                                        <Spinner size="64px" color="fuchsia" gap={5}/>
                                    </div>
                                ) : (
                                    <LineChart
                                        colors={["#C5CAE9", "#009688"]}
                                        data={[
                                            {name: "Продажа", data: sellEth},
                                            {name: "Покупка", data: purchaseEth}
                                        ]}
                                        min={minEth}
                                        max={maxEth}
                                        width={750}
                                        height={400}
                                    />
                                )}
                            </MainRight>
                        </Main>
                    </ContentWrapper>
                </Content>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    select: getSelected(state),
    isBtcLoading: getIsBtcLoading(state),
    isEthLoading: getIsEthLoading(state),
    maxBtc: getMax(state.currency.btc),
    maxEth: getMax(state.currency.eth),
    minBtc: getMin(state.currency.btc),
    minEth: getMin(state.currency.eth),
    offset: getOffset(state),
    purchaseBtc: purchaseBtc(state),
    purchaseEth: purchaseEth(state),
    sellBtc: sellBtc(state),
    sellEth: sellEth(state)
});
const mapDispatchToProps = {
    selectBtc,
    selectEth,
    selectOffset
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
