import React,{useEffect, useState} from 'react'
import {  Alert, TextField } from '@mui/material'
import { PanteonBtn } from '../components/ui/Button'
import {useDispatch, useSelector} from 'react-redux'
import {loginCheck} from '../redux/userSlice'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

function Login() {

  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  const dispatch = useDispatch()

  let isLogin = useSelector((state) => state.userActions.isLogin);
  let userData = useSelector((state) => state.userActions.userData);
 
  useEffect(() => {
      if( userData?.success == 1) {
         Cookies.set('auth', JSON.stringify({token: userData.token, user: userData.user}))
          navigate('/admin')
      }
  },[userData]);


  const handleForm = () => {
      loginCheck({username,password})(dispatch)
  }
  return (
    <div className='login-container'>

        <div className='login-form'>
        {
          userData?.success == 0 ? <Alert severity="error" sx={{m:'10px 0'}}>{userData?.message}</Alert> : null
        }
        <TextField onChange={(e) => setUsername(e.currentTarget.value)} id="outlined-basic" label="Username" variant="outlined" />
        <TextField onChange={(e) => setPassword(e.currentTarget.value)} type='password' id="outlined-basic" label="Password" variant="outlined" />
        <PanteonBtn onClick={handleForm} variant="contained" >Sign In</PanteonBtn>
        </div>
    </div>
  )
}

export default Login