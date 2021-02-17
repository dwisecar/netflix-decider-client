import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetflixCard from "../components/NetflixCard";

class Search extends React.Component {
  isFavorite = (media) => {
    return (
      this.props.favorites &&
      this.props.favorites
        .map((favorite) => favorite.title)
        .includes(media.title)
    );
  };

  render() {
    return (
      <div className="genre-grid">
        <Container>
          <Row className="genre-display-row" xs={1} s={2} md={3} lg={5} xl={5}>
            {this.props.contents.map((details) => (
              <Col className="genre-col">
                <NetflixCard
                  key={details.id}
                  details={details}
                  isFavorite={this.isFavorite(details)}
                  setFavorite={this.props.setFavorite}
                  favorites={this.props.favorites}
                  user={this.props.user}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Search;
