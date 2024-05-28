import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login_register.css"

export default function Login() {
  const [LoginData,newLoginDAta]=useState({
    Loginemail:"",
    Loginpassword:""
  })
  

  const inputHandler=(e)=>{
    newLoginDAta({...LoginData,[e.target.name]:e.target.value})
  }

  const loginSubmitHandler=async(e)=>{
    e.preventDefault()
    const Alluser=localStorage.getItem("userProfileDAta")
    const jsondata=JSON.parse(Alluser)
    if(jsondata!==null){
      const uniqUser=jsondata.filter((data)=>data.email===LoginData.Loginemail & data.password===LoginData.Loginpassword)
    console.log(uniqUser)
    if(uniqUser.length>=1){
      localStorage.setItem("mainUser",JSON.stringify(uniqUser))
      window.location.assign("https://manish-kumar-rai-potato-diseases-gvzk5ydt3zvojyz7wp3xfk.streamlit.app/")
      alert("login sucess")
    }
    else{alert("login failed")}
    }
  }

  return (
    <div className='login_Page'>
      <div className='login_details'>
         <p style={{fontSize:"30px",color:"green"}}>Welcome</p>
         <form onSubmit={loginSubmitHandler}>
          <input type='text' placeholder='Enter Your Email...' name='Loginemail' onChange={inputHandler}/>
          <input type='text'placeholder='Enter Your Password...' name='Loginpassword' onChange={inputHandler}/>
          <div>
            <p>forget password ?</p>
            <p><Link to={"/register"}>Register</Link></p>
          </div>
          <input type='submit' style={{height:"45px",width:"100%" ,cursor:"pointer",backgroundColor:"lightgreen"}}/>
         </form>
      </div>
      
    </div>
  )
}
