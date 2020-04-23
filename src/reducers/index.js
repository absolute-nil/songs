import {combineReducers} from 'redux'

const songsReducer = () =>{
    return [
        { title: 'Like a Rolling Stone', duration: '4:05' },
        { title: 'Satisfaction', duration: '2:30' },
        { title: 'Imagine', duration: '3:15' },
        { title: 'What\'s Going On', duration: '1:45' }
      ];
}

const selectSongReducer = (selectedSong=null,action) =>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer  
})
