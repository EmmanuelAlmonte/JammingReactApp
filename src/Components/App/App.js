import React from 'react'
import ReactDOM from 'react-dom'
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import './App.css'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
    this.state = {
      searchResults: [
        {
          name: 'track name1',
          artist: 'track artist1',
          album: 'track album1',
          id: 1
        },
        {
          name: 'track name2',
          artist: 'track artist2',
          album: 'track album2',
          id: 2
        },
        {
          name: 'track name3',
          artist: 'track artist3',
          album: 'track album3',
          id: 3
        }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          name: 'PlaylistName1',
          artist: 'PlaylistArtist1',
          album: 'PlaylistAlbum1',
          id: 4
        },
        {
          name: 'PlaylistName2',
          artist: 'PlaylistArtist2',
          album: 'PlaylistAlbum2',
          id: 5
        },
        {
          name: 'PlaylistName3',
          artist: 'PlaylistArtist3',
          album: 'PlaylistAlbum3',
          id: 6
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack (track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }
    tracks.push(track)
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    
    this.setState({ playlistTracks: tracks });
  }

  render () {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
