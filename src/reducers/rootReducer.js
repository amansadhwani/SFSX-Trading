export var initialState={
    
    loginData:[{username:"admin",password:"admin"}],
    sellOrders:[
      
      ],
    buyOrders:[
        
          
      ],
    executedOrders:[],
    isAuthenticated:false,
    selectedShare:"FB"

}


/*debugger;
var  localData = localStorage.getItem('state')
if(localData == null){} else{

initialState=JSON.parse(localData)}*/



const rootReducer = (state=initialState,action) =>{
    if(action.type === 'DELETE_PATIENT'){
       
        let deletePatient=state.patientData.filter(patient =>{
            return action.id !== patient.id
            
        });
       
        return {
            ...state,
            patientData:deletePatient
        }
    }
    if(action.type=== 'SELL_ORDER'){
        
        
       
        let randomId=Math.random()
        let date=new Date().toISOString()
        let myNew=[{ id: randomId, trader: action.id.trader,price:action.id.price,shares:action.id.shares,sfsx:action.id.SFSX,price:action.id.price,timestamp:date }]
        console.log(myNew)
        
       
  
       alert(" Sell order placed")
       
        return{
            ...state,
            sellOrders:[...state.sellOrders,...myNew]
     }
        
    }

    if(action.type === "SELECTED_SHARE"){
        console.log(action);
        return{
            ...state,
            selectedShare:action.id
        }
    }

    if(action.type === "EXECUTED_SHARE"){
        console.log(action);
        debugger;
        let randomId=Math.random()
        let date=new Date().toISOString()
        let myNew=[{ id: randomId, selectedShare: state.selectedShare,price:action.id.price,shares:action.id.soldShares,timestamp:date,sellerName:action.id.sellerName,buyerName:action.id.buyerName }]
        console.log(myNew)
       
        //let sellorders=state.sellorders.filter(data => data.shares !==0 )
        return{
            ...state,
            executedOrders:[...state.executedOrders,...myNew],
            

        }
        
    }

    if(action.type === "UPDATE_BUYER_SHARE"){
        console.log(action);
     
        let myNew=[action.id]
        console.log(myNew)
       
  
       
       
        return{
            ...state,
            buyOrders:[...state.buyOrders,...myNew]
     }
        
    }
    if(action.type === "UPDATE_SELLER_SHARE"){
        console.log(action);

        
    }


  
  
    if(action.type=== 'BUY_ORDER'){
     
        
        console.log(action)
        
        
        let randomId=Math.random();
        let date=new Date().toISOString()
       let myNew=[{ id: randomId, trader: action.id.trader,price:action.id.price,shares:action.id.shares,sfsx:action.id.SFSX,price:action.id.price,timestamp:date }]
        console.log(myNew)
       alert("Buy order placed")
       
        return{
            ...state,
            buyOrders:[...state.buyOrders,...myNew]
     }
        
    }

    if(action.type=== "LOGIN_USER")
    {
        return {
            ...state,
            isAuthenticated:true
        }
    }
      if(action.type=== "LOGOUT")
    {
        return {
            ...state,
            isAuthenticated:false
        }
    }

    
    return state;
}

export default rootReducer;
