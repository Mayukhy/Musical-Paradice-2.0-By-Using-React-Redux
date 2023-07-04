import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
export default function Searchbar() {
  const navigate = useNavigate()
 
  const [searchTerm,setsearhTerm] = useState('')
  const handelsubmit=(e)=>{
    if (e.key === 'Enter') {
      navigate(`/search/${searchTerm}`)
    }
  }
  return (
    <>
    <div className='flex lg:justify-start justify-center'>
    
    <Paper className=' rounded-t-none'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {md:400,xs:300}, background:'linear-gradient(90deg, rgba(4,125,150,0.4786324786324786) 0%, rgba(122,164,5,0.5551470588235294) 100%)',marginLeft:{lg:'30px',xs:'0px',borderRadius:'0px 0px 10px 10px'}}}
    >
      <input style={{ width:'400px',height:'40px',marginTop:' -5px' ,padding:'10px 10px',outline:'none',backdropFilter:'blur(20px)',background:'none',color:'whitesmoke'}} type="text" onKeyUp={handelsubmit} value={searchTerm} 
      onChange={(e)=>{
        setsearhTerm(e.target.value)
      }} placeholder='Search any song' />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color:'Highlight'}} />
      </IconButton>
    </Paper>
    </div>
    </>
  )
}
