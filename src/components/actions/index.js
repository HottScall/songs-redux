export const selectSong = song => {
  // This is an action creator so must return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
