import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../context/ContextShare';


function Header({Dashboard}) {

    const {isAuthToken,setIsAuthToken}=useContext(isAuthTokenContext)
       const navigate = useNavigate()
     const handleLogout=()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existingUser")
        setIsAuthToken(false)
        navigate('/')
     }

    const Dashbtn = Dashboard?true:false 
  return (
    <div>
        <Navbar expand="lg" style={{backgroundColor:'lightgreen',color:'black'}} className='p-4'>
        <Container>
            <h2 href="#home" ><Link style={{textDecoration:'none',color:'black'}} to={'/'}><i class="fa-brands fa-stack-overflow fa-flip"></i> Project Fair</Link></h2>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-auto">
                    { Dashbtn &&
                        <button onClick={handleLogout} className='btn btn-warning border'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header