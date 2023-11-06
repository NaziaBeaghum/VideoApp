import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchfromAPI } from '../context/fetchfromAPI'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import Header from './Header'

const ChannelDetail = () => {
  const[channelDetail,setchannelDetail]=useState(null)
  const[videos,setVideos]=useState([])
  console.log(channelDetail)
  console.log(videos)
  const {id}=useParams();
  useEffect(()=>{
    fetchfromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data.items[0]));

    fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
   .then((data)=>setVideos(data?.items));
  },[id])
  
  return (
    <Box minHeight="95vh">
      <Header/>
       <Box >
           <ChannelCard channelDetail={channelDetail}/>
       </Box>
       <Box display="flex" p={2}>
        <Box sx={{mr:{sm:"100px"}}}>
          <Videos videos={videos}/>
        </Box>
       </Box>
    </Box>
  )
}

export default ChannelDetail