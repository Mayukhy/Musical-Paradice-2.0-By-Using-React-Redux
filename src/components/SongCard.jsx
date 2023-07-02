import * as React from 'react';
import Card from '@mui/material/Card';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { Link } from 'react-router-dom';
const SongCard = ({song,idx,data,currentSongs, currentIndex}) =>{
  const [play, setplay] = React.useState('playbtn')
  const [cardimg, setcardimg] = React.useState('cardimage')
  const { activeSong,isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch()
  const playsong=()=>{
      dispatch(setActiveSong({song,data,idx}))  
      dispatch(playPause(true)) 
    
  }
  const pausesong=()=>{
    dispatch(playPause(false)) 
  }
  return(
    <Box className='animate-slideleft' sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:{xs:'auto',sm:'0px 0px'}
      
    }}>
      <Card onMouseEnter={()=>{
          setplay('playbtnactive')
          setcardimg('cardimagehover')
        }} 
        onMouseLeave={()=>{
          setplay('playbtn')
          setcardimg('cardimage')
        }}   sx={{ width:325 ,height:375,
       background:'rgba(135, 148, 158, 0.582)',
       borderRadius:'10px',
       position:'relative',
       backdropFilter:'blur(20px)'
     }} >
        <CardMedia  className={cardimg}  sx={{ height: 300 , width:315 ,
        margin:'5px 0px 0px 5px',
        borderRadius:'10px',
        position:'relative'
       }} title="" image={song?.images?.coverart || song?.images?.default || song?.attributes?.artwork?.url} >

 </CardMedia>
 <Box sx={{
          left:'45%' ,
          position:'absolute',
          top:'38%',
          transform:'scale(3)'
        }} className={play}>{isPlaying && activeSong?.title===song?.title ? <PauseCircleIcon  onClick={pausesong} />:<PlayCircleFilledWhiteIcon onClick={playsong}/>}
       </Box>

       
        <CardContent sx={{
          marginTop:'-8px'
        }}>
        <p className="truncate text-white font-bold text-lg">
          <Link to={`/songs/${song?.key}`}>
          {song?.title || song?.heading?.title || song?.attributes?.name}
          </Link>
        
      </p>
      <p className="truncate text-gray-300">
        <Link to={`/artists/${ song?.artists? song?.artists[0]?.adamid : ''}`}>
        {song?.subtitle || song?.heading?.subtitle || song?.attributes?.composerName }
        </Link>
      </p>
        </CardContent>
      </Card>
    </Box>
    );
}



export default SongCard;
