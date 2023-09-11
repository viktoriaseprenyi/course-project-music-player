import React from "react";


function LibrarySong({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) {
    const selectSongHandler = async () => {
        await setCurrentSong(song);
        //Checnk acitve songs
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt="song cover"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;