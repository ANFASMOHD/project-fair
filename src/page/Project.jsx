import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectsCard from '../components/ProjectsCard'
import { allProjectAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {



  const [allproject,setAllproject]= useState([])

  const [searchKey, setSearchKey]= useState("")
  const [isToken,setIsToken]=useState(false)

  const getAllProject = async()=>{

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")

      const reqHeader = {
    
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      
      const result = await allProjectAPI(searchKey,reqHeader)
      console.log(result.data);
      setAllproject(result.data)
    }
    
   
  }
  console.log(searchKey);

  useEffect(()=>{
    getAllProject()
  },[searchKey])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(true)
    }
  },[])
  return (
   <>
      
        <Header/>
        <div className='d-flex justify-content-center align-items-center  flex-column mt-5 p-5'>
          <h1>All Project</h1>
          <div className='d-flex mt-5 w-25 shadow border rounded '>
            <input type="text"  class="form-control" value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder='search the project using technologies'/>
            <i style={{marginLeft:'-45px',color:'lightgray'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
           
  
          </div>
        </div>
        <Row>
         {allproject?.length>0?
         allproject.map((item)=>(
          <Col className='mb-5 p-10' sm={12} md={6}  lg={4}>
           <ProjectsCard project={item}/>  

        </Col>
         )):
         <div>
          {isToken?<p className='text-danger fs-3 text-center'>Sorry No Project Currently Available</p>:<div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU13UnGlC0gQPUVciHB2AdtzTC2jTNK9tzw&usqp=CAU" alt="no image" height={'200px'} width={'200px'} />
            <p className='text-danger fs-3 mt-4'>Please <Link style={{textDecoration:'none',color:'blue'}} to={'/login'}>Login</Link> to view more Project</p>
         </div>}

         </div>
         
          }
        </Row>
     
   </>
  )
}

export default Project