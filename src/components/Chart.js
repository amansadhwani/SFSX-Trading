import React, { Component, Fragment } from "react";

// component and styles
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";
import { connect } from 'react-redux'


class Chart extends Component {
    render() {

        const { buyOrders, sellOrders, selectedShare } = this.props;
        var order = selectedShare;
        const buyer = buyOrders.filter(share => share.sfsx == order)
        const seller = sellOrders.filter(share => share.sfsx == order)

        var sharesBuy = buyer.map(share => share.shares)
        sharesBuy.unshift("buy")
        //console.log(sharesBuy)

        var sharesSell = seller.map(share => share.shares)
        sharesSell.unshift("sell")
        //console.log(sharesSell)

        //const aman=[["buy", 40,50,60],["sell", 10,150,80]]
        const dynmo = [sharesBuy, sharesSell]

        //const aman =[sharesBuy]
        const CHART_DATA = {



            columns:
                dynmo

            ,
            type: "bar",

            onclick: function (d, i) { console.log("onclick", d, i); },

        };



        return <Fragment> {buyer.length > 0 || seller.length > 0 ? <BillboardChart data={CHART_DATA} /> : <div></div>}</Fragment>;
    }
}

const mapStateToProps = (state) => {
    return {
        buyOrders: state.buyOrders,
        sellOrders: state.sellOrders,
        selectedShare: state.selectedShare

    }
}

export default connect(mapStateToProps, null)(Chart)