const songsReducer = () => {
  return [
    { title: "Hello", duration: "4:05" },
    { title: "Bonsoir", duration: "3:52" },
    { title: "Hola", duration: "2:30" },
    { title: "Guten Tag", duarion: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectSong;
};
