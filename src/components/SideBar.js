import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

const SideBar = ({selectedCategory,setselectedCategory}) => {

 const navigate=useNavigate()
 const categories = [
    { name: 'Javascript', id:1 },
    { name: 'CSS', id:2 },
    { name: 'React', id:3 },
    { name: 'Angular', id:4},
    { name: 'Python', id:5 },
    { name: 'Java', id:6 },
  ]

  return (
    <Stack  direction= "row" sx={{overflowY:'auto',
                flexDirection:{md:"column"},
                height:{sx:'auto',md:"95%"}}}>

      {categories.map((item)=>(
        <button className='category-btn' onClick={()=>setselectedCategory(item.name)}  key={item.id}>
         {item.name}
        </button>
      ))}  
         
    </Stack>
  )
}

export default SideBar