import React from "react";

function LibrarySong({ song, songs, setCurrentSong, id }) {
    const selectSongHandler = () => {
        setCurrentSong(song);
    }

    return (
        <div onClick={selectSongHandler} className="library-song">
            <img src={song.cover} alt="song cover"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;