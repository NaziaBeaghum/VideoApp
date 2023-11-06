import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'

const Header = () => 
   (
    <Stack direction="row" 
    alignItems="center"
    p={2}
    sx={{top:0,justifyContent:'space-between'}}>

     <Link to="/">
        <img src="assets/logo.png" alt="VideoApp" height={65}/>
     </Link> 

        
        <SearchInput/>
    </Stack>
  )


export default Header