import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = () => {
  const[searchdata,setsearchdata]=useState("")
  const navigate=useNavigate()
  console.log(searchdata)

  const handleSubmit=(e)=>{
   e.preventDefault();
   if(searchdata){
    navigate(`/search/${searchdata}`);
  //   setsearchdata("")
  //  }
   }
  }

  return (
    <Paper
    // paper is going to be a form in this case...component is a props
     component="form"
     onSubmit={handleSubmit}
    //  empty callback fn
    sx={{
       borderRadius:10,
      border:'1px solid #D3D3D3',
      pl:2,
      boxShadow:'none',
       mr:{sm:5} 
    }}
    >
      <input
       className='search-bar'
       placeholder='...search'
       value={searchdata}
       onChange={(e)=>{setsearchdata(e.target.value)}}/>

       <IconButton type="submit" sx={{p:'10px'}}>
         <SearchIcon />
       </IconButton>

    </Paper>
  )
}

export default SearchInput