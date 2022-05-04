import { Avatar, Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {useNavigate} from 'react-router-dom'

function About() {
  let navigate = useNavigate();
  return (
    <div
      style={{
        background: '#f7780b',
      }}
    >
      <Container className='aboutContainer'>
          <Box className="aboutItem about-title">
           <span> Ben kimim ?</span>

           <Avatar src={require('../assets/img/sezer.png')} className='myProfile' ></Avatar> 

          <Button sx={{color:'white'}} onClick={() => {
              navigate('/my-profile')
          }}>  Go to my profile</Button>
          </Box>

          <Box className="aboutItem">
              Merhaba ben Sezer, 26 yaşındayım Ankara'da yaşıyorum. Selçuk Universitesi Spor Bilimleri Fakültesinden 2020 yılında mezun oldum. Spor yapmayı, araştırmayı ve yeni şeyler öğrenmeyi seviyorum. <b> Full Stack Web </b>geliştiriciyim. 6 yılı aşkın süredir Web ve Mobil uygulama geliştirmeye devam ediyorum. 
              Kariyerime Php ile başladım şimdi ise kendimi JavaScript teknolojilerinde geliştirmek istiyorum.

          </Box>
      </Container>
    </div>
  );
}

export default About;
