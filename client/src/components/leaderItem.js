import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom'

function LeaderItem({data,i}) {
  return (
    <div>
        <Link to={'/user-detail/' + data.id} className="user-cart-item-container">
        <Grid container spacing={1} sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          width: '70%',
          margin: '20px auto',
          borderTop:'1px solid gray'
        }} 
         className="lader-items"
        >
            <Grid item xs={1}>
              {i+4}
            </Grid>
           
         
           <Grid item xs={8}  sx={{
              display: 'flex',
              alignItems: 'center',
              gap:'10px'
            }}>
               <Avatar alt={data.username} src={data.picture} />
             <Box sx={{textAlign:'left'}}>
             <Typography component="h1">
               {data.username}
              </Typography>
              <Typography component="h1" className='country'>
               {data.country}
              </Typography>
              </Box> 
          
              

            </Grid>

            <Grid item xs={3} className="leader-item-money">
              {/* money format */}

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <Box  sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
                 <MonetizationOnIcon /> <span>{data.money.toFixed(4)} </span>
              </Box>

              <div>
              <p  style={{
                color: data.daily_earnings > 0 ? 'green' :
                data.daily_earnings == 0 ? 'yellow' : 'red',
                  fontWeight:'bold',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column'
              }} ><span>Daily Earnings: {data.daily_earnings} </span>
               {
                  data.daily_earnings > 0 ? <ArrowUpwardIcon /> :
                  data.daily_earnings == 0 ? <ArrowForwardIcon/> : <ArrowDownwardIcon />
                }
              </p>
              </div>
            </Box>

             
            </Grid>
            
        </Grid>
           </Link>
    </div>
  )
}

export default LeaderItem