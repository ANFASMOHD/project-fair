import { useContext, useEffect, useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BASE_URL } from '../services/baseurl';
import { editUserProjectAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectResponseContext } from '../context/ContextShare';

function EditProject({project}) {
  const {editProjectResponse,setEditProjectResponse}= useContext(editProjectResponseContext)
    const [show, setShow] = useState(false);
    const[preview,setPreview]=useState("")
    const [projectdetails,setprojectdetails]= useState({
        id:project._id,
        title:project.title,
        language:project.language,
        github:project.github,
        website:project.website,
        overview:project.overview,
        projectimage: ""
    })
    const handleClose = () => {setShow(false)
      handleClose1() };
   
      const handleShow = () => setShow(true);
      console.log(project);

      useEffect(()=>{
if(projectdetails.projectimage){
 setPreview( URL.createObjectURL
  (projectdetails.projectimage))
}
      },[projectdetails.projectimage])



      //to removeonly the edited content


      const handleClose1=()=>{
        setprojectdetails({
          title:project.title,
          language:project.language,
          github:project.github,
          website:project.website,
          overview:project.overview,
          projectimage: ""
        })
        setPreview("")
      }

      // updtae 
      const handleUpdate= async()=>{
        const {id,title,language,github,website,overview,projectimage}=projectdetails

        if(!title||!language|| !github|| !website||  !overview|| !projectimage )
          
          {
            toast.info('Please fill the form Completly')
          }
          else{
            const reqBody= new FormData()
            reqBody.append("title",title)
            reqBody.append("language",language)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("overview",overview)
            preview?reqBody.append("projectimage",projectimage):reqBody.append("projectimage",project.projectimage)

            const token = sessionStorage.getItem("token")

            if(preview){
              const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
              }
              const result = await editUserProjectAPI(id,reqBody,reqHeader)
              console.log(result);

              if(result.status===200){
                console.log(result.data);
                toast.success('Update Successfully')
                handleClose()
                setEditProjectResponse(result.data)
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
            
                const result = await editUserProjectAPI(id,reqBody,reqHeader)
                console.log(result);

                 if(result.status===200){
                console.log(result.data);
                toast.success('Update Successfully')
                handleClose()
                setEditProjectResponse(result.data)
              }
              else{
                console.log(result.response.data);
              }

              
            }
          }
      }
  return (
    <>
         <button  onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>

         <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size='lg'
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title> Edit Project Details</Modal.Title>
              </Modal.Header>
              <Modal.Body className='d-flex justify-content-between p-2'>
                <div className='ms-3'>
                  <label>
                    <input type="file" style={{ display: "none" }} onChange={e=>setprojectdetails({...projectdetails,projectimage:e.target.files[0]})}   />
                    <img className='img-fluid' width={'100%'} src={preview?preview:`${BASE_URL}/Uploads/${project.projectimage}`} alt="no image" /></label>
                </div>
                <div className='ms-3 me-5'>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Project Title" value={projectdetails.title} onChange={(e)=>setprojectdetails({...projectdetails,title:e.target.value})}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Language used" value={projectdetails.language} onChange={(e)=>setprojectdetails({...projectdetails,language:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Github Link" value={projectdetails.github} onChange={(e)=>setprojectdetails({...projectdetails,github:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Website Link"value={projectdetails.website} onChange={(e)=>setprojectdetails({...projectdetails,website:e.target.value})}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control placeholder='Project overview' as="textarea" value={projectdetails.overview} onChange={(e)=>setprojectdetails({...projectdetails,overview:e.target.value})}  />
                    </Form.Group          >
                  </Form>
                </div>

              </Modal.Body>
              <Modal.Footer className='me-3'>
                <Button variant="success" onClick={handleUpdate}>
                Updtae
                </Button>
                <Button variant="primary" onClick={handleClose1}>cancel</Button>
              </Modal.Footer>
            </Modal>

           <div> <ToastContainer autoClose={2000} position='top-center' theme='colored'></ToastContainer></div>
    </>
  )
}

export default EditProject