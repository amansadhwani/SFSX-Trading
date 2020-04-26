
import React,{Component,Fragment} from 'react';
import {connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class  RestingOrders extends Component  {
    render(){
    
    const {buyOrders,sellOrders}= this.props;

    const buyOrderFilterZero= buyOrders.length>0 ? (buyOrders.filter(data =>data.shares !==0 )) : <div></div>

    
    const buyOrdersList = buyOrderFilterZero.length ? (buyOrderFilterZero.map(buy => {
        return (<tr className="myMargin" key={buy.id}>
            <td>{buy.timestamp}</td>
            <td>{buy.sfsx}</td>
            <td>{buy.trader}</td>
            <td>{buy.price}</td>
            <td>{buy.shares}</td>
           
        </tr>)
    })) : (<div> </div>)

    const sellOrderFilterZero= sellOrders.length>0 ? (sellOrders.filter(data =>data.shares !==0 )) : <div></div>
     
    const sellOrdersList = sellOrderFilterZero.length ? (sellOrderFilterZero.map(sell => {
        return (<tr className="myMargin" key={sell.id}>
            <td>{sell.timestamp}</td>
            <td>{sell.sfsx}</td>
            <td>{sell.trader}</td>
            <td>{sell.price}</td>
            <td>{sell.shares}</td>
           
        </tr>)
    })) : (<div> </div>)


        return( <Fragment><div class="col-md-6">
          
            {buyOrders.length>0 ?
            <Fragment>
                  <div >Pending Buyer List</div>
             <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>TimeStamp</th>
                            <th>SFSX</th>
                            <th>Trader</th>
                            <th>Price</th>
                            <th>Shares</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {buyOrdersList}
                    </tbody>
            </table></Fragment> :<div> </div>}

        </div>

        <div class="col-md-6">
           {sellOrders.length ?
            <Fragment> 
        <div >Pending Seller List</div>
             <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>TimeStamp</th>
                            <th>SFSX</th>
                            <th>Trader</th>
                            <th>Price</th>
                            <th>Shares</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {sellOrdersList}
                    </tbody>
                    </table></Fragment> :<div> </div>}

        </div>

        
        </Fragment>)
}

}
const mapStateToProps =  (state) =>{
    return {
        buyOrders:state.buyOrders,
        sellOrders:state.sellOrders
        
    }
}


export default connect(mapStateToProps,null)(RestingOrders)