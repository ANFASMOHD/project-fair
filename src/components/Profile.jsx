import React, { useEffect } from 'react'

import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editprofileAPI } from '../services/allAPI';

function Profile() {
   
    const [open, setOpen] = useState(false);
    const [userProfile,setuserProfile]=useState({
         username:"",
         email:"",
         password:"",
         github:"",
         linkedin:"",
         profile:""

    })

    const [isUpdate,setIsUpdate]=useState(false)
    const [existingImage,setExistingimage]=useState("")
    const [preview,setpreview]=useState("")

    useEffect(()=>{
           const user = JSON.parse(sessionStorage.getItem("existingUser"))

           setuserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin,profile:""})

           setExistingimage(user.profile)
    },[isUpdate])

    useEffect(()=>{
        if(userProfile.profile){
            setpreview(URL.createObjectURL(userProfile.profile))
        }
        else{
            setpreview("")
        }
    },[userProfile.profile])

    const handleProfileUpdate =async()=>{
        const{username,email,password,github,linkedin,profile}=userProfile

        if(!github || !linkedin ){
          toast.info("Please Fill the form Completely")
        }
        else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)
        
        const token = sessionStorage.getItem("token")

        if(preview){
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
              }
              const result= await editprofileAPI (reqBody,reqHeader)
              console.log(result);
              if(result.status ===200){
                toast.success("profile Updated Successfully")
                sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                setIsUpdate(true)
              }
              else{
                console.log(result.response.data);
              }
        }
        else{
            const reqHeader = {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
            const result= await editprofileAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status ===200){
              toast.success("profile Updated Successfully")
              sessionStorage.setItem("existingUser",JSON.stringify(result.data))
              setIsUpdate(true)
            }
            else{
              console.log(result.response.data);
            }

          }
    }
}

    
  return (
    <div className='card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
            <h1>Profile</h1>
            <button   onClick={() => setOpen(!open)} className='btn btn-outline-info'> <i class="fa-sharp fa-solid fa-arrow-down fa-bounce"></i></button>
        </div>
<Collapse in={open}>
    <div className="row justify-content-center mt-5">
        <label htmlFor="profile" className='mb-5 text-center'>
            <input id='profile' type="file" style={{display:'none'}} onChange={(e)=>setuserProfile({...userProfile,profile:e.target.files[0]})} />
        {existingImage=="" ?           <img  width={'400px'} height={'400px'} src={preview?preview:"no image"} alt="no image" className='rounded-circle' />: <img  width={'400px'} height={'400px'} src={preview?preview:`${BASE_URL}/Uploads/${existingImage}`} alt="no image" className='rounded-circle' />}
            </label>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='GitHub' value={userProfile.github} onChange={(e)=>setuserProfile({...userProfile,github:e.target.value})} />
            </div>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={(e)=>setuserProfile({...userProfile,linkedin:e.target.value})} />
            </div>
            <div className='mb-3 mt-3'>
                <button onClick={handleProfileUpdate} className='btn btn-success rounded w-100'>Update</button>
            </div>
    </div>
    </Collapse>

    <ToastContainer autoClose={2000} position='top-center' theme='colored'></ToastContainer>
        </div>
        

  )
}

export default Profile;
