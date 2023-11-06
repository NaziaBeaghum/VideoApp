import React from 'react'
import { useState,useEffect } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchfromAPI } from '../context/fetchfromAPI';
import Header from './Header';

const Home = () => {
  const[selectedCategory,setselectedCategory]=useState("New")
  
  const[videos,setvideos]=useState([])
 console.log("kkkk")
    useEffect(()=>{
      // calling fn and passing value ie(search and q) 
      fetchfromAPI(`search?part=snippet&q=${selectedCategory}`)
      
      .then((data) =>setvideos(data.items))},[selectedCategory])

    
  return (
    <Box>
      <Header/>
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      {/* flex-direction is dynamic...it is defined for small and medium screens */}
       <Box sx={{height:{sx:"auto",md:'95vh'},px:{sx:0,md:4}}}>
        <SideBar selectedCategory={selectedCategory}
                 setselectedCategory={setselectedCategory}/> 
       </Box>

       <Box p={2}  sx={{ height:'90vh',flex:2}} >
          <Typography variant='h4'
          fontWeight="bold" mb={2}>
           {selectedCategory}  <span style={{color:"#F31503"}}>videos</span>
          </Typography>

          <Videos videos={videos}/>
       </Box>
    </Stack>
 </Box>
  )
}

export default Home