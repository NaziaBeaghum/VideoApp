import React from 'react'
import { useState,useEffect } from 'react';
import { Box,Typography} from '@mui/material';
import Videos from './Videos';
import { fetchfromAPI } from '../context/fetchfromAPI';
import { useParams } from 'react-router-dom';

const Searchfeed = () => {
 
  
  const[videos,setvideos]=useState([])
  const{id}=useParams()
 
    useEffect(()=>{
      // calling fn and passing value ie(search and q) 
      fetchfromAPI(`search?part=snippet&q=${id}`)
      
      .then((data) =>setvideos(data.items))},[id])

    
  return (
    <Box p={2}sx={{ height:'90vh',flex:2}}>

        <Typography variant='h4'
        fontWeight="bold" mb={2}>
        Search Results for  <span style={{color:"#F31503"}}>{id}</span> videos:
        </Typography>

    <Videos videos={videos}/>

  </Box>
  )
}

export default Searchfeed