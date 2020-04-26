
import React ,{Fragment}from 'react';
import ReactDOM from 'react-dom';
import {Link,NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



const Navbar =() => {

  
    const isAuthenticated = useSelector(state => state.isAuthenticated)
    const dispatch = useDispatch();



        return( 
            
              <nav className="navbar navbar-default ">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand" >SFSX </Link>
    </div>
    <ul className="nav navbar-nav makeitRight">
  <Fragment>
   
      {isAuthenticated ? 
      <Fragment>
      
      
      <li onClick={(() => dispatch({ type: "LOGOUT"}))}><Link to ="/login">Logout</Link></li> 
      </Fragment> : <Fragment> </Fragment> 
      }
      </Fragment> 
      
    </ul>
  </div>
</nav>
            
        )
       
    
}

export default Navbar;



