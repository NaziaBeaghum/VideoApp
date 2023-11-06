import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{boxShadow:"none",borderRadius:"20px",display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto'}}>
        <Link to={`/channelDetail/${channelDetail?.id?.channelId}`}>
           <CardContent sx={{display:'flex',flexDirection:'column', justifyContent:"center" ,textAlign:"center",color:"#fff",backgroundColor:"black"}}>
            
            <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} 
            sx={{borderRadius:"50%",height:"180px", width:"180px",mb:2,border:'1px solid #e3e3e3' ,backgroundColor:"black"}}>
            </CardMedia>
          
          <Typography variant="h6">{channelDetail?.snippet?.title}</Typography>
          </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard