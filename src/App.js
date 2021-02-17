import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllContent from "./containers/AllContent";
import DisplayGenre from "./containers/DisplayGenre";
import Favorites from "./containers/Favorites";
import Searched from "./containers/Search";

class App extends React.Component {
  state = {
    movies: [],
    shows: [],
    recommendations: [],
    selectedGenre: "",
    user: false,
    filteredNetflix: [],
  };

  handleSearch = (e) => {
    e.preventDefault();

    let searchTerm = e.target.search.value;
    let totalSearched = [];
    totalSearched.push(
      ...this.state.shows.filter((show) => show.title.startsWith(searchTerm))
    );
    totalSearched.push(
      ...this.state.movies.filter((movie) => movie.title.startsWith(searchTerm))
    );
    console.log(totalSearched);
    this.setState({
      filteredNetflix: totalSearched,
    });
  };

  setGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  setRecommendations = () => {
    let genreObj = {};
    this.state.user.medias &&
      this.state.user.medias.forEach((media) => {
        genreObj[media.genre]
          ? genreObj[media.genre]++
          : (genreObj[media.genre] = 1);
      });
    for (let obj in genreObj) {
      genreObj[obj] =
        Math.ceil(genreObj[obj] * 10) / this.state.user.medias.length;
    }
    let finalArr = [];
    for (let obj in genreObj) {
      let tempMovieArr = [];
      let i = 0;
      while (
        tempMovieArr.length < genreObj[obj] &&
        i < this.state.movies.length
      ) {
        if (
          this.state.movies[i].genre === obj &&
          !this.state.user.medias
            .map((show) => show.title)
            .includes(this.state.movies[i].title)
        ) {
          tempMovieArr.push(this.state.movies[i]);
        }
        i++;
      }
      let tempShowArr = [];
      let j = 0;
      while (
        tempShowArr.length < genreObj[obj] &&
        j < this.state.shows.length
      ) {
        if (
          this.state.shows[j].genre === obj &&
          !this.state.user.medias
            .map((show) => show.title)
            .includes(this.state.shows[j].title)
        ) {
          tempShowArr.push(this.state.shows[j]);
        }
        j++;
      }
      finalArr.push(...tempShowArr, ...tempMovieArr);
    }
    this.setState({
      recommendations: [...finalArr],
    });
  };

  userSignIn = (e) => {
    e.preventDefault();
    let form = e.target;
    fetch("http://localhost:3000/api/v1/login", {
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
          this.setState(
            {
              user: user.user,
            },
            () => {
              this.setRecommendations();
            }
          );
          localStorage.setItem("token", user.jwt);
          // this.fetchContent();
        }
      });
  };

  // User Sign up Method
  userSignUp = (e) => {
    e.preventDefault();
    let form = e.target;
    fetch("http://localhost:3000/api/v1/signup", {
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
        if (user["status"] === 500) {
          alert(user["error"]);
        } else {
          form.reset();
          this.setState(
            {
              user: user.user,
            },
            () => {
              this.setRecommendations();
            }
          );
          localStorage.setItem("token", user.jwt);
          // this.fetchContent();
        }
      });
  };

  //handle a user signing out

  handleLogout = () => {
    localStorage.clear();
    this.setState({ user: false });
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
    const token = localStorage.token;
    if (token) {
      this.persistUser(token);
    }
  }

  //persisting a user when revisitng the web page
  persistUser = (token) => {
    fetch("http://localhost:3000/api/v1/persist", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((user) =>
        this.setState(
          {
            user: user,
          },
          () => setTimeout(this.setRecommendations, 1000)
        )
      );
  };

  //selectedGenre set by the navbar links
  setGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  //on like button click, this function receives the movie or show object and the bool value of liked or not
  setFavorite = (media, value) => {
    value ? this.postFavorite(media) : this.deleteFavorite(media);
  };

  postFavorite = (media) => {
    fetch("http://localhost:3000/likes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        media_id: media.id,
        media_type: media.vtype,
      }),
    }).then(() => {
      this.setState(
        {
          user: {
            id: this.state.user.id,
            username: this.state.user.username,
            medias: [...this.state.user.medias, media],
          },
        },
        () => {
          this.setRecommendations();
        }
      );
    });
  };

  deleteFavorite = (media) => {
    let token = localStorage.token;
    let updated = this.state.user.medias.filter((net) => {
      return net !== media;
    });
    fetch("http://localhost:3000/delete_like", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        media_id: media.id,
        media_type: media.vtype,
      }),
    }).then(() => {
      this.setState({
        user: {
          medias: updated,
          id: this.state.user.id,
          username: this.state.user.id,
        },
      });
    });
  };

  //handle editing username
  handleEdit = (e) => {
    e.preventDefault();
    let form = e.target;
    let token = localStorage.token;
    let newUsername = e.target.username.value;
    console.log(e.target.username.value);
    fetch(`http://localhost:3000/api/v1/editname`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: newUsername,
        user_id: this.state.user.id,
      }),
    }).then(
      this.setState(
        {
          user: {
            medias: this.state.user.medias,
            id: this.state.user.id,
            username: newUsername,
          },
        },
        () => {
          form.reset();
        }
      )
    );
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
      "Musical",
      "Family",
      "Fantasy",
      "Biography",
      "Mystery",
      "Animation",
    ];
  };

  render() {
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
            signOut={this.handleLogout}
            handleEdit={this.handleEdit}
            handleSearch={this.handleSearch}
          />
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
                favorites={user.medias}
                recommendations={recommendations}
                user={user}
              />
            )}
          />
          <Route
            path={`/movies/${selectedGenre}`}
            render={() => (
              <DisplayGenre
                genre={selectedGenre}
                contents={movies.filter(
                  (movie) => movie.genre === selectedGenre
                )}
                setFavorite={this.setFavorite}
                favorites={user.medias}
                user={user}
              />
            )}
          />
          <Route
            path={`/tv_shows/${selectedGenre}`}
            render={() => (
              <DisplayGenre
                genre={selectedGenre}
                contents={shows.filter(
                  (movie) => movie.genre === selectedGenre
                )}
                setFavorite={this.setFavorite}
                favorites={user.medias}
                user={user}
              />
            )}
          />
          <Route
            path={"/favorites"}
            render={() => (
              <Favorites
                contents={user.medias}
                setFavorite={this.setFavorite}
                favorites={user.medias}
                user={user}
              />
            )}
          />
          <Route
            path={"/search"}
            render={() => (
              <Searched
                contents={this.state.filteredNetflix}
                setFavorite={this.setFavorite}
                user={user}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
