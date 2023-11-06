import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
 import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { fetchfromAPI } from '../context/fetchfromAPI'
import { Link } from 'react-router-dom'
import Videos from './Videos'
import Header from './Header'



const VideoDetail = () => {

  const {id}=useParams()
  const[videoDetails,setVideoDetails]=useState()
  const[videos,setvideos]=useState()
   console.log(videoDetails)
  useEffect(()=>{
                fetchfromAPI(`videos?part=snippet,statistics&id=${id}`)
                .then(data=>setVideoDetails(data.items[0]))
               
               fetchfromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
              .then((data) => setvideos(data.items))
              window.scrollTo({top:0,left:0,behavour:'smooth'})
             } ,[id])
   
  return (
   <Box minHeight="95vh"  >
    <Header/>
    <Stack direction={{xs:'column',md:'row'}}>

      <Box flex={1} >
        <Box sx={{width:{md:"80%",sm:"100%",xs:"100%"},position:"sticky",top:"78px"}}>
           <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>

            <Typography variant='h5' p={1}  fontWeight="bold">
               {videoDetails?.snippet?.title}
           </Typography> 
         <Stack direction="row" justifyContent="space-between" py={.8}  >  
          <Link to={`/channelDetail/${videoDetails?.snippet?.channelId}`}>    
            <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="black" p={2} >
                {videoDetails?.snippet?.channelTitle}
            </Typography>
          </Link> 
            
            <Stack  direction="row"  gap="20px" alignItems="center" >
               <Typography>
               {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
               </Typography>
               
               <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
            </Stack>
          </Stack>
         </Box>
      </Box>
      

      <Box  px={1} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
       <Typography variant='h6' py={1}>Related Videos:</Typography>
          <Videos videos={videos} direction="column" />
       </Box> 

    </Stack>

   </Box>
  )
}

export default VideoDetail