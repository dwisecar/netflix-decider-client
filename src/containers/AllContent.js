import React from 'react';
import {Container, Row} from 'react-bootstrap';
import DisplayRow from './DisplayRow';


class AllContent extends React.Component {
   
    render(){
        let {movies, shows} = this.props
        return(
            <div>
                <Container>
                    <Row>
                        <div className='movie-display-row'>
                            <h3>COMEDIES</h3>
                            <DisplayRow contents={movies}/>
                        </div>
                    </Row>
                    <Row>
                        <div className='movie-display-row'>
                            <h3>TV DRAMAS</h3>
                            <DisplayRow contents={shows} />
                        </div>
                    </Row>
                    <Row>
                        <div className='movie-display-row'>
                            <h3>ACTION TRILLERS</h3>   
                            <DisplayRow contents={movies}/>
                        </div>
                    </Row>
                    <Row>
                        <div className='movie-display-row'>
                            <h3>SCI FI / FANTASY</h3>
                            <DisplayRow contents={movies}/>
                        </div>
                    </Row>
                    <Row>
                        <div className='movie-display-row'>
                            <h3>DOCUMENTARIES</h3>
                            <DisplayRow contents={movies}/>
                        </div>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default AllContent


