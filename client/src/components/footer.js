import { Box, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
function Footer() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          background: '#0a0a0a',
          color: '#fff',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid item xs={12}>
          <img
            src={require('../assets/img/panteon.png')}
            style={{
              width: '150px',
            }}
          />
        </Grid>

        <Grid item xs={12} className="menu-bottom-links">
          <Link to="/">Home</Link>
          <Link to="/leader-board">Leader Board</Link>
          <Link to="/admin">Control System</Link>
        </Grid>

        <Grid item xs={12} sx={{ 
          'a': 
          { marginRight: '30px', 
            color: '#fff',

            '&:hover': {
              color: '#f7780b'
            }

         
          }
          
          }}>
          <Link to="/facebook">
            <Facebook />
          </Link>

          <Link to="/facebook">
          <Twitter />
          </Link>
          
          <Link to="/facebook">
          <Instagram /></Link>
          <Link to="/facebook">
          <YouTube />
          </Link>
        </Grid>

        <Grid item xs={12}>
          Bu site Panteon için Sezer Bölük tarafından hazırlanmıştır
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
