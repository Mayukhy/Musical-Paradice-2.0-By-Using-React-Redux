import React, { useState } from "react";
import { FreeMode } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode'
import {Error,Loader} from '../components'
import Typography from '@mui/material/Typography'
import { useGetSongsBySearchQuery } from "../redux/services/shazamcore";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SearchSongCard from "../components/SearchSongCard";
export default function Discover () {
  const {searchTerm} = useParams()
  const {activeSong,isPlaying,currentSongs, currentIndex} = useSelector((state)=>state.player);
    const {data, isFetching, error} =  useGetSongsBySearchQuery(searchTerm);
    console.log(data)
    const songs = data?.tracks?.hits?.map((song)=>song);
    if (isFetching) 
    return <Loader/>;
    if (error) {
     return <Error/>
    }

return (
<div className="flex flex-col">
<div className="w-full flex justify-between px-5 items-center sm:flex-row flex-col mx-1 my-2">
<h1 className=" text-white font-bold text-2xl mt-4"> Search Results For " {searchTerm} "</h1>
</div>
<div className="flex flex-wrap sm:justify-center mt-10 gap-8">
  {songs?.map((song,idx)=>{
    return(
      <SearchSongCard key={song?.key} data={data} song={song} idx={idx} activeSong={activeSong} isPlaying={isPlaying} currentSongs={currentSongs} currentIndex={currentIndex}/>
    )
  })}
</div>
<div className=' mt-20'>
            <div className="flex flex-row justify-between items-center">
        <h1 className=" text-white font-bold text-2xl">Artists As Per Search</h1>
        <Link to='/Top Charts'>
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
            {songs?.map((song,idx)=>(
              <SwiperSlide key={song?.key} style={{width:'25%', height:'auto',transition:'all 0.3s'}}
              className=' hover:bg-slate-700 md:hover:p-4 hover:rounded-md animate-slideleft flex flex-col'
              ><Link to={`/artists/${ song?.artists? song?.artists[0]?.adamid : ''}`}>
                <img src={song?.share?.avatar ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
              </Link>
                  <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.heading?.subtitle}</p>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>
</div>
)
}


