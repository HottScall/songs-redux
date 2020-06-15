import React from "react";
import { selectSong } from "./actions";
import SongList from "./songList";

const App = () => {
  return (
    <div className="ui container div">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
