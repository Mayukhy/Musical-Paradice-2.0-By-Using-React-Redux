import React, { useRef, useState } from 'react'
import { useGetSongsFromArtistQuery, useGetSongsFromBengaliArtistQuery } from '../redux/services/shazamcore'
import TopChartsCard from '../components/TopChartsCard'
import { useDispatch, useSelector } from 'react-redux';
import { IndianArtist, NostralgicArtist } from '../assets/constants';
import { FreeMode } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom';
import { setgetArtistsong,setgetBengaliArtistsong } from '../redux/features/playerSlice';
import { Loader } from '../components';
export default function TopCharts() {
  const [imgindex,setimgindex] = useState(0)
  const dispatch = useDispatch();
const {activeSong,isPlaying,getArtistsong,getbengaliArtistsong} = useSelector((state)=>state.player);
const{data:BengaliartistSongs , isFetching:BengaliIsfetching} = useGetSongsFromBengaliArtistQuery(getbengaliArtistsong || 'Anupam Roy') 
const{data:ArtistSongs , isFetching:ArtistIsfetching} = useGetSongsFromArtistQuery(getArtistsong || 'Arijit Singh')     
 console.log(ArtistSongs)
 const {Artistbg} = useRef()
 
  return (
    <div className='mt-7 '>
       <h1 className=" text-orange-200 font-bold text-2xl ml-4">Top Indian Artists</h1>
      <div  className="xl:w-[45vw] md:w-[80vw] sm:w-[90vw] lg:w-[80vw] w-[465px] ml-3 cursor-pointer flex justify-between items-center  mx-1 my-2">
      <Swiper 
  slidesPerView='auto' 
  spaceBetween={15}
  freeMode
  centeredSlides
  centeredSlidesBounds
  modules={[FreeMode]}
  className='mt-4 mb-10 '>
    {IndianArtist?.map((song,idx)=>(
             <SwiperSlide onClick={()=>{
              dispatch(setgetArtistsong(song?.name))
              setimgindex(idx)
             }} key={song?.name}  style={{width:'25%', height:'auto',transition:'all 0.3s'}}
      className=' hover:bg-slate-700 md:hover:p-4 hover:rounded-md animate-slideleft flex flex-col'
      >
       
        <img src={song?.image ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
          <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.name}</p>
        
      </SwiperSlide> 
    ))}
  </Swiper>
      </div>



      <div className=' text-white font-medium text-2xl ml-5'> Songs From {getArtistsong || 'Arijit Singh'}</div>
    <div className='relative animate-slideleft flex xl:w-[45vw] md:w-[80vw] sm:w-[90vw] lg:w-[80vw]  w-[465px] ml-3 mt-4 overflow-x-scroll'>
      {/* <img  className=' w-[100%] h-[100%] object-cover absolute rounded-2xl' ref={Artistbg} src={IndianArtist[imgindex]?.image || "http://localhost:3000/src/assets/image/Indian%20Artist/Arijit_Singh.jpg"} alt="" />
      <div style={{background:'linear-gradient(180deg, rgba(44,69,116,0.756827731092437) 0%, rgba(98,42,91,0.7624299719887955) 100%)'}} className='w-[100%] h-[100%] object-cover absolute backdrop-blur-sm rounded-2xl '></div> */}
      <div className=' flex flex-row ml-2  mt-2 mb-5 justify-center items-center'>
      {ArtistSongs?.tracks?.hits?.map((song,idx)=>{
        return(  
<TopChartsCard isfetching={ArtistIsfetching} Loader={Loader} idx={idx} song={song} data={ArtistSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
      </div>

    </div>
    <h1 className=" text-orange-200 font-bold text-2xl mt-10 ml-4">Old Is Gold</h1>
      <div  className="xl:w-[45vw] md:w-[80vw] sm:w-[90vw] lg:w-[80vw]  w-[465px] ml-3 cursor-pointer flex justify-between items-center  mx-1 my-2">
      <Swiper 
  slidesPerView='auto' 
  spaceBetween={15}
  freeMode
  centeredSlides
  centeredSlidesBounds
  modules={[FreeMode]}
  className='mt-4 mb-10 '>
    {NostralgicArtist?.map((song,idx)=>(
             <SwiperSlide onClick={()=>{
              dispatch(setgetBengaliArtistsong(song?.name))
             }} key={song?.name}  style={{width:'25%', height:'auto',transition:'all 0.3s'}}
      className=' hover:bg-slate-700 md:hover:p-4 hover:rounded-md animate-slideleft flex flex-col'
      >
       
        <img src={song?.image ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
          <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.name}</p>
        
      </SwiperSlide> 
    ))}
  </Swiper>
      </div>



      <div className=' text-white font-medium text-2xl ml-5'>Songs From {getbengaliArtistsong || 'Anupam Roy'}</div>
      <div className='relative animate-slideleft flex xl:w-[45vw] md:w-[80vw] sm:w-[90vw] lg:w-[80vw]  w-[465px] ml-3 mt-4 overflow-x-scroll'>
      {/* <img  className=' w-[100%] h-[100%] object-cover absolute rounded-2xl' ref={Artistbg} src={IndianArtist[imgindex]?.image || "http://localhost:3000/src/assets/image/Indian%20Artist/Arijit_Singh.jpg"} alt="" />
      <div style={{background:'linear-gradient(180deg, rgba(44,69,116,0.756827731092437) 0%, rgba(98,42,91,0.7624299719887955) 100%)'}} className='w-[100%] h-[100%] object-cover absolute backdrop-blur-sm rounded-2xl '></div> */}
      <div className=' flex flex-row ml-2  mt-2 mb-5 justify-center items-center'>
      {BengaliartistSongs?.tracks?.hits?.map((song,idx)=>{
        return(  
<TopChartsCard isfetching={BengaliIsfetching} Loader={Loader} idx={idx} song={song} data={BengaliartistSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
      </div>

    </div>
    </div>

  )
}

