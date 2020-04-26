
import React,{Component} from 'react';
import {connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class  AddPatient extends Component  {

    state={
        username:"",
        password:"",
        loginusername:"",
        loginpassword:""
        

    }

    
    handleUserNameChange=(e) =>{
      this.setState({
         username:e.target.value ,
        
      })
  }
  handlePasswordChange=(e) =>{
    this.setState({
       
       password:e.target.value,       
    })
}

 handleLoginUserNameChange=(e) =>{
      this.setState({
         loginusername:e.target.value ,
        
      })
  }
  handleLoginPasswordChange=(e) =>{
    this.setState({
       
       loginpassword:e.target.value,       
    })
}


 handleFinalLogin =(e) =>{
        e.preventDefault();
        debugger;
        
  }




    handleSubmit =(e) =>{
        e.preventDefault();
       
        this.props.addnewuser(this.state)
        this.setState({
            username:"",
            password:""
        })
  }
   
    render(){
debugger;
      console.log(this.props)
      var abc = this.props.callisauth
   
        var username=this.state.loginusername
        var password = this.state.loginpassword
         const {loginData} = this.props
         const {isAuthenticated} = this.props

         function handleLogin(e){
       
             e.preventDefault()
             var data = loginData.find(o => o.username === username);
             if(data && data.password === password){
                 debugger;
                 abc()
                 return <Redirect to ="/" />
                 //this.handleFinalLogin()
             }
             else{
                 alert("seems invalid username")
             }
         }
         if(isAuthenticated){
             return <Redirect to ="/" />
         }
        

         
        return (
          <div className="App">
           

     
    <div className=" col-md-6 col-md-offset-3">
     <h1>Login</h1>
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          
          <h3 className="panel-title">Please enter your credentials </h3>
        </div>
       
        <div className="panel-body">
          <form className="form-horizontal row-border" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="col-md-4 control-label" >Enter Username</label>
              <div className="col-md-6">
                <input type="text" name="regular" className="form-control" required onChange={this.handleLoginUserNameChange} value={this.state.loginusername}/> 
             
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" >Enter Password</label>
              <div className="col-md-6">
                <input type="password" name="regular" required className="form-control" onChange={this.handleLoginPasswordChange} value={this.state.loginpassword}/> 
              </div>
            </div>
            
          
            <div className="col-md-offset-4 col-md-6">
            <button className="btn btn-primary " type="submit"  >Login</button> 
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  
  </div>

        );
        }
      }

const mapStateToProps =  (state) =>{
    return {
        isAuthenticated:state.isAuthenticated,
        loginData:state.loginData
        
    }
}

const mapDispathToProps=(dispatch)=>({
    
        addnewuser:(id) =>{dispatch({ type:"ADD_NEW_USER", id:id})},
        callisauth:() =>{dispatch({ type:"LOGIN_USER"})},
        
})




export default connect(mapStateToProps,mapDispathToProps)(AddPatient)
