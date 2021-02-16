import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllContent from "./containers/AllContent";
import Recommendations from "./containers/Recommendations";
import DisplayGenre from "./containers/DisplayGenre";
class App extends React.Component {
  state = {
    movies: [],
    shows: [],
    recommendations: [],
    selectedGenre: "",
    user: false,
  };

  setGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  userSignIn = (e) => {
    e.preventDefault();
    let form = e.target;
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user["status"] === 400) {
          alert(user["error"]);
        } else {
          form.reset();
          this.setState({
            user: user,
          });
        }
      });
  };

  // User Sign up Method
  userSignUp = (e) => {
    e.preventDefault();
    let form = e.target;
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user["status"] === 400) {
          alert(user["error"]);
        } else {
          form.reset();
          this.setState({
            user: user,
          });
        }
      });
  };

  fetchContent = () => {
    fetch("http://[::1]:3000/movies")
      .then((r) => r.json())
      .then((data) => this.setState({ movies: data }));
    fetch("http://[::1]:3000/shows")
      .then((r) => r.json())
      .then((data) => this.setState({ shows: data }));
  };

  componentDidMount() {
    this.fetchContent();
  }

  //selectedGenre set by the navbar links
  setGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  //on like button click, this function receives the movie or show object and the bool value of liked or not
  setFavorite = (media, value) => {
    console.log(media, value);
  };

  //order in which each category renders on the main page
  movieGenres = () => {
    return [
      "Comedy",
      "Action",
      "Horror",
      "Drama",
      "Sci-Fi",
      "Fantasy",
      "Documentary",
      "Crime",
      "Mystery",
      "Romance",
      "Superhero",
      "Musical",
      "Family",
      "Biography",
      "Animation",
    ];
  };
  //order in which each category renders on the main page
  showGenres = () => {
    return [
      "Comedy",
      "Reality-TV",
      "Action",
      "Horror",
      "Drama",
      "Crime",
      "Documentary",
      "Romance",
      "Sci-Fi",
      "Superhero",
      "Musical",
      "Family",
      "Fantasy",
      "Biography",
      "Mystery",
      "Animation",
    ];
  };

  render() {
    console.log(this.state.user);
    let { movies, shows, recommendations, selectedGenre, user } = this.state;
    return (
      <Router>
        <div className="main">
          <NavBar
            setGenre={this.setGenre}
            movieGenres={this.movieGenres()}
            showGenres={this.showGenres()}
            signIn={this.userSignIn}
            signUp={this.userSignUp}
            user={user}
          />
          {user === false ? null : (
            <Recommendations contents={recommendations} />
          )}
          <Route
            exact
            path="/"
            render={() => (
              <AllContent
                shows={shows}
                movies={movies}
                movieGenres={this.movieGenres()}
                showGenres={this.showGenres()}
                setFavorite={this.setFavorite}
              />
            )}
          />
          <Route
            path={`/movies/${selectedGenre}`}
            render={() => (
              <DisplayGenre
                genre={selectedGenre}
                contents={this.state.movies.filter(
                  (movie) => movie.genre === selectedGenre
                )}
                setFavorite={this.setFavorite}
              />
            )}
          />
          <Route
            path={`/tv_shows/${selectedGenre}`}
            render={() => (
              <DisplayGenre
                genre={selectedGenre}
                contents={this.state.shows.filter(
                  (movie) => movie.genre === selectedGenre
                )}
                setFavorite={this.setFavorite}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
