import React from 'react';
import Forward5Icon from '@mui/icons-material/Forward5';
import Replay5Icon from '@mui/icons-material/Replay5';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Input, IconButton } from '@mui/material';
const Seekbar = ({ value, min, max, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center mt-[-10px]">
      <IconButton sx={{color:'whitesmoke',display:{xs:'none',md:'flex'}}} type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white">
      <Replay5Icon/>
      </IconButton>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>

      {/* <Box sx={{ width: {md:300, xl:400,sm:200, position:'relative',marginLeft:'-5px',marginRight:'25px', marginTop:'5px'} }}>
      <Slider
      aria-label='time-indicator'
        step="any" 
        color="secondary"
        value={value}
        min={min}
        max={max}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl rounded-lg"
      /> */}
            <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={(event) => setSeekTime(event.target.value)}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <IconButton sx={{color:'whitesmoke',display:{xs:'none',md:'flex'}}} type="button" onClick={() => setSeekTime(appTime + 5)} className="hidden lg:ml-4 lg:block text-white">
      <Forward5Icon/>
      </IconButton>
    </div>
  );
};

export default Seekbar;
