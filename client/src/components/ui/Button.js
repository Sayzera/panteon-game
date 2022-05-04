
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';


export const PanteonBtn = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor:'black',
  '&:hover': {
    backgroundColor: '#f7780b'
  },
}));