import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetflixCard from "../components/NetflixCard";

class Search extends React.Component {
  isFavorite = (media) => {
    return this.props.favorites && this.props.favorites.includes(media);
  };

  render() {
    return (
      <div className='genre-grid'>
      <Container style={{ maxWidth:'90%'}}>
          <Row className='genre-display-row' xs={1} s={1} md={2} lg={3} xl={4}>     
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
