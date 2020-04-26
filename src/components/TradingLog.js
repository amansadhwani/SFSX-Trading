
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class TradingLog extends Component {
    render() {

        const { buyOrders, sellOrders, executedOrders } = this.props;




        const buyOrdersList = executedOrders.length ? (executedOrders.map(buy => {
            return (<tr className="myMargin" key={buy.id}>
                <td>{buy.timestamp}</td>
                <td>{buy.selectedShare}</td>

                <td>{buy.price}</td>
                <td>{buy.shares}</td>

            </tr>)
        })) : (<div> </div>)





        return (<Fragment>
            {executedOrders.length > 0 ?
                <Fragment>
                    <h3>Trading Log </h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>TimeStamp</th>
                                <th>Ticker</th>

                                <th>Price</th>
                                <th>Shares</th>

                            </tr>
                        </thead>
                        <tbody>
                            {buyOrdersList}

                        </tbody>
                    </table></Fragment> : <div> </div>}






        </Fragment>)
    }

}
const mapStateToProps = (state) => {
    return {
        buyOrders: state.buyOrders,
        sellOrders: state.sellOrders,
        executedOrders: state.executedOrders


    }
}


export default connect(mapStateToProps, null)(TradingLog)