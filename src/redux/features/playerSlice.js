import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  category:'',
  categoryArtist:'',
  searchquary:'',
  clicktrack:false,
  getArtistsong:'',
  getbengaliArtistsong:''
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      //for the song which is currently active
      state.activeSong = action.payload.song ;
      // if hits is present in the api then follow this if statement
      //takeing all the songs in a new array 'currentSongs'
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data?.tracks?.hits;
      } 
      // if hits is not present in the api then follow this if statement
      else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      }
      // if tracks is not present in the api then follow this else statement
      else if (action.payload?.data?.data?.attributes?.key) {
        state.currentSongs = action.payload.data?.data?.attributes;
      }
      else
      state.currentSongs = action.payload.data

      state.currentIndex = action.payload.idx;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
    selectCategoryArtist: (state, action) => {
      state.categoryArtist = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
    setSearchquary:(state, action) => {
      state.searchquary = action.payload;
    },
    setClicktrack:(state, action) => {
      state.clicktrack = action.payload;
    },
    setgetArtistsong : (state,action)=>{
      state.getArtistsong = action.payload
    },
    setgetBengaliArtistsong : (state,action)=>{
      state. getbengaliArtistsong = action.payload
    }
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId ,selectCategory,setSearchquary,setClicktrack,selectCategoryArtist,setgetArtistsong, setgetBengaliArtistsong} = playerSlice.actions;

export default playerSlice.reducer;
