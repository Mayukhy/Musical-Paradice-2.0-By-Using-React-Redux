import React from 'react'
import { useGetTopIndiaChartsQuery, useGetTopKolkataChartsQuery } from '../redux/services/shazamcore'
import TopChartsCard from '../components/TopChartsCard'
import { useSelector } from 'react-redux';
export default function TopCharts() {
const {activeSong,isPlaying} = useSelector((state)=>state.player);
const{data:IndianSongs , isFetching:IndiaIsfetching} = useGetTopIndiaChartsQuery() 
const{data:KolkataSongs , isFetching:KolkataIsfetching} = useGetTopKolkataChartsQuery()   

  return (
    <div className='mt-7'>
    <div className=' text-white font-bold text-2xl ml-5'> Songs From Delhi</div>
    <div className=' animate-slideleft flex flex-wrap m-2 md:justify-start justify-center'>
      {IndianSongs?.map((song,idx)=>{
        return(
            <TopChartsCard idx={idx} song={song} data={IndianSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
    </div>

    <div className=' text-white font-bold text-2xl ml-5 mt-10'> Songs From Kolkata</div>
    <div className=' animate-slideleft flex flex-wrap m-2 md:justify-start justify-center'>
      {KolkataSongs?.map((song,idx)=>{
        return(
            <TopChartsCard idx={idx} song={song} data={KolkataSongs} activeSong={activeSong} isPlaying={isPlaying}/>
        )
      })}
    </div>
    </div>

  )
}

