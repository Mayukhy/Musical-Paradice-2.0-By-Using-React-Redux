import { useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/free-mode'
import { useGetTopworldChartsQuery } from "../redux/services/shazamcore";
import React from 'react'
import TopChartCard from "./TopChartCard";
import { Stack } from "@mui/material";

import { Loader } from ".";
import LoaderTopplay from "./LoaderTopplay";

export default function TopPlay() {
  const { activeSong,isPlaying } = useSelector((state) => state.player);
  const devref = useRef(null)
const dispatch = useDispatch();

const {data, isFetching, error} =  useGetTopworldChartsQuery();
const topPlays = data?.slice(0,10);
console.log(topPlays)
    if (isFetching) 
     return <LoaderTopplay/>;
    //  useEffect(()=>{
    //   devref.current.scrollIntoView({behavior:'smooth'})
    // },[])
  return (
    <div ref={devref} style={{height:'100vh'}}   className=" animate-slideright xl:ml-6 ml-0 xl:mb-0 mb-6  xl:w-[540px] max-w-full flex flex-col mt-5 ">
      <div className="w-full flex flex-col"></div>
      <div className="flex flex-row justify-between items-center ">
        <h1 className=" text-white font-bold ml-10 text-2xl">Top Songs</h1>
        <Link to='/top-charts'>
        <p className=" text-gray-400 text-xl mr-10">See More</p></Link>
        </div>
        <div className="mt-4 flex flex-col gap-1 overflow-y-scroll md:h-screen h-auto xl:pb-32 pb-0 scroll-smooth">
          {topPlays?.map((song,idx) =>{
            return(
              <TopChartCard  activeSong={activeSong} isPlaying={isPlaying} data={data}  key={song.key} song={song} idx={idx}/>
            )
          })}
      </div>
    </div>
  )
}

