import React from 'react'
import { Navbar,Container } from 'react-bootstrap'


function Header() {
  return (
  <>
  <Navbar style={{background:'#AD343E'}} className="bg-body-danger">
  <Container>
    <Navbar.Brand href="#home">
   <div className='d-flex'>
        <i className="fa-regular fa-file mt-1 me-2 text-light"></i>   
     <h4 className='text-light'>    Doc App</h4>
   </div>
    </Navbar.Brand>
  </Container>
</Navbar>
  
  </>
  )
}

export default Header