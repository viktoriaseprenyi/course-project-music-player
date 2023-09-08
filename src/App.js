import React, { useState, useRef } from 'react';
import "./styles/app.scss";
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';

function App() {
  //Use useRef to refer this html element so we can access to src
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });

  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} songInfo={songInfo} setSongInfo={setSongInfo} />
      <Library libraryStatus={libraryStatus} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
