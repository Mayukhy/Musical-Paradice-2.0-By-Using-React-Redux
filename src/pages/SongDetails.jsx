import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setActiveSong ,playPause} from '../redux/features/playerSlice'
import { DetailsHeader,RelatedSongs, SongCard } from '../components'
import { useGetRelatedSongsQuery, useGetSongsDetailsQuery } from '../redux/services/shazamcore'
import DetailLoder from '../components/DetailLoder'
export default function SongDetails() {
    const {songid} = useParams()
    const dispatch = useDispatch()
    const { activeSong,isPlaying  } = useSelector((state) => state.player);
    const {data : songData, isFetching, error} =  useGetSongsDetailsQuery(songid);
    const {data : related} =  useGetRelatedSongsQuery(songid);
    
    if (isFetching) {
      return <DetailLoder/>
    }
  return (
    <>
    <div style={{ zIndex:1, borderRadius:'20px'
     }}  className=' relative mt-5 animate-slideleft'>
        
    <img style={{ zIndex:-1,borderRadius:'20px',
width:'100%', height:'100%',objectFit:'cover'}} className=' absolute' src={songData?.images?.background} alt="" />

<div className=' absolute' style={{width:'100%', height:'100%', background:'linear-gradient(180deg, rgba(17,46,115,0.6811974789915967) 0%, rgba(60,3,110,0.7344187675070029) 100%)',
backdropFilter:'blur(5px)',zIndex:-1,borderRadius:'20px'}}></div>
      <div className='flex flex-col p-4 animate-slideleft'>

        <DetailsHeader songData={songData} />
      </div>
      <div style={{zIndex:'999'}} className='p-6 animate-slideleft'>
        <h2 className=' text-gray-100 font-bold text-2xl mb-4'>Lyrics</h2>
        {songData?.sections[1]?.type==='LYRICS'?(
            
<>      
        {songData?.sections[1]?.text?.map((lyrics,id)=>{
            return(
                <p className='text-ellipsis text-slate-200 mb-2 '>{lyrics}</p>
            )
        })}
 

</>
          
        ):(
            <p>No Lyrics Abalable</p>
        )}
      </div>
    </div>
    <div className=' mt-4'>
        <p className=' text-white font-bold text-2xl mb-4'>Related Songs</p>
        <div className='flex flex-wrap sm:justify-center mt-10 gap-8'>
        {related?.tracks?.map((song,idx)=>{
          return(
<SongCard key={song?.key} activeSong={activeSong} idx={idx} data={related} isPlaying={isPlaying} song={song}/>
          )
        })}
        </div>

    </div>
    </>
  )
}

