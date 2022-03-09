import React from 'react'
import ReactDOM from 'react-dom'
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import './App.css'
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            {/* Add a Playlist component */}
            </div>
        </div>
      </div>
    )
  }
}

export default App