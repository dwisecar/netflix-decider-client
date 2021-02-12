import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllContent from "./containers/AllContent";
import Recommendations from "./containers/Recommendations";
import DisplayGenre from "./containers/DisplayGenre";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
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

  componentDidMount() {}
  // User Sign in Method
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

  render() {
    console.log(this.state.user);
    let { movies, shows, recommendations, selectedGenre } = this.state;
    return (
      <Router>
        <div className="main">
          <NavBar setGenre={this.setGenre} />
          <Recommendations contents={recommendations} />
          <Route
            exact
            path="/"
            render={() => <AllContent shows={shows} movies={movies} />}
          />
          <Route
            path={`/movies/${selectedGenre}`}
            render={(routerProps) => (
              <DisplayGenre {...routerProps} genre={selectedGenre} />
            )}
          />
          <Route
            path={`/tv_shows/${selectedGenre}`}
            render={(routerProps) => (
              <DisplayGenre {...routerProps} genre={selectedGenre} />
            )}
          />
          <SignIn signIn={this.userSignIn} />
          <SignUp signUp={this.userSignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
