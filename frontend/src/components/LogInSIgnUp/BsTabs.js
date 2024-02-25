import React, { useState } from 'react';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import './tabStyle.css'

function TabbedForm() {
  const [activeTab, setActiveTab] = useState('form1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='user_forms'>
      <div className="tabs">
        <button onClick={() => handleTabClick('form1')} className={activeTab === 'form1' ? 'active' : ''}>Client</button>
        <button onClick={() => handleTabClick('form2')} className={activeTab === 'form2' ? 'active' : ''}>Service Provider</button>
        <button onClick={() => handleTabClick('form3')} className={activeTab === 'form3' ? 'active' : ''}>Admin</button>
      </div>
      <div className="forms">
        {activeTab === 'form1' && <Form1 />}
        {activeTab === 'form2' && <Form2 />}
        {activeTab === 'form3' && <Form3 />}
      </div>
    </div>
  );
}

function Form1() {
    
    const [action,setAction]=useState("Sign Up");
  return (
    <div className="container">
        < div className="header">
            <div className="text">{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="/"/>
                <input type="text" placeholder='Name'/>
            </div>}
            <div className='input'>
                <img src={email_icon} alt="/"/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="/"/>
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password?<span>Click here</span></div>}
        
        <div className="submit-container">
            {/* dynamic assignment of class names */}
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In </div>
        </div>

    </div>
  )
}

function Form2() {
   
    const [action,setAction]=useState("Sign Up");
  return (
    <div className="container">
        < div className="header">
            <div className="text">{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="/"/>
                <input type="text" placeholder='Name'/>
            </div>}
            <div className='input'>
                <img src={email_icon} alt="/"/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="/"/>
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password?<span>Click here</span></div>}
        
        <div className="submit-container">
            {/* dynamic assignment of class names */}
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In </div>
        </div>

    </div>
  )
}

function Form3() {
   
    const [action,setAction]=useState("Login");
  return (
    <div className="container">
        < div className="header">
            <div className="text">{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="/"/>
                <input type="text" placeholder='Name'/>
            </div>}
            <div className='input'>
                <img src={email_icon} alt="/"/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="/"/>
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password?<span>Click here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In </div>
        </div>

    </div>
  )
}

export default TabbedForm;
