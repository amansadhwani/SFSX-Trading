
import React,{Component} from 'react';
import {connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class  AddOrder extends Component  {

  
  constructor() {
    super();
    this.state={
      trader:"",
      price:"",
      shares:"",
      SFSX:"FB",
      orderType:"buy"
  }
  this.handleOrderChange = this.handleOrderChange.bind(this);
  this.handleSFSXChange = this.handleSFSXChange.bind(this);
  }

   

    
    handleTradeChange=(e) =>{
      this.setState({
        trader:e.target.value ,
        
      })
  }
 
handlePriceChange=(e) =>{
  this.setState({
     
    price:e.target.value,
  })
}

handleShareChange=(e) =>{
  this.setState({
     
    shares:e.target.value,
  })
}
handleSFSXChange=(e) =>{

  this.setState({
     
    SFSX:e.target.value
    
  },this.props.selectShare(e.target.value))
  //
}


handleOrderChange=(e) =>{
  debugger;

  this.setState({
     
    orderType:e.target.value
  })
}




    handleSubmit =(e) =>{
        e.preventDefault();
        debugger;
        if(this.state.orderType=="buy"){
          
        console.log(this.props.sellOrders)
        var order=this.state.SFSX;
        debugger;
        const buyer=this.props.buyOrders.filter(share => share.sfsx == order)
        const seller=this.props.sellOrders.filter(share => share.sfsx == order)

        if(seller.length>0 ){
        const listSellter = seller[0];
        var sellerShares=parseInt(seller[0].shares)
        var buyerShares =parseInt(this.state.shares)
        var soldShares
        if(buyerShares>sellerShares){
          soldShares=sellerShares
          buyerShares=buyerShares-soldShares
          sellerShares=sellerShares-soldShares
          //this.props.executedShares(soldShares,buyerShares)
        }
        else{
          soldShares=buyerShares
          sellerShares=sellerShares-buyerShares
          buyerShares=buyerShares-soldShares
          
          //this.props.executedShares(soldShares,buyerShares)
        }

   

        const myObj={soldShares:soldShares,sellerName:listSellter.trader,buyerName:this.state.trader,price:listSellter.price}
        this.props.executedShares(myObj)

        this.state.shares=buyerShares;
        seller[0].shares=sellerShares;
      }
        this.props.buyOrder(this.state)
        }
        else{
          var order=this.state.SFSX;
          debugger;
          const buyer=this.props.buyOrders.filter(share => share.sfsx == order)
          if(buyer.length>0){
          //const seller=this.props.sellOrders.filter(share => share.sfsx == order)
          const listSellter = buyer[0];
          var buyerShares=parseInt(buyer[0].shares)
          var sellerShares =parseInt(this.state.shares)
          var soldShares
          if(sellerShares>buyerShares){
            soldShares=buyerShares
            sellerShares=sellerShares-soldShares
            buyerShares=buyerShares-soldShares
            //this.props.executedShares(soldShares,buyerShares)
          }
          else{
            soldShares=sellerShares
            buyerShares=buyerShares-soldShares
            sellerShares=sellerShares-soldShares
            
            //this.props.executedShares(soldShares,buyerShares)
          }
  
     
  
          const myObj={soldShares:soldShares,buyerName:buyer[0].trader,sellerName:this.state.trader,price:listSellter.price}
          this.props.executedShares(myObj)
  
          this.state.shares=sellerShares;
          buyer[0].shares=buyerShares;
        }
          this.props.sellOrder(this.state)
        }
        this.setState({
            trader:"",
            price:"",
            shares:"",
            SFSX:"FB",
            orderType:"buy"
        })
  }
   
    render(){
     
      const {isAuthenticated,sellOrders,buyOrders} = this.props
      if(!isAuthenticated){
        return <Redirect to ="/login" />
    }
   return (
         
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          
          <h3 className="panel-title">Trade </h3>
        </div>
       
        <div className="panel-body">
          <form className="form-horizontal row-border"  onSubmit={this.handleSubmit}>

              
          <div className="form-group">
              <label className="col-md-4 control-label" >SFSX</label>
              <div className="col-md-6">
              <select  className="form-control" onChange={this.handleSFSXChange}   value={this.state.SFSX}> 
              <option >FB</option>
                <option >GOOG</option>
               <option >ORCL</option>
               <option >ZGRO</option>
  
            </select>
               
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" >Trader</label>
              <div className="col-md-6">
                <input type="text" name="regular" className="form-control" required onChange={this.handleTradeChange} value={this.state.trader}/> 
              </div>
            </div>

          <div className="form-group">
              <label className="col-md-4 control-label" >Price</label>
              <div className="col-md-6">
                <input type="number" name="regular" min="1" max="9999" size="1" maxLength="2" required className="form-control" onChange={this.handlePriceChange} value={this.state.price}/> 
              </div>
            </div>


            <div className="form-group">
              <label className="col-md-4 control-label" >Shares</label>
              <div className="col-md-6">
                <input type="number" name="regular" min="1" max="9999" size="1" maxLength="2" required className="form-control" onChange={this.handleShareChange} value={this.state.shares}/> 
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" ></label>
              <div className="col-md-6" >
              <input type="radio" id="buy" name="ordertype" value="buy" checked={this.state.orderType === "buy"} onChange={this.handleOrderChange} />
                    <label for="buy">Buy</label>

            <input className="marginForBs" type="radio" id="sell" onChange={this.handleOrderChange}  name="ordertype" value="sell" checked={this.state.orderType === "sell"}/>
            <label for="sell">Sell</label>

              </div>
             
            </div>
           

           
         
            <div className="col-md-offset-4 col-md-6">
            <button className="btn btn-primary " type="submit">Add Order</button> 
            </div>
            
          </form>
          
        </div>
      </div>
    

        );
        }
      }

const mapDispathToProps=(dispatch)=>({
  buyOrder:(id) =>{dispatch({type:"BUY_ORDER",id:id})},
  sellOrder:(id) =>{dispatch({ type:"SELL_ORDER",id:id})},
  selectShare:(id) =>{dispatch({ type:"SELECTED_SHARE",id:id})},
  executedShares:(id) =>{dispatch({ type:"EXECUTED_SHARE",id:id})},
  buyerShares:(id) =>{dispatch({ type:"UPDATE_BUYER_SHARE",id:id})},
  sellerShares:(id) =>{dispatch({ type:"UPDATE_SELLER_SHARE",id:id})},
  

    })

    const mapStateToProps =  (state) =>{
    return {
        isAuthenticated:state.isAuthenticated,
        buyOrders:state.buyOrders,
        sellOrders:state.sellOrders
        
    }
}



export default connect(mapStateToProps,mapDispathToProps)(AddOrder)
