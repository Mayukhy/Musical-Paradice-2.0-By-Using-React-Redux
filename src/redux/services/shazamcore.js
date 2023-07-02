import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import axios from 'axios';
import {selectCategory} from '../features/playerSlice';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl:'https://shazam-api7.p.rapidapi.com',
     prepareHeaders: (headers) =>{
        headers.set('X-RapidAPI-Key','28c423b064msh8e870c067afc75bp1ce93djsn494fec91964b');
        return headers;
     } ,  
    }),
    endpoints:(builder)=>({
      getTopCharts: builder.query({query: (genre)=>`/charts/get-top-songs-in_country_by_genre?country_code=US&genre=${genre}`}) , 
      getTopworldCharts: builder.query({query: ()=>`/charts/get-top-songs-in-world`}) , 
      getSongsBySearch: builder.query({query: (searchTerm)=>`/search?term=${searchTerm}`}) , 
      getSongsboliwood: builder.query({query: ()=>`/search?term=boliwood`}) , 
      getSongsDetails: builder.query({query: (songid)=>`/songs/get_details?id=${songid}`}) , 
      getRelatedSongs: builder.query({query: (songid)=>`/songs/list-recommendations?id=${songid}`}) ,
      getArtistDetail: builder.query({query: (id)=>`/artist/get-top-songs?id=${id}`}) ,
      getArtistDetailSong: builder.query({query: (id)=>`/artist/get-details?id=${id}`}) ,
      getSongshollywood: builder.query({query: ()=>`/search?term=Hollywood`}) ,
      getTopIndiaCharts: builder.query({query: ()=>'/charts/get-top-songs-in-city?country_code=IN&city_name=Delhi'}) , 
      getTopKolkataCharts: builder.query({query: ()=>'/charts/get-top-songs-in-city?country_code=IN&city_name=Kolkata'}) , 
   }),
    
});

export const {
   useGetTopworldChartsQuery,
   useGetTopChartsQuery,
   useGetSongsBySearchQuery,
   useGetSongsboliwoodQuery,
   useGetSongsDetailsQuery,
   useGetRelatedSongsQuery,
   useGetArtistDetailQuery,
   useGetArtistDetailSongQuery,
   useGetSongshollywoodQuery,
   useGetTopIndiaChartsQuery,
   useGetTopKolkataChartsQuery
}=shazamCoreApi;
// songs/list-recommendations?id=293401556'
//artist/get-top-songs?id=
//get-details?id=
//charts/get-top-songs-in-country?country_code=IN