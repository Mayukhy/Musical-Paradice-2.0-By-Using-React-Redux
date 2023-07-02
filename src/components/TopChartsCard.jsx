
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { stockWorldchats } from '../assets/constants';
import { Link } from 'react-router-dom';

export default function TopChartsCard({song,idx,activeSong,isPlaying,data}) {

  var Url = song?.attributes?.artwork?.url;
  var NewUrl = Url?.replace('{w}','1000')
  var FinalUrl = NewUrl?.replace('{h}','1000')
  console.log(FinalUrl)

    const [showplay, setshowplay] = useState(false)
    const dispatch = useDispatch();
    const theme = useTheme();
    const playsong=()=>{
        dispatch(setActiveSong({song,data,idx}))  
        dispatch(playPause(true)) 
      
      }
      const pausesong=()=>{
      dispatch(playPause(false)) 
       
      }
  return (

    <Card  onMouseEnter={()=>{
      setshowplay(true)
    }} onMouseLeave={()=>{
      setshowplay(false)
    }} style={{transition:'all 0.3s',position:'relative' , background: activeSong?.title===song?.title?'#1e0140':'linear-gradient(90deg, rgba(8,129,182,0.6811974789915967) 0%, rgba(60,3,110,0.7344187675070029) 100%)'}} className=' rounded-xl flex-col  p-6 hover:border  border-red-100 hover:bg-blue-900 hover:scale-110   duration-300 backdrop-blur-md border-red-200' sx={{ display: 'flex' ,width:{xs:'200px',md:'250px'},height:{xs:'260px',md:'280px'},justifyContent:'space-between',margin:'10px 10px',cursor:'pointer',borderRadius:'20px',boxShadow:'none',background:'transparent' }}>
    <CardMedia
        component="img"
        sx={{ width: 200, height: 170,opacity:0.9, borderRadius:'5px', margin:'auto'}}
        image={stockWorldchats[idx]?.image}
        alt="Live from space album cover"
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , marginRight:{md:'100px',sx:'0px'} }}>
          <p className="truncate text-red-300 font-bold  text-xl w-36">
           {song?.title} 
          </p>
          <p className="truncate text-gray-400  text-sm w-32">
          <Link to={`/artists/${ song?.artists? song?.artists[0]?.adamid : ''}`}>
          {song?.subtitle} </Link>
          </p>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         { showplay? <IconButton className=' animate-slideright' sx={{
            color:'azure', position:'absolute',left:'60%', top:'70%'
          }} aria-label="play/pause">
          {isPlaying &&  activeSong?.title===song?.title ? <PauseCircleIcon sx={{height: 58 , width: 58}}  onClick={pausesong} />:<PlayCircleFilledWhiteIcon sx={{height: 58 , width: 58}}  onClick={playsong}/>}
          </IconButton> :''}
        </Box>
      </Box>
    </Card>

  )
}
