import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Bg from './assets/image/background.jpg'
import icon from './assets/image/MusicAnimation.gif'
import 'swiper/css/free-mode'
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, Discover, Search, SongDetails, TopCharts } from './pages';
import { useState } from 'react';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import {  useGetSongsboliwoodQuery } from './redux/services/shazamcore';
const App = () => {
  const [slidup,setslidup] = useState(false)
  const {data, isFetching, error} =   useGetSongsboliwoodQuery();
  const { activeSong,clicktrack } = useSelector((state) => state.player);

  var Url = activeSong?.attributes?.artwork?.url;
  var NewUrl = Url?.replace('{w}','1000')
  var FinalUrl = NewUrl?.replace('{h}','1000')

  return (
    <div className="relative flex md:h-screen h-[120vh]">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 mt-1  overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route  path="/discover" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
            <div className=' mt-20'>
            <div className="flex flex-row justify-between items-center">
        <h1 className=" text-white font-bold text-2xl">Artists Around You</h1>
        <Link to='/top-artists'>
        <p className=" text-gray-400 text-xl">See More</p></Link>
        </div>
        <Swiper
          slidesPerView='auto' 
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'>
            {data?.tracks?.hits?.map((song,idx)=>(
              <SwiperSlide key={song?.key} style={{width:'25%', height:'auto',transition:'all 0.3s'}}
              className=' hover:bg-slate-700 md:hover:p-4 hover:rounded-md animate-slideleft flex flex-col'
              >
                <Link to={`/artists/${song?.artists[0]?.adamid}`}>
                <img src={song?.share?.avatar ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
                  <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.heading?.subtitle}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>


          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {/* Upper Skin */}
      <Box sx={{position:'fixed', width:'100%',zIndex:9,top:slidup?'100%':0,background:'linear-gradient(180deg, rgba(8,129,182,1) 0%, rgba(60,3,110,1) 100%)' , backgroundImage:`url(${Bg})`, objectFit:'cover', backgroundSize:'cover'}} className={slidup?' animate-slidedown h-[100%]':'h-[100%] animate-[slideup_0.3s]'}>
        <div className='h-[100%] w-[100%]' style={{display:'flex', justifyContent:'center',alignItems:'center', background:'linear-gradient(180deg, rgba(8,129,182,0.8100490196078431) 0%, rgba(60,3,110,0.7960434173669468) 100%)',backdropFilter:'blur(7px)' }}>
          <div className=' flex flex-col justify-center items-center'>
<img  width='350px'className=' animate-[spin_2s] ' src={icon} alt="" />
 
<h1 className=' font-light font-mono animate-slideright text-teal-300  text-4xl text-center p-5 mt-8 mb-10 shadow-slate-400 '> Listen, <span className=' text-lime-200'>Discover Songs</span> <span className=' text-cyan-400'>&</span> <span className=' text-fuchsia-300'>Discover People</span></h1>
  <div onClick={()=>{
    setslidup(true)
  }} style={{transition:'all 0.3s', borderRadius:'50%', background:'linear-gradient(90deg, rgba(7,185,199,0.6195728291316527) 0%, rgba(134,4,185,0.6195728291316527) 100%)'}} className=' pt-8 pr-9 pl-9 pb-8 animate-bounce mt-1  text-yellow-50 font-bold text-2xl hover:scale-125 cursor-pointer shadow-2xl shadow-cyan-200'> 
 <IconButton className=''  aria-label="">
  <Link to='/discover'><ArrowCircleDownIcon style={{ transform:'scale(4)'}} className=' text-slate-300 mb-1'/> </Link>
 
 </IconButton>
 
 
 
   </div>
  

          </div>
        </div>
      </Box>
      { clicktrack?<Box  sx={{zIndex:9, position:'fixed', width:'100%', height:'110vh',backgroundImage:`url(${activeSong?.images?.background ||activeSong?.images?.blurred || FinalUrl})`, backgroundRepeat:'no-repeat',objectFit:'cover', backgroundSize:'cover',justifyContent:'center',alignItems:'center'}} className='absolute animate-slideup top-0 h-screen w-screen bg-slate-50 '>
        <Card sx={{  width:{xs:'100%',sm:'100vw',md:'100vw'} , height:'110vh',background:'linear-gradient(180deg, rgba(150,95,4,0.5943627450980392) 0%, rgba(5,97,164,0.5551470588235294) 100%)',backdropFilter:'blur(2px)'}}>
          <CardMedia
          sx={{ width:{xs:375,sm:475,md:475},height:{xs:375,sm:475,md:475},margin:{md:'10vh auto',xs:'20vh auto',sm:'10vh auto'},borderRadius:'20px'}}
          image={activeSong?.images?.coverart || activeSong?.images?.default  || FinalUrl || 'https://us.123rf.com/450wm/petrnutil/petrnutil1701/petrnutil170100208/70666201-top-ten-button-vector-blue.jpg?ver=6'}
          />
        </Card>
      </Box>:''}
      {activeSong?.title || activeSong?.heading?.title || activeSong?.attributes?.name ? (
        <div className="fixed md:h-28 h-36 rounded-b-none bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer clicktrack={clicktrack}  />
        </div>
      ):(
        <></>
      )}
    </div>
  );
};

export default App;
