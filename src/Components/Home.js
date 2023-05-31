import React from 'react'
import './Home.css'
import hello from '../assets/images/hello.png'
import Accounts from '../assets/images/Accounts.png'
import Integration from '../assets/images/Integration.png'
import knowldege from '../assets/images/knowldege.png'
import Rolesandpermissions from '../assets/images/Rolesandpermissions.png'
import Chat from '../assets/images/Chat.png'
import InApp from '../assets/images/In-App.png'
function Home() {
  return (

    <div className='home'>
    <div className="container">

    <div className="row no-gutters">
    <div className="col-3">
     <h2  style={{color:'#1154D1'}}>
     WELCOME
     </h2>
     <img src={hello} style={{paddingLeft:0}}></img>
    </div>
    <div className="col-3 p-0">
    <img src={Accounts}></img>
    </div>
    <div className="col-3 p-0">
    <img src={Rolesandpermissions}></img>
    </div>
    <div className="col-3 p-6">
    <img src={Integration}></img>
    </div>
  </div>
  <div className="row no-gutters">
    <div className="col-3 d-flex flex-column">
     <p style={{color:'white'}}>
       Our sales  team will get you in touch to better <br></br> 
      understand your needs,and will help you 
      with the signup-process
    </p>
    </div>
    <div className="col-3  p-0" style={{padding:0}}>
    <img src={Chat}></img>
    </div>
    <div className="col-3 p-0" style={{paddingLeft:0,paddingRight:0}}>
      <img src={InApp}></img>
    </div>
    <div className="col-3 p-0">
      <img src={knowldege}></img>
    </div>
  </div>

  <div className="row">
    <div className="col-6">
   
     <button type="button" classNameName="btn btn-primary" style={{borderRadius:'5px'}}>Start Now</button>
      <button type="button" className="btn btn-dark" style={{ marginLeft: '80px !important'}}>Contact sales</button>


    </div>
 
  </div>
</div>
</div>
  )
}

export default Home
