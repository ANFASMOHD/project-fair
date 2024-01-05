import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       
<footer  class="text-center  text-lg-start bg-warning text-black">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
     <Link to={'/https://twitter.com/home'} style={{textDecoration:'none',color:'black'}}>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
     </Link>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <Link to={'https://www.instagram.com/?next=%2F'} style={{textDecoration:'none',color:'black'}}>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
      </Link>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <Link to={'https://github.com/'}>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </Link>
    </div>
   
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Project Fair
          </h6>
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos maiores repudiandae nesciunt aliquid molestias debitis dicta voluptatem quaerat illo voluptate veniam nam quam. Blanditiis vero iure a eum atque.
          </p>
        </div>
       

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Link
          </h6>
          <p>
            <a href="#!" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Login</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Register</a>
          </p>
         
         
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
          GUIES
          </h6>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React-Boostrap</a>
          </p>
          <p>
            <a href="#!" class="text-reset">BootsWatch</a>
          </p>
         
        </div>
     
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> India ,Kerala</p>
         
          <Link to={'https://mail.google.com/mail/u/0/#inbox'} style={{textDecoration:'none',color:'black'}}>
            <p>
              <i class="fas fa-envelope me-3"></i>
              anfasmohd556@gmail.com
            </p>
          </Link>
          <p><i class="fas fa-phone me-3"></i> 9567771915</p>
       
        </div>
       
      </div>
     
    </div>
  </section>


  
  <div class="text-center p-4" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://www.instagram.com/?next=%2F">Anfaz Mohd</a>
    <i class="fab fa-instagram fa-1x m-2"></i>
  </div>
 
</footer>

    </div>
  )
}

export default Footer