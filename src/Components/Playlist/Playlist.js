import React from 'react';
import TrackList from '../TrackList/TrackList'
import './Playlist.css'
class Playlist extends React.Component {
  render () {
    return (
      <div className="Playlist">
        <TrackList />
        <button className="Playlist">SAVE TO SPOTIFY</button>
        </div>
    )
  }
}

export default Playlist