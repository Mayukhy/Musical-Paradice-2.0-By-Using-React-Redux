import React from 'react';
import { setClicktrack } from '../../redux/features/playerSlice';
import { useDispatch } from 'react-redux';
const Track = ({ isPlaying, isActive, activeSong,clicktrack }) =>{
  const dispatch= useDispatch()
  var Url = activeSong?.attributes?.artwork?.url;
  var NewUrl = Url?.replace('{w}','1000')
  var FinalUrl = NewUrl?.replace('{h}','1000')
  console.log(FinalUrl)
  return(
    <>
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} sm:block h-16 w-16 mr-4`}>
        <img style={{cursor:'pointer'}} onClick={()=>{
          dispatch(setClicktrack(!clicktrack))
        }} src={activeSong?.images?.coverart || activeSong?.images?.default || FinalUrl || 'https://us.123rf.com/450wm/petrnutil/petrnutil1701/petrnutil170100208/70666201-top-ten-button-vector-blue.jpg?ver=6'} alt="cover art" className="rounded-full" />
      </div>
      <div className=" ">
        <p className="truncate text-white font-bold text-lg xl:w-[300px] md:w-[200px] w-28">
          { activeSong?.title || activeSong?.heading?.title || activeSong?.attributes?.name }
        </p>
        <p className="truncate text-gray-300 xl:w-[300px] md:w-[200px] w-28">
          { activeSong?.subtitle || activeSong?.heading?.subtitle || activeSong?.attributes?.composerName}
        </p>
      </div>
    </div>
    </>
  )
}


export default Track;
