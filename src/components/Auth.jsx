import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../assets/pngwing.com.png'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthTokenContext } from '../context/ContextShare'


function Auth({register}) {
    const{isAuthToken,setIsAuthToken}= useContext(isAuthTokenContext)
    // to hold the value from input box
    const [userData, setuserData]=useState({
        username:"",
        email:"",
        password:""
    })
    console.log(userData);

    const navigate = useNavigate()

    
    const registerForm=register?true:false


    const handleregister =  async(e)=>{
        e.preventDefault()

        const {username,email,password} =userData

        if(!username || !email || !password){
            toast.info('please fill the form completly ')
        }
        else {
            const result = await registerAPI(userData)
            console.log(result.data);
          if(result.status ===200){
            toast.success(`${result.data.username} is successfully registered`)
            setuserData({
                username:"",
                email:"",
                password:""
            })
            // move to login
            navigate('/login')
          }
          else{
            toast.error(result.response.data)
          }
        }
    }


    const handlelogin = async(e)=>{
        e.preventDefault()
        // destructure
        const {email,password}=userData

if(!email || !password){
    toast.info("please fill the form completely")
}
else{
    const result =await loginAPI(userData)
    console.log(result);

     if(result.status===200){
        toast.success('Login Successfull')
        setIsAuthToken(true)
        
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setuserData({
            username:"",
            email:"",
            password:""
    
        })
        
        //navigate to home 
        setTimeout(()=>{
            navigate('/')
        },2000)
       


    }
    else{
        toast.error(result.response.data)
    } 
  

    }
    }
  return (
   <div style={{width:'100%',heigth:'100vh'}} className='d-flex justify-content-center align-items-center p-5'>
    <div className='w-75 container'>
        <Link style={{textDecoration:"none",color:'blue',}} to={'/'} > <i class="fa-solid fa-arrow-left fa-rotate-100 me-2"></i> Back to Home</Link>
        <div className='card bg-success p-5 rounded'>
            <div className='row align-items-center'>
                <div className='col-lg-6'> 
                <img src={auth} alt="no image" width={'100%'} />
                </div>
                <div className='col-lg-6 p-3'>
                    <div className='d-flex align-items-center flex-column'>
                        <h1 className='text-center text-align'><i class="fa-brands fa-stack-overflow fa-2x"></i> Project Fair</h1>
                       <h5 className='text-light mt-3 ms-5'>
                            {
                                register?"sign up to your Account":"sign in to your Account"
                            }
                       </h5>
                    </div>
                   
                  <Form className='mt-4'>
                    {
                        registerForm&&
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type='text' placeholder='Username' value={userData.username} onChange={(e)=>setuserData({...userData,username:e.target.value})}></Form.Control>
                        </Form.Group>

                        
                    }
                     <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type='email' placeholder='Enter your Email Id'  value={userData.email} onChange={(e)=>setuserData({...userData,email:e.target.value})}></Form.Control>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type='password' placeholder='Enter your Password'  value={userData.password} onChange={(e)=>setuserData({...userData,password:e.target.value})}></Form.Control>
                        </Form.Group>
                        {
                            registerForm?
                            <div>
                                <button onClick={handleregister} className='btn btn-warning round mt-3'>Register

                                </button>
                                <p>Already a User? Click here to <Link to={'/login'} style={{color:'blue'}}>Login</Link></p>
                            </div>:
                            <div>
                            <button onClick={handlelogin} className='btn btn-warning round mt-3'>Login

                            </button>
                            <p>New User? Click here to  <Link to={'/register'} style={{color:'blue'}}>Register</Link></p>
                        </div>
                        }

                  </Form>
                </div>

            </div>

        </div>
        
    </div>
<ToastContainer autoClose={2000} position='top-center' theme='colored'></ToastContainer>
   </div>
  )
   }

export default Auth