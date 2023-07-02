
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


export default function ArtistSongCard({song,idx,activeSong,isPlaying,data,artistId}) {

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
    <div className="w-full flex flex-row items-center m-auto">
    <Card onMouseEnter={()=>{
      setshowplay(true)
    }} onMouseLeave={()=>{
      setshowplay(false)
    }} style={{transition:'all 0.3s',position:'relative' , border:activeSong?.attributes?.name===song?.attributes?.name?'1px solid whitesmoke': 'none', background: activeSong?.attributes?.name===song?.attributes?.name?'#1e0140':'linear-gradient(123deg, rgba(76,180,213,1) 0%, rgba(59,17,150,1) 100%)'}} className=' rounded-xl  p-6 hover:border  border-red-100 hover:bg-blue-900 hover:scale-110   duration-300 backdrop-blur-md border-red-200' sx={{ display: 'flex' ,width:{xs:'400px',sm:'500px',md:'600px',justifyContent:'space-between',margin:'2px auto',cursor:'pointer',borderRadius:'20px',boxShadow:'none',background:'transparent'} }}>
    <Typography variant='h4' sx={{margin:'30px 30px auto 0px', fontWeight:'700', color:activeSong?.attributes?.name===song?.attributes?.name?'whitesmoke': '#fcfcfc' }} className=" font-bold text-3xl ">{idx+1}.</Typography> 
    <CardMedia
        component="img"
        sx={{  width: 130, height: 130,opacity:activeSong?.attributes?.name===song?.attributes?.name?0.5: 1, borderRadius:'10px',marginLeft:{xs:"-10px",sm:'-110px', md:'-80px'} }}
        image={FinalUrl}
        alt="Live from space album cover"
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , marginRight:{md:'100px',sx:'0px'} }}>
          <p className="truncate text-red-300 font-bold md:text-2xl text-xl w-44">
           {song?.attributes?.name} 
          </p>
          <p className="truncate text-gray-300 md:text-xl  text-lg w-32">
          <Link to={`/artists/${artistId}`}>
          {song?.attributes?.composerName} </Link>
          </p>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         { showplay? <IconButton className=' animate-slideup' sx={{
            color:'azure', position:'absolute',left:'80%', top:'50%'
          }} aria-label="play/pause">
          {isPlaying &&  activeSong?.attributes?.name===song?.attributes?.name   ? <PauseCircleIcon sx={{height: 48 , width: 48}}  onClick={pausesong} />:<PlayCircleFilledWhiteIcon sx={{height: 48 , width: 48}}  onClick={playsong}/>}
          </IconButton> :''}
        </Box>
      </Box>

    </Card>
  </div>
  )
}
