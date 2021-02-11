import React from 'react';
import {Container} from 'react-bootstrap';



class DisplayGenre extends React.Component {
    
    render(){
        // const { genre } = this.props.match.params.genre;
        return(
            <div className='genre-grid'>
                <Container>
                    <p>{this.props.genre}</p>
                </Container>
            </div>
        )
    }
}
export default DisplayGenre