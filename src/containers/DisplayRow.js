import React from 'react';
import NetflixCard from '../components/NetflixCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DisplayRow = ({favorites, contents, user, setFavorite}) => {

    const isFavorite = (media) => {
        return favorites && favorites.map(show => show.title).includes(media.title);
    }; 

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


    const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} className="carousel-arrow carousel-arrow--left">❮</button>;
    };

    const CustomRightArrow = ({ onClick, ...rest }) => {
      const {
        onMove,
        carouselState: { currentSlide, deviceType },
      } = rest;
      // onMove means if dragging or swiping in progress.
      return (
        <button
          onClick={() => onClick()}
          className="carousel-arrow carousel-arrow--right"
        >
          ❯
        </button>
      );
    };

    return(
        <Carousel responsive={responsive} 
            slidesToSlide={6} 
            swipeable={false} 
            draggable={false} 
            infinite={true} 
            customLeftArrow={<CustomLeftArrow/>} 
            customRightArrow={<CustomRightArrow/>}  
        >
            {contents.map(details => 
                <NetflixCard className='show-card' 
                    key={details.id} details={details} 
                    isFavorite={isFavorite(details)} 
                    setFavorite={setFavorite} 
                    user={user} 
                    favorites={favorites}
                />)
            }                                         
        </Carousel>
    )  
}
export default DisplayRow;
