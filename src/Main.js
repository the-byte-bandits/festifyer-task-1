import React from 'react'
import './css/Main.css'
import { Link } from "react-router-dom";


function Main() {
  return (
    <div class="center-content">
        <div class="content-wrapper">
            <h1>Create your event within 5 minutes</h1>
            <p>Manage your events and event attendees professionally and simply without the need for an expert</p>
            {/* <button>Sign Up</button> */}
            <Link className='main-btn-signup' to={'/sign-up'}>Sign Up</Link>
            <img src={require("./img/image.webp")} alt="Image" />
        </div>
  </div>
  )
}

export default Main
