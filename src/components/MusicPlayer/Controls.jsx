import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { Box, IconButton } from '@mui/material';
const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <Box sx={{marginLeft:{xs:'-40px',sm:0,md:0}}} className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
   < IconButton className=' animate-[spin_2s]' sx={{color:'whitesmoke'}}>
    <BsArrowRepeat  size={20} color={repeat ? '#d76df7' : 'white'} onClick={() => setRepeat(!repeat)} className="hidden sm:block cursor-pointer" />
    </IconButton>
    {currentSongs?.length && < IconButton sx={{color:'whitesmoke'}}> <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} /> </IconButton>}
    {isPlaying ? (
      < IconButton sx={{color:'whitesmoke'}}>
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      </IconButton>
    ) : (
      < IconButton sx={{color:'whitesmoke'}}>
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      </IconButton>
    )}
    {currentSongs?.length && < IconButton sx={{color:'whitesmoke'}}> <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} /> </IconButton>}
    < IconButton className=' animate-[spin_2s]' sx={{color:'whitesmoke'}}><BsShuffle size={20} color={shuffle ? '#d76df7' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" /> </IconButton>
  </Box>
);

export default Controls;
