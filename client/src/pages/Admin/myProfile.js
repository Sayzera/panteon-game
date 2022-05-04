import React from 'react'
import './index.css'
function MyProfile() {
  return (
    <div className='my-profile-container'>
      <div class="card">
  <div class="ds-top"></div>
  <div class="avatar-holder">
    <img src={require('../../assets/img/sezer.png')} alt="Albert Einstein" />
  </div>
  <div class="name">
    <a href="https://www.instagram.com/boluk.sezer/?hl=tr" target="_blank">Sezer Bölük</a>
  </div>

  <div class="ds-skill">
    <h6>Skill <i class="fa fa-code" aria-hidden="true"></i></h6>
    <div class="skill html">
      <h6><i class="fab fa-html5"></i> PHP, Laravel, MYSQL </h6>
      <div class="bar bar-html">
        <p>95%</p>
      </div>
    </div>

    <div class="skill html">
      <h6><i class="fab fa-html5"></i> JavaScript, ReactJs, NextJs, NodeJs, MongoDB, Firebase </h6>
      <div class="bar bar-html">
       
      </div>
    </div>
   

    <div class="skill html">
      <h6><i class="fab fa-html5"></i> HTML5, CSS, Jquery </h6>
      <div class="bar bar-html">
        <p>95%</p>
      </div>
    </div>

   
  </div>
</div>

    </div>
  )
}

export default MyProfile