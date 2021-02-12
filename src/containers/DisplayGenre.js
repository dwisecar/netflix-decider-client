import React from 'react';
import {Container} from 'react-bootstrap';



class DisplayGenre extends React.Component {
    
    render(){
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