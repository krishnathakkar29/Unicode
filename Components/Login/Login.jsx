import React, { useState , useRef } from 'react'
import Backgrounf from './Backgrounf.jpeg'
import Skaters from './Skaters.png'
import {Link } from 'react-router-dom'

function Login() {
    const [email,setEmail] = useState("")
    const [pass, setPass] = useState("")

    // const [confirmMail, setConfirmMail] = useState(0)
    // const [confirmPass, setConfirmPass] = useState(0)

    const emailInputRef = useRef(null);
    const passInputRef = useRef(null);


    const spi = document.getElementById("emailSpan")
    const spass = document.getElementById("passSpan")
        
    const ip = document.getElementById("email-input")
    const ipass = document.getElementById("pass-input")

    const handleChange = (e) => {
        if(e.target.name=== "email")
        {
            setEmail(e.target.value);
        }
        else if(e.target.name === "pass")
        {
            setPass(e.target.value);
        }
    }

    const spanwala = () => {
        
        const spi = document.getElementById('emailSpan');
        const spass = document.getElementById('passSpan');
        const ip = document.getElementById('email-input');
        const ipass = document.getElementById('pass-input');

        if(emailInputRef.current.value === "" && passInputRef.current.value === "")
        {
            ip.style.borderWidth = "1px";
            ip.style.borderColor = "red";
            ipass.style.borderWidth = "1px";
            ipass.style.borderColor = "red";
            spi.textContent = "Please enter the email";
            spass.textContent = "Please enter the password";
        }
        else if (emailInputRef.current.value === "") {

            ip.style.borderWidth = "1px";
            ip.style.borderColor = "red"
            spi.textContent = "Please enter the email";
            
        }
        else if(passInputRef.current.value === "")
        {
            ipass.style.borderWidth = "1px";
            ipass.style.borderColor = "red";
            spass.textContent = "Please enter the password";
        }
    }

    const handleClick = () => {
        if(emailInputRef.current.value == ""|| passInputRef.current.value == "")
        {
            spanwala();
            // alert("Please fill the form completely to sign in");
        }
        else {

            const spi = document.getElementById('emailSpan');
        const spass = document.getElementById('passSpan');
        const ip = document.getElementById('email-input');
        const ipass = document.getElementById('pass-input');
            emailInputRef.current.value = "";
            passInputRef.current.value = "";
            ip.style.borderColor = "transparent";
            ipass.style.borderColor = "transparent";
            spi.textContent = "";
            spass.textContent = "";
            alert("Success...")
            
        }
    }

    // const confirmReturn = () => {
    //     // if(emailInputRef.current.value == "" || passInputRef.current.value == "" )
    //     // {
    //     //     setConfirmMail(10);
    //     //     setConfirmPass(20);
    //     // }
    //     if(emailInputRef.current.value == "" )
    //     {
    //         setConfirmMail(10);
    //     }
    //     else if(passInputRef.current.value == "")
    //     {
    //         setConfirmPass(20);
    //     }
    // }

    
  return (
    <>
        <div className='w-full  md:h-150 p-3' style={{backgroundImage: `url(${Backgrounf})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}>
            
            <div className="flex justify-center items-center  md:h-200">

                <div className='flex justify-around md:p-7 border-1 border-black  bg-gray-100 rounded-[30%]'>
                    
                    <div className=' flex flex-col items-stretch justify-evenly md:p-5 flex-wrap gap-3 '>
                        <h1 className='text-center font-serif font-medium text-gray-800 text-4xl  '>Mentee Login </h1>
                        <p className='text-lg mx-auto font-medium '>Hey, Enter your deatils to sign into <p className='text-center font-medium text-lg m-[-10px]'>your account</p> </p>

                        <div>
                            <form action="">
                                <input type="text" placeholder='Enter Email / Phone Number' className=' w-full md:p-2 rounded-lg border-[1px] border-transparent' name="email" id="email-input" /*onChange={handleChange}*/ 
                                ref={emailInputRef}/>

                                <div className=' flex items-center justify-start h-4 w-[50%] text-xs bg-transparent text-red-600'><span id="emailSpan" ></span></div>
                                
                                <input type="password" placeholder='Password' className=' w-full md:p-2 md:mt-2 rounded-lg border-[1px] border-transparent' id="pass-input"name="pass" /*onChange={handleChange}*/ ref={passInputRef}/>

                                <div className=' flex items-center justify-start h-4 w-[50%] text-xs bg-transparent text-red-600'><span id="passSpan" ></span></div>
                            </form>
                            <p className='text-sm text-gray-500 text-normal'>Having trouble in signin?</p>
                        </div>
                        
                        <button className='bg-[#1d9c5f] text-[#fff]  md:p-3 rounded-xl md:my-3 hover:bg-[#C0DFE7] hover:text-[#1d9c5f] transition-all ease-in-out duration-500 border-2 border-[#1d9c5f]' onClick = {handleClick}>Sign IN</button>

                        <p className='text-sm text-center text-gray-700'>Dont't have an account? <Link className='font-semibold text-black' to='/signup'>Signup Now!</Link></p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Login