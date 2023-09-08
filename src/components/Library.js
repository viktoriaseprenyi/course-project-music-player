import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (<LibrarySong audioRef={audioRef} song={song} songs={songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} isPlaying={isPlaying} setSongs={setSongs} />))}
            </div>
        </div>
    )
}

export default Library;