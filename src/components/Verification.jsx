import React from 'react'
import { CButton,CFormInput } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './main.css';

const verification = () => {
  return (
    <div className='main'>
        <div className='container'>
<img className='email' src="https://img.icons8.com/clouds/150/000000/sent.png" alt='#'/>
<div>
<p className='msg'>Email has been sent to you.</p>
<p className='send'>Check the email that's associated with youe account for the verification code.</p>
</div>
<div className='btn1'>
    
<CFormInput type="password" id="floatingPassword" floatingLabel="Verification code" placeholder="Password" style={{width:"200px", marginBottom: "10px", height:"50px"}} />
      <CButton color="primary" style={{width:"200px", color:"white"}} disabled>Verify</CButton>
      <p className='skip'>Send me another code </p>
<p className='skip'>Skip for now  <img src="https://img.icons8.com/ios/23/000000/circled-chevron-right.png" alt='#'/></p>
</div>
</div>
    </div>
  )
}

export default verification;
