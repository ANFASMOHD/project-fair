import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import bgimage from '../assets/pngwing.com.png'
import ProjectsCard from '../components/ProjectsCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'


function Home() {

    const [homeProject,setHomeProject]= useState([])

    const [islogin,setIslogin]=useState(false)

    const getHomeProject= async()=>{
    const result= await homeProjectAPI()
    console.log(result);
    setHomeProject(result.data)
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIslogin(sessionStorage.getItem("token"))
        }
        else{
            setIslogin("")
        }
    },[])
    useEffect(()=>{
        getHomeProject()
    },[])

    console.log(islogin);
  return (
   <>
        <div style={{width:'100%',height:'100vh',backgroundColor:'yellowgreen'}}>
            <div className='container-fluid rounded'>
                <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                        <h1 className='text-black' style={{fontSize:'80px'}}>Project Fair</h1>
                        <p> One Top destination for all softhware development projects </p>
                       { 
                       islogin?
                       <Link to={'/dashboard'}>
                       <button className=' btn btn-success rounded'>Manage Project <i class="fa-solid fa-arrow-right"/></button>
                       
                   </Link>:
                        <Link to={'/login'}>
                            <button className=' btn btn-success rounded'>Get Started <i class="fa-solid fa-arrow-right"/></button>
                            
                        </Link>
                        }
    
                    </Col>
                    <Col sm={12} md={6} style={{marginTop:'100px'}}>
                        <img style={{width:'500px'}} src={bgimage} alt="no image" />
                    </Col>
                </Row>
     
            </div>
    
        </div>
        <div className='all-project mt-5' style={{backgroundColor:'white'}}>
        <div className='text-center'>


            <h1>Explore Our Projects</h1>

            <marquee scrollAmount={20} className="mt-5">
            <div className='d-flex'>
   { 
        homeProject?.length>0?
        homeProject.map((item)=>(
        <div className='ms-5' style={{width:'500px'}}>
        <ProjectsCard project={item}/>
        </div>)): null
               }                                                                         

            </div>

            </marquee>
            <div className='text-center mt-5'>
                <h6><Link to={'/project'}>See More Project</Link></h6>

            </div>
        </div>

    </div>

   </>
  )
}

export default Home