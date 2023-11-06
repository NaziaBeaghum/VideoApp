import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import Searchfeed from './components/Searchfeed';



const App=()=>{
   
  return(
 <BrowserRouter>
    
      <Box >
        
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/videoDetail/:id' element={<VideoDetail/>}/>
             <Route path='/channelDetail/:id' element={<ChannelDetail/>}/>
             <Route path='/search/:id' element={<Searchfeed/>}/>
         </Routes>
      </Box>
     
 </BrowserRouter>
  )
}

export default App;
// sx={{backgroundColor:'#000'}}