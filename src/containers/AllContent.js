import React from "react";
import { Container } from "react-bootstrap";
import DisplayRow from "./DisplayRow";

class AllContent extends React.Component {
  rowTemplate = (medias, genre) => {
    return (
      <div className="display-row">
        <h3>{genre.toUpperCase()}</h3>
        <DisplayRow
          contents={medias.filter((media) => media.genre === genre)}
          setFavorite={this.props.setFavorite}
          favorites={this.props.favorites}
          user={this.props.user}
        />
        <br></br>
        <br></br>
      </div>
    );
  };

  rowTemplate = (medias, genre) => {
    return (
      <div className="display-row">
        <h3>{genre.toUpperCase()}</h3>
        <DisplayRow
          contents={medias.filter((media) => media.genre === genre)}
          setFavorite={this.props.setFavorite}
          favorites={this.props.favorites}
          user={this.props.user}
        />
        <br></br>
        <br></br>
      </div>
    );
  };

  render() {
    let {
      movies,
      shows,
      movieGenres,
      showGenres,
      favorites,
      user,
      recommendations,
      setFavorite,
    } = this.props;
    return (
      <div>
        <Container fluid="xl" style={{ marginTop: "5rem", maxWidth: "90%" }}>
          {user === false || recommendations === [] ? null : (
            <>
              <h1>RECOMMENDATIONS</h1>
              <DisplayRow
                contents={recommendations}
                user={user}
                favorites={favorites}
                setFavorite={setFavorite}
              />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </>
          )}
          <div>
            <h1>TV SERIES</h1>
            {showGenres.map((genre) => this.rowTemplate(shows, genre))}
          </div>
          <div>
            <h1>MOVIES</h1>
            {movieGenres.map((genre) => this.rowTemplate(movies, genre))}
          </div>
        </Container>
      </div>
    );
  }
}
export default AllContent;
