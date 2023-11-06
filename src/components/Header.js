import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import { useNavigate } from 'react-router-dom'

const Header = () =>{
   const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/')
  }
 return(
   
    <Stack direction="row" 
    alignItems="center"
    p={2}
    sx={{top:0,justifyContent:'space-between'}}>

   
        <img src="assets/logo.png" alt="VideoApp" height={65} onClick={handleClick}/>
      

        
        <SearchInput/>
    </Stack>
  )

   }
export default Header