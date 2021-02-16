import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const NetflixCard = ({details, setFavorite }) => {

    const [liked, setLiked] = useState(false)
    const [hovering, setHovering] = useState(false)
    
    useEffect(() => {
        setFavorite(details, liked)
    }, [liked])
        
    if(hovering){
        return (
            <Card bg="dark" onMouseLeave={() => setHovering(false)}>
                <Card.Img src={details.image} />
                <Card.ImgOverlay>
                    <Card.Text className='card-text'>{details.synopsis}</Card.Text>
                    {liked === true ? <Button onClick={() => setLiked(false)} variant="primary">Unlike</Button> : <Button onClick={() => setLiked(true)} variant="primary">Like</Button>}
                </Card.ImgOverlay>
            </Card>)
    } else {
        return(          
            <Card onMouseEnter={() => setHovering(true)}>
                <img src={details.image} />
            </Card>             
        )
    }
}
export default NetflixCard