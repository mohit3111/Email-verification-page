import React from 'react'
import { CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './main.css';

const Main = () => {
  return (
    <div className='main'>
        <div className='container'>
<img className='email' src="https://img.icons8.com/external-soft-fill-juicy-fish/120/000000/external-email-project-management-soft-fill-soft-fill-juicy-fish.png" alt='#'/>
<div>
<p className='msg'>Your email has not been verified.</p>
<p className='send'>Send a verification email to xyz@gmail.com</p>
</div>
<div className='btn1'>
      <CButton color="primary" style={{width:"200px", color:"white"}} disabled>Send verification email</CButton>
<p className='skip'>Skip for now <img src="https://img.icons8.com/ios/23/000000/circled-chevron-right.png" alt='#'/> </p>
</div>
</div>
    </div>
  )
}

export default Main;
