import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetArtistDetailQuery } from '../redux/services/shazamcore'
import ArtistSongCard from '../components/ArtistSongCard'
import ArtistHeader from '../components/ArtistHeader'
import { Loader } from '../components'
export default function ArtistDetails() {
  const {id} = useParams()
  const { activeSong,isPlaying } = useSelector((state) => state.player);
  const {data : ArtistDetail, isFetching, error} = useGetArtistDetailQuery(id);
  console.log(ArtistDetail)
  
  return (
    <div>
<div className='flex flex-col p-4 animate-slideleft'>
<ArtistHeader id={id} />
</div>

<div className=' mt-4'>
        <p className=' text-orange-100 font-bold text-2xl  ml-5'>Songs From The Artist</p>
        <div className='flex flex-wrap sm:justify-center mt-7 gap-8 scroll-smooth'>
        {ArtistDetail?.data?.map((song,idx)=>{
          return(
<ArtistSongCard key={idx} artistId={id} activeSong={activeSong} idx={idx} data={ArtistDetail?.data} isPlaying={isPlaying} song={song}/>
          )
        })}
        </div>

    </div>
    </div>
  )
}

