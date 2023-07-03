import React from 'react'
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
  const dispatch = useDispatch();
const {activeSong,isPlaying,getArtistsong,getbengaliArtistsong} = useSelector((state)=>state.player);
const{data:BengaliartistSongs , isFetching:BengaliIsfetching} = useGetSongsFromBengaliArtistQuery(getbengaliArtistsong || 'Anupam Roy') 
const{data:ArtistSongs , isFetching:ArtistIsfetching} = useGetSongsFromArtistQuery(getArtistsong || 'Arijit Singh')     
 console.log(ArtistSongs)

 
  return (
    <div className='mt-7'>
       <h1 className=" text-white font-bold text-2xl ml-4">Top Indian Artists</h1>
      <div  className="xl:w-[660px] md:w-[590px] sm:w-[640px] lg:w-[820px] w-[450px] ml-3 cursor-pointer flex justify-between items-center  mx-1 my-2">
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
             }} key={song?.name}  style={{width:'25%', height:'auto',transition:'all 0.3s'}}
      className=' hover:bg-slate-700 md:hover:p-4 hover:rounded-md animate-slideleft flex flex-col'
      >
       
        <img src={song?.image ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
          <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.name}</p>
        
      </SwiperSlide> 
    ))}
  </Swiper>
      </div>

      <div className=' text-white font-bold text-2xl ml-5'> Songs From {getArtistsong || 'Arijit Singh'}</div>
    <div className=' animate-slideleft flex flex-wrap mt-2 justify-start '>
      {ArtistSongs?.tracks?.hits?.map((song,idx)=>{
        return(
            <TopChartsCard isfetching={ArtistIsfetching} Loader={Loader} idx={idx} song={song} data={ArtistSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
    </div>
    <h1 className=" text-white font-bold text-2xl mt-10 ml-4">Old Is Gold</h1>
      <div  className="xl:w-[660px] md:w-[590px] sm:w-[640px] lg:w-[820px] w-[450px] ml-3 cursor-pointer flex justify-between items-center  mx-1 my-2">
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

    <div className=' text-white font-bold text-2xl ml-5'>Songs From {getbengaliArtistsong || 'Anupam Roy'}</div>
    <div className=' animate-slideleft flex flex-wrap mt-2 justify-start'>
      {BengaliartistSongs?.tracks?.hits?.map((song,idx)=>{
        return(
            <TopChartsCard isfetching={BengaliIsfetching} idx={idx} song={song} data={BengaliartistSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
    </div>

    </div>

  )
}

