import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { grey } from '@mui/material/colors'

const VideoCard = ({video:{id:{videoId},snippet}}) => {
 console.log(snippet.channelTitle)
  return (
   <Card sx={{width:{md:'320px',xs:'100%'},borderShadow:"none"}}>
     <Link  to={videoId && `/Videodetail/${videoId}`} >
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:358,height:180}}/>
     </Link>

     <CardContent sx={{height:'100px',px:{md:0,xs:4}}}>
      <Link  to={videoId && `/VideoDetail/${videoId}`}>
        <Typography variant="subtitle" fontWeight="bold" sx={{textDecoration:"none"}}>
          {snippet?.title.slice(0,40)}
        </Typography>
      </Link>
      <br></br>
      <Link  to={snippet?.channelId && `/channelDetail/${snippet.channelId}`}>
        <Typography variant="subtitle2" fontWeight="bold" sx={{color:'gray',textDecoration:"none"}}>
          {snippet?.channelTitle}
        </Typography>
      </Link>

     </CardContent>
   </Card>
  )
}

export default VideoCard