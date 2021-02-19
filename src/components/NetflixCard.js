import React from 'react'
import { Card, Button } from 'react-bootstrap'

const NetflixCard = ({setFavorite, details, user, isFavorite}) => {
    
    const setLiked = val => {
        setFavorite(details, val)
    }

    if(user !== false){
        return (
            <Card className='netflix-card'>
                <Card.Img src={details.image} alt="card-image" className="card-image"/>
                <Card.ImgOverlay >
                    <Card.Title className='card-title'>{details.title}</Card.Title>
                    <Card.Text className='card-text'>{details.synopsis}<br></br><br></br>-{details.year}-</Card.Text>
                    {isFavorite === true ? 
                        <Button className='card-button' onClick={() => setLiked(false)} variant="danger" block>Unlike</Button> : 
                        <Button className='card-button' onClick={() => setLiked(true)} variant="danger" block>Like</Button>}
                </Card.ImgOverlay>
            </Card>)
    } else {
        return (
            <Card className='netflix-card'>
                <Card.Img src={details.image} alt="card-image" className="card-image"/>
                <Card.ImgOverlay >
                    <Card.Title className='card-title'>{details.title}</Card.Title>
                    <Card.Text className='card-text'>{details.synopsis}<br></br><br></br>-{details.year}-</Card.Text>
                </Card.ImgOverlay>
            </Card>)
    }        
}
export default NetflixCard