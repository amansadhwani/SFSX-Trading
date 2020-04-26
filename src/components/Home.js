import React, { useState, useEffect,Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
import AddOrder from './AddOrder'
import RestingOrders from './RestingOrders'
import Chart from './Chart'
import TradingLog from './TradingLog'



const Home = () => {

    const isAuthenticated = useSelector(state => state.isAuthenticated)
    if(isAuthenticated){
        
    }
    else{
        return <Redirect to ="/login"/>
    }

    

return(
    <div className="container-fluid">
 <div className="row">
          <div className="col-md-8">
          <div className="col-md-6">
                <AddOrder/>
           </div>
           <div className="col-md-6">
               <Chart/>
           </div>
           </div>
           <div className="col-md-4">
       
              <TradingLog/>
           </div>

           <div className="col-md-8">
            
           <RestingOrders/>
           </div>
        </div>
    
        </div>
    )

}

export default Home;