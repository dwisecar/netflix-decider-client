import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NetflixCard from '../components/NetflixCard'


class DisplayGenre extends React.Component {
    
    render(){

        return(
            <div className='genre-grid'>
                <Container>
                    <Row className='genre-display-row' xs={1} s={2} md={3} lg={5} xl={5}>             
                        {this.props.contents.map(details => (
                        <Col className='genre-col'>
                            <NetflixCard details={details} setFavorite={this.props.setFavorite}/>
                        </Col>))}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default DisplayGenre