import React from 'react';
import NetflixCard from '../components/NetflixCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardDeck } from 'react-bootstrap';

class DisplayRow extends React.Component {
    
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 8
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 6
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 5
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 3
        }}

        return(
           
                <Carousel responsive={responsive} slidesToSlide={6} swipeable={false} draggable={false}>
                    {this.props.contents.map(details => <NetflixCard details={details} setFavorite={this.props.setFavorite}/>)}                                         
                </Carousel>

        )
    }
}
export default DisplayRow
