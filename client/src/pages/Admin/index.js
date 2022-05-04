import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {useDispatch, useSelector} from 'react-redux';
import {deailEarnings,giveRewar,changeDeailEarningCase,changeGiveRewardCase} from '../../redux/leaderBoardSlice';
import Loader from '../../components/Loader';
import Cookies from 'js-cookie';
import { jwtCheck, jwtCheckAdmin } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';


export default function Home() {

  const dispatch = useDispatch();
  const deailEarningsData = useSelector((state) => state.leaderBoard.deailEarningCase);
  const giveRewarData = useSelector((state) => state.leaderBoard.giveRewardCase);

  const navigate = useNavigate();
  
  jwtCheckAdmin().then(data => {
    console.log(data)
      if(data.success== 0) {
          navigate('/login')
      }
  });




 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const DailyEarnings = () => {
    // Günlük kazançları manuel olarak dağıt 
    dispatch(changeDeailEarningCase({
      deailEarningCase: true
    }))
    deailEarnings()(dispatch)
    setAnchorEl(null);

  }


  const GiveReward = () => {
    // Haftalık biriken paraları manuel olarak dağıt
    dispatch(changeGiveRewardCase({
      giveRewardCase: true
    }))


    giveRewar()(dispatch)
    setAnchorEl(null);


  }

  if(deailEarningsData || giveRewarData) {
    return (
        <Loader />
    )
  }
  

  return (
    <div className="AdminHomeContainer">


      <Box>
        <Typography>
          <h1>Control System</h1>
        </Typography>
      </Box>


      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          borderRadius: '10px',
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Game Actions" />
              </ListItemButton>
            </ListItem>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
             >
              <MenuItem onClick={DailyEarnings}>Daily Earnings</MenuItem>
              <MenuItem onClick={GiveReward}>Weekly Reward</MenuItem>
            </Menu>
         
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
}
