import React from 'react'
import { Card, Button } from 'react-bootstrap'


class NetflixCard extends React.Component {

    state = {
        hovering: false
    }

    setHovering = val => {
        this.setState({hovering: val})
    }
    
    setLiked = val => {
        this.props.setFavorite(this.props.details, val)
    }

    render() {
        const {details, user } = this.props
        if(user !== false){
            return (
                <Card className='netflix-card' onMouseLeave={() => this.setHovering(false)}>
                    <Card.Img src={details.image} alt="card-image" className="card-image"/>
                    <Card.ImgOverlay >
                        <Card.Title className='card-title'>{details.title}</Card.Title>
                        <Card.Text className='card-text'>{details.synopsis}</Card.Text>
                        {this.props.isFavorite === true ? <Button className='card-button' onClick={() => this.setLiked(false)} variant="danger">Unlike</Button> : <Button className='card-button' onClick={() => this.setLiked(true)} variant="danger">Like</Button>}
                    </Card.ImgOverlay>
                </Card>)
        } else {
            return (
                <Card className='netflix-card' onMouseLeave={() => this.setHovering(false)}>
                    <Card.Img src={details.image} alt="card-image" className="card-image"/>
                    <Card.ImgOverlay >
                        <Card.Title className='card-title'>{details.title}</Card.Title>
                        <Card.Text className='card-text'>{details.synopsis}</Card.Text>
                    </Card.ImgOverlay>
                </Card>)
            }
        
        
    }
}
export default NetflixCard