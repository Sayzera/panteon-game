import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Avatar } from '@mui/material';

import {useDispatch, useSelector} from 'react-redux';
import {fetchUserDetail} from '../redux/userDetailSlice';
import { useLocation, NavLink,useNavigate ,useParams} from "react-router-dom";
import PublicIcon from '@mui/icons-material/Public';
import BadgeIcon from '@mui/icons-material/Badge';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Chart from '../components/chart';









export default function UserDetail() {



  

  let {id} = useParams();
 

  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetail.userData);

  useEffect(() => {
    dispatch(fetchUserDetail(id))

  }, [])


  function UserNotFound() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          User not found
        </Typography>
      </div>
    );
  }
 

  return (
      <div style={{
        backgroundColor:'#f7780b',
        paddingBottom:'100px',
        paddingTop:'100px'
      }}>
            <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '50px',
      }}
    > 
      {
        userDetail?.success == 0 ? <serNotFound /> : <>
        
        <Grid container spacing={2} sx={{display:'flex', alignItems:'center'}}>
        
      
      <Grid item className='userDetailImgContainer' xs={12} md={2} >
      <Avatar className='userDetailImg' src={userDetail?.user.picture} ></Avatar>
      </Grid>

      <Grid item xs={12}  md={10} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography className='alignMake' gutterBottom variant="subtitle1" component="div">
            <BadgeIcon /> <span> {userDetail?.user.username}</span>
            </Typography>
            <Typography  className='alignMake' variant="body2" gutterBottom>
            <PublicIcon /> <span>{userDetail?.user.country}</span>
            </Typography>
            <Typography className='alignMake' variant="body2" color="text.secondary">
            <MonetizationOnIcon /><span>{userDetail?.user.money}</span>
            </Typography>
            <Typography className='alignMake' variant="body2" color="text.secondary">
            <MilitaryTechIcon /> <span>{userDetail?.user.level}</span>
            </Typography>
          </Grid>
        
        </Grid>
        <Grid item>
          <Typography className='alignMake' variant="subtitle1" component="div">
           <Grid3x3Icon /> <span>{userDetail?.user.id}</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    
        <Chart dailyEarnings={userDetail?.userDailyDetails} />
    </>
      }
    </Paper>
      </div>
  );
}
