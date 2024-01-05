import React from 'react'
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';

function ProjectsCard({project,projectimage}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Card className='shadow text-center btn' onClick={handleShow}>
      <Card.Img variant="top" width={'50%'} src={project?`${BASE_URL}/Uploads/${project.projectimage}`: projectimage} />
      <Card.Body>
        <Card.Title className='text-info'>{project.title}</Card.Title>
      
      
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>{project.title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body> */}
        <Row>
          <Col md={6}>
            <img width={'100%'} src={project?`${BASE_URL}/Uploads/${project.projectimage}`: projectimage} alt="no image" />

          </Col>
          <Col md={6}>
            <h4>Discription</h4>
            <p>
              {project.overview}</p>
             
        <p>    <span className='fw-bolder'>Technologies :</span> {project.language} </p>
          </Col>
        </Row>
        <div className='d-flex mt-5 mb-3'>
          <a href={project.github} target='_blank' style={{color:'black'}}> <i class="fa-brands fa-github fa-2x ms-3"></i></a>
          <a href={project.website} target='_blank' style={{color:'black'}}> <i class="fa-solid fa-link  fa-2x ms-3"></i></a>


        </div>

        
      
      </Modal>

    </div>
  )
}

export default ProjectsCard