import React from 'react'
import { useGetArtistDetailSongQuery } from '../redux/services/shazamcore'
import { Loader } from '.';
import LoaderTopplay from './LoaderTopplay';
import DetailLoder from './DetailLoder';
export default function ArtistHeader({id}) {
    const {data : Artisdetail, isFetching : isFetchingHeader} = useGetArtistDetailSongQuery(id)
     console.log(Artisdetail)

     var Url = Artisdetail?.data[0]?.attributes?.artwork?.url;
     var NewUrl = Url?.replace('{w}','1000')
     var FinalUrl = NewUrl?.replace('{h}','1000')
     console.log(FinalUrl)
    
     if (isFetchingHeader) 
       return <DetailLoder/> 
     
  return (
    <div>
          <div style={{ zIndex:1, borderRadius:'20px'
     }}  className=' relative mt-5 animate-slideleft'>
        
    <img style={{ zIndex:-1,borderRadius:'20px',
width:'100%', height:'100%',objectFit:'cover'}} className=' absolute' src={FinalUrl} alt="" />

<div className=' absolute' style={{width:'100%', height:'100%', background:'linear-gradient(180deg, rgba(17,46,115,0.6811974789915967) 0%, rgba(60,3,110,0.7344187675070029) 100%)',
backdropFilter:'blur(5px)',zIndex:-1,borderRadius:'20px'}}></div>
      <div className='flex flex-col p-4 animate-slideleft'>
      <div className=' flex flex-row gap-10'>
      <img width='150px' style={{borderRadius:'20px'}} src={FinalUrl} alt="" />
      <div className=' flex flex-col mt-2'>
        <p className='text-white font-bold text-4xl'>{Artisdetail?.data[0]?.attributes?.name}</p>
        <p className=' text-orange-300 text-lg bg-sky-1000 text-center rounded-xl p-1 border mt-4'>{Artisdetail?.data[0]?.attributes?.genreNames[0]}</p>
      </div>

    </div>
       
      </div>
      <div style={{zIndex:'999'}} className='p-6 animate-slideleft'>
      </div>
    </div>
    </div>
  )
}
