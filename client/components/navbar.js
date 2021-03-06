import React from 'react'
import {Link} from 'react-router'
import Home from './home';


const Navbar = (props) => {
  return (
    <div style = {{backgroundColor: 'yellow'}}>

        <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

          <ul style = {{ marginRight: 40, fontSize: 20, width: 400, height: 50,  display: 'flex', justifyContent: 'center'}}><Link  style = {{color: 'red', textDecoration: 'none'}}to = {'/'}>Home</Link></ul>

        </div>


      <center>
        <h1 >WELCOME TO CONTACT BOOK</h1>
      </center>
      <div style = {{height: 20}}>

      </div>
      <center>
        <div style = {{border: '1px solid red', width: 800}}>

          <h2>Instructions</h2>
          <div>
            <p><span style = {{fontWeight:"bold"}}>Create A Person:</span> Type name, age (must be number), and favorite city into text boxes, then press <span style = {{fontWeight:"bold"}}>SUBMIT</span>.</p>
            <p><span style = {{fontWeight:"bold"}}>Delete A Person:</span> Press the <span style = {{fontWeight:"bold"}}>DELETE</span> button.</p>
            <p><span style = {{fontWeight:"bold"}}>Update A Person:</span> Press the <span style = {{fontWeight:"bold"}}>UPDATE</span> button; Type name, age (must be number), and favorite city into text boxes, then press <span style = {{fontWeight:"bold"}}>SUBMIT</span>.</p>
            <p><span style = {{fontWeight:"bold"}}>View Person Profile:</span> Click on the person's highlighted  <span style = {{fontWeight:"bold"}}>NAME</span>.</p>

          </div>

        </div>
      </center>
      <div style = {{height: 50}}>

      </div>
      {props.children}
    </div>
  )
}

export default Navbar
