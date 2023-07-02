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


export default function TopChartCard({song,idx,activeSong,isPlaying,data}) {


    const [showplay, setshowplay] = useState(false)
    const stockimgWorld = stockWorldchats.map((pic,idx) => pic)
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
    <div className="w-full flex flex-row items-center m-auto">
    {/* {song.title}
    {isPlaying &&  activeSong?.title===song?.title  ? <PauseCircleIcon  onClick={pausesong} />:<PlayCircleFilledWhiteIcon onClick={playsong}/>} */}
    <Card onMouseEnter={()=>{
      setshowplay(true)
    }} onMouseLeave={()=>{
      setshowplay(false)
    }} style={{transition:'all 0.3s',position:'relative' , background: activeSong?.title===song?.title?'#1e0140':'linear-gradient(90deg, rgba(8,129,182,0.6811974789915967) 0%, rgba(60,3,110,0.7344187675070029) 100%)'}} className=' rounded-xl  p-6 hover:border  border-red-100 hover:bg-blue-900 hover:scale-110   duration-300 backdrop-blur-md border-red-200' sx={{ display: 'flex' ,width:{xs:'400px',sm:'480px',md:'450px',justifyContent:'space-between',margin:'10px auto',cursor:'pointer',borderRadius:'20px',boxShadow:'none',background:'transparent'} }}>
    <Typography variant='h5' sx={{margin:'auto 40px auto 0px', fontWeight:'700'}} className=" text-zinc-200 font-bold text-2xl ">{idx+1}.</Typography> 
    <CardMedia
        component="img"
        sx={{ width: 100, height: 100,opacity:0.9, borderRadius:'10px',marginLeft:{xs:"-40px",sm:'-110px', md:'-70px'} }}
        image={stockWorldchats[idx].image || FinalUrl}
        alt="Live from space album cover"
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <p className="truncate text-red-300 font-bold text-xl w-44">
           {song?.title} 
          </p>
          <p className="truncate text-gray-400  text-lg w-32">
          {song?.subtitle} 
          </p>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         { showplay? <IconButton className=' animate-slideup' sx={{
            color:'azure', position:'absolute',left:'80%', top:'50%'
          }} aria-label="play/pause">
          {isPlaying &&  activeSong?.title===song?.title  ? <PauseCircleIcon sx={{height: 48 , width: 48}}  onClick={pausesong} />:<PlayCircleFilledWhiteIcon sx={{height: 48 , width: 48}}  onClick={playsong}/>}
          </IconButton> :''}
        </Box>
      </Box>

    </Card>
  </div>
  )
}
