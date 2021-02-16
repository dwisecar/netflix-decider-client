import React from 'react';
import {Container} from 'react-bootstrap';
import DisplayRow from './DisplayRow';

class AllContent extends React.Component {

    rowTemplate = (medias, genre) => {    
        return(
        <div className='display-row'>
            <h3>{genre.toUpperCase()}</h3>
            <DisplayRow contents={medias.filter(media => media.genre === genre)} setFavorite={this.props.setFavorite} favorites={this.props.favorites} user={this.props.user}/><br></br><br></br>
        </div>)
    }
    
    render(){
        let {movies, shows, movieGenres, showGenres} = this.props
        return(
            <div>
                <Container>                  
                    <div>
                        <h2>TV SERIES</h2>
                        {showGenres.map(genre => this.rowTemplate(shows, genre))}     
                    </div>
                    <div>
                        <h2>MOVIES</h2>
                        {movieGenres.map(genre => this.rowTemplate(movies, genre))}
                    </div>
                </Container>
            </div>
        )
    }
}
export default AllContent


