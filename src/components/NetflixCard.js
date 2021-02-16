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
        if(this.state.hovering){
            if(user !== false){
            return (
                <Card bg="dark" onMouseLeave={() => this.setHovering(false)}>
                    <Card.Img src={details.image} alt="card-image"/>
                    <Card.ImgOverlay>
                        <Card.Text className='card-text'>{details.synopsis}</Card.Text>
                        {this.props.isFavorite === true ? <Button onClick={() => this.setLiked(false)} variant="primary">Unlike</Button> : <Button onClick={() => this.setLiked(true)} variant="primary">Like</Button>}
                    </Card.ImgOverlay>
                </Card>)
            } else {
                return(
                <Card bg="dark" onMouseLeave={() => this.setHovering(false)}>
                    <Card.Img src={details.image} alt="card-image"/>
                    <Card.ImgOverlay>
                        <Card.Text className='card-text'>{details.synopsis}</Card.Text>
                    </Card.ImgOverlay>
                </Card>)
            }
        } else {
            return(          
                <Card onMouseEnter={() => this.setHovering(true)}>
                    <img src={details.image} />
                </Card>             
            )
        }
    }
}
export default NetflixCard