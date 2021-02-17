import React from "react";
import NetflixCard from "../components/NetflixCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class DisplayRow extends React.Component {
  isFavorite = (media) => {
    return (
      this.props.favorites &&
      this.props.favorites
        .map((favorite) => favorite.title)
        .includes(media.title)
    );
  };

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
      },
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

    const CustomLeftArrow = ({ onClick, ...rest }) => {
      const {
        onMove,
        carouselState: { currentSlide, deviceType },
      } = rest;
      // onMove means if dragging or swiping in progress.
      return (
        <button
          onClick={() => onClick()}
          className="carousel-arrow carousel-arrow--left"
        >
          ❮
        </button>
      );
    };

    return (
      <Carousel
        responsive={responsive}
        slidesToSlide={6}
        swipeable={false}
        draggable={false}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {this.props.contents.map((details) => (
          <NetflixCard
            className="show-card"
            key={details.id}
            details={details}
            isFavorite={this.isFavorite(details)}
            setFavorite={this.props.setFavorite}
            user={this.props.user}
            favorites={this.props.favorites}
          />
        ))}
      </Carousel>
    );
  }
}
export default DisplayRow;
