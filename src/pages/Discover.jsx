import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Error,Loader, SongCard} from '../components'
import { genres } from "../assets/constants";
import Typography from '@mui/material/Typography'
import { useGetTopChartsQuery} from "../redux/services/shazamcore";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory} from "../redux/features/playerSlice";
export default function Discover () {
  const dispatch = useDispatch();
  const {activeSong,isPlaying,category} = useSelector((state)=>state.player);
    const {data, isFetching, error} = useGetTopChartsQuery(category || 'POP');
    console.log(data)
    const [select, setSelect] = useState('');
    const [selectname, setSelectname] = useState('');
    const handleChange = (event) => {
      setSelect(event.target.value);
      dispatch(selectCategory(event.target.value))
    };
    if (isFetching) 
     return <Loader/>;
    

return (
<div className="flex flex-col">
<div className="w-full flex justify-between  items-center sm:flex-row flex-col mx-1 my-2">
<h1 className=" text-white font-bold text-4xl">Discover {selectname}</h1>
<FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={category || 'pop'}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            background:'#8c8294',
            width:'auto',
            color:'white',
            
          }}
        >
          <MenuItem value={category || 'pop'}>
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
<div className="flex flex-wrap sm:justify-center mt-10 gap-8 scroll-smooth">
  {data ?.tracks?.map((song,idx)=>{
    return(
      <SongCard key={idx}  data={data} song={song} idx={idx} activeSong={activeSong} isPlaying={isPlaying}/>
    )
  })}
</div>

</div>
)
}

