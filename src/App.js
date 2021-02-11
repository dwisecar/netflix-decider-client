import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllContent from './containers/AllContent';
import Recommendations from './containers/Recommendations';
import DisplayGenre from './containers/DisplayGenre'

class App extends React.Component {
  
  state = {
    movies: [],
    shows: [],
    recommendations: [],
    selectedGenre: ''
  }

  setGenre = genre => {
    this.setState({selectedGenre: genre})
  }
  
  render() {
    let { movies, shows, recommendations, selectedGenre } = this.state
    return (
      <Router>
        <div className='main'>
          <NavBar setGenre={this.setGenre}/>
          <Recommendations contents={recommendations}/>
          <Route exact path='/' render={() => <AllContent shows={shows} movies={movies}/>}/>
          <Route path={`/movies/${selectedGenre}`} render={routerProps => <DisplayGenre {...routerProps} genre={selectedGenre} />}/>
          <Route path={`/tv_shows/${selectedGenre}`} render={routerProps => <DisplayGenre {...routerProps} genre={selectedGenre} />}/>
        </div>
        
      </Router>
    )
  }
}

export default App;
