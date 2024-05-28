import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login_register.css"

export default function Register() {
    const [userImformation,NewUserImformation]=useState({
        first_name:"",
        last_name:"",
        phone_no:"",
        email:"",
        password:"",
        cart:[]
    })
    const changeEventHandler=(e)=>{
       NewUserImformation({...userImformation,[e.target.name]:e.target.value})
    }
    
    const SubmitEventHandle=async(e)=>{
        e.preventDefault()

        if(userImformation.first_name!=="" & userImformation.first_name.length>=4){
            if(userImformation.last_name!=="" & userImformation.last_name.length>=4){
                if(userImformation.phone_no!=="" & userImformation.phone_no.length>=10){
                    if(userImformation.email!=="" & userImformation.email.includes("@")){
                        if(userImformation.password!=="" & userImformation.password.length>=4){
                         
                          const localdata=localStorage.getItem("userProfileDAta")
                          if(localdata===null){
                            localStorage.setItem("userProfileDAta",JSON.stringify([userImformation]))
                            NewUserImformation({
                              first_name:"",
                               last_name:"",
                               phone_no:"",
                               email:"",
                               password:"",
                               cart:[]

                            })
                          }
                          if(localdata!==null){
                             const jsondata=JSON.parse(localdata)
                             const newdata=[...jsondata,userImformation]
                             localStorage.setItem("userProfileDAta",JSON.stringify(newdata))
                             NewUserImformation({
                              first_name:"",
                               last_name:"",
                               phone_no:"",
                               email:"",
                               password:"",
                               cart:[]

                            })
                          }
                            
                        }
                        else{alert("PASSWORD CANNOT BE BLANK AND LESS THAN 4")}
                    }
                    else{alert("PLEASE ENTER CORRECT EMAIL")}
                }
                else{alert("PLEASE ENTER CORRECT PHONE NUMBER")}
            }
            else{alert("LAST NAME CANNOT BE BLANK AND LESS THAN 4")}
        }
        else{alert("FIRST NAME CANNOT BE BLANK AND LESS THAN 4 ")}

    }
  return (
    <div className='Register_Page'>
      <div className='Register_details'>
         <p style={{fontSize:"30px",color:"green"}}>Welcome</p>
         <form onSubmit={SubmitEventHandle}>
          <input type='text' placeholder='First Name' name='first_name'  onChange={changeEventHandler} value={userImformation.first_name}/>
          <input type='text' placeholder='Last Name'name='last_name' onChange={changeEventHandler}value={userImformation.last_name}/> 
          <input type='text' placeholder='Phone no..' name='phone_no' onChange={changeEventHandler}value={userImformation.phone_no}/>
          <input type='text' placeholder='Email 'name='email' onChange={changeEventHandler}value={userImformation.email}/>
          <input type='text'placeholder='Password' name='password' onChange={changeEventHandler}value={userImformation.password}/>
          <div>
            <p>Already Registered</p> 
            <p><Link to={"/"}>Login</Link></p> 
          </div>
          <input type='submit' style={{height:"45px",width:"100%" ,cursor:"pointer",backgroundColor:"lightgreen"}}/>
         </form>
      </div>
      
    </div>
  )
}
