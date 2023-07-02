import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'swiper/css';
import 'swiper/css/free-mode'
import MenuItem from '@mui/material/MenuItem';
import { useGetSongshollywoodQuery, useGetTopChartsQuery } from '../redux/services/shazamcore';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import { selectCategoryArtist } from '../redux/features/playerSlice';
import ArtistLoader from '../components/ArtistLoader';
export default function TopArtists() {
    const dispatch = useDispatch()
    const {data :Hollywood,isFetching:hollywoodFetching} = useGetSongshollywoodQuery()
    const {categoryArtist} = useSelector((state)=>state.player);
    const {data :All, isFetching:Allfetching, error} = useGetTopChartsQuery(categoryArtist || 'POP');
    console.log(All)
    const [select, setSelect] = useState('');
    const [selectname, setSelectname] = useState('');
    const handleChange = (event) => {
      setSelect(event.target.value);
      dispatch(selectCategoryArtist(event.target.value))
    };
    if (hollywoodFetching) {
      return <ArtistLoader/>
    }
  return (
    <div className=' mt-0'>

<div className="w-full flex justify-between  items-center sm:flex-row flex-col mx-1 my-2">
<h1 className=" text-white font-bold text-2xl">Discover {selectname} Artist</h1>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={categoryArtist || 'pop'}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            background:'#8c8294',
            width:'auto',
            color:'white',
            
          }}
        >
          <MenuItem value={categoryArtist || 'pop'}>
            <em>Category</em>
          </MenuItem>
          {genres.map((item,idx)=>{
            return (
<MenuItem onClick={(e)=>{
setSelectname(item.title)
}
} style={{
    color:select?'black':'antiquewhite',
    background:'#535254'
}} className="selectitems"  value={item.value}>{item.title}</MenuItem>
            )
          })}
        </Select>
      </FormControl>     
</div>

<Swiper
  slidesPerView='auto' 
  spaceBetween={15}
  freeMode
  centeredSlides
  centeredSlidesBounds
  modules={[FreeMode]}
  className='mt-4 mb-10'>
    {All?.tracks?.map((song,idx)=>(
      <SwiperSlide key={song?.key} style={{width:'25%', height:'auto'}}
      className='animate-slideleft flex flex-col'
      >
        <Link to={`/artists/${song?.artists[0]?.adamid}`}>
        <img src={song?.share?.avatar ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
          <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.subtitle}</p>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
    <div className="flex flex-row justify-between items-center">
<h1 className=" text-white font-bold text-2xl">Best of HollyWood</h1>
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
    {Hollywood?.tracks?.hits?.map((song,idx)=>(
      <SwiperSlide key={song?.key} style={{width:'25%', height:'auto'}}
      className='animate-slideleft flex flex-col'
      >
        <Link to={`/artists/${song?.artists[0]?.adamid}`}>
        <img src={song?.share?.avatar ||'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'} className='rounded-full object-cover w-full' alt="" />
          <p className=' text-gray-400 w-20 truncate text-md text-center m-auto'>{song?.heading?.subtitle}</p>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
    </div>
  )
}

