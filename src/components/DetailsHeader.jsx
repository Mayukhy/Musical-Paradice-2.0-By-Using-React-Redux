import React from 'react'

export default function DetailsHeader({songData}) {
  return (
    <div className=' flex flex-row gap-10'>
      <img width='150px' style={{borderRadius:'20px'}} src={songData?.images?.coverart} alt="" />
      <div className=' flex flex-col mt-2'>
        <p className='text-white font-bold text-2xl'>{songData?.title}</p>
        <p className=' text-slate-300 text-xl'>{songData?.subtitle}</p>
        <p className=' text-orange-100 text-sm mt-2'>{songData?.sections[1]?.footer}</p>
      </div>

    </div>
  )
}

