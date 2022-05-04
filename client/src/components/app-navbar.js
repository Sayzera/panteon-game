import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {changeLoginCase} from '../redux/userSlice';
import Cookies from 'js-cookie';


const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Leader Board',
    link: '/leader-board',
  }
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppNavBar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userActions.isLogin);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
 
    setAnchorElNav(null);
  };


  const logout = () => {
    dispatch(changeLoginCase(false));
    Cookies.remove('auth')
    window.location.href = '/';
    setAnchorElNav(null);

  }
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" sx={{background:'#0a0a0a',borderBottom:'1px solid #2a2a2a'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Box
            component="img"
            sx={{
            height: 30,
            width: 180,
            }}
            alt="The house from the offer."
            src={require('../assets/img/panteon.png')}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={index+page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{textDecoration:'none'}}  key={'menu-panteon' + index} >
                  <Typography sx={{  color: 'black' , '&:hover' : { color: '#f7780b' } }} textAlign="center">{page.name}</Typography>
                  </Link>


                


                </MenuItem>
              ))}
                
                {
                     userData == false? (
                      <MenuItem onClick={handleCloseNavMenu}  >
                      <Link to="/login" style={{textDecoration:'none'}}>
                      <Typography sx={{  color: 'black' , '&:hover' : { color: '#f7780b' } }} textAlign="center">Login</Typography>
                      </Link>
                      </MenuItem>
                     ) : (
                      <MenuItem onClick={logout}>
                      <Link to="/logout" style={{textDecoration:'none'}}>
                      <Typography sx={{  color: 'black' , '&:hover' : { color: '#f7780b' } }} textAlign="center">Logout</Typography>
                      </Link>
                      </MenuItem>
                     )
                  }
           

              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Box
            component="img"
            sx={{
            height: 20,
            width: 120,
            }}
            alt="The house from the offer."
            src={require('../assets/img/panteon.png')}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
            {pages.map((page,index) => (
             <Link  key={'menu-panteon' + index} to={page.link} style={{textDecoration:'none'}}  >
              <Button
                key={page.name + index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , '&:hover' : { color: '#f7780b' } }}
              >
                {page.name}
              </Button></Link>
            ))}

            {
              userData == false? (
                <>
                   <Link  to={'/login'} style={{textDecoration:'none'}}  >
            <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' , '&:hover' : { color: '#f7780b' } }}
            >
              Login
            </Button></Link>
                </>
              ) : 

              (
                <>

            <Link  to={'/logout'} style={{textDecoration:'none'}}  >
            <Button
            onClick={logout}
            sx={{ my: 2, color: 'white', display: 'block' , '&:hover' : { color: '#f7780b' } }}
            >
              Logout
            </Button></Link>
                </>
              )
            }
         



          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNavBar;
