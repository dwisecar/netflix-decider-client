import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NetflixCard from "../components/NetflixCard";

const CategoryDisplay = ({favorites, contents, user, setFavorite}) => {
  
  const isFavorite = (media) => {
    return favorites && favorites.map(show => show.title).includes(media.title);
  };

  return (
    <div className='genre-grid'>
      <Container style={{ maxWidth:'90%'}}>
        <Row className='genre-display-row' xs={1} s={1} md={2} lg={3} xl={4}>     
          {contents.map((details) => (
            <Col className="genre-col">
              <NetflixCard
                key={details.id}
                details={details}
                isFavorite={isFavorite(details)}
                setFavorite={setFavorite}
                favorites={favorites}
                user={user}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
  
}
export default CategoryDisplay;