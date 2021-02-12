import React from 'react'
import { Card, Button } from 'react-bootstrap'

class NetflixCard extends React.Component{
    state = {
        hoverOver: false,
        liked: false
    }

    handleLike = value => {
        this.setState({liked:value})
        this.props.setFavorite(this.props.details, value)
    }
    
    hovering = bool => {
        this.setState({
            hoverOver: bool
        })
    }

    render(){
        let { details } = this.props
        if(this.state.hoverOver){
            return (
            <div onMouseLeave={() => this.hovering(false)}>
                <Card style={{ width: '18rem'  }} className='big-card'>
                    <Card.Img variant="top" src={details.image} />
                    <Card.Body>
                        <Card.Title>{details.title}</Card.Title>
                        <Card.Text>{details.synopsis}</Card.Text>
                        {this.state.liked === true ? <Button onClick={() => this.handleLike(false)} variant="primary">Unlike</Button> : <Button onClick={() => this.handleLike(true)} variant="primary">Like</Button>}
                    </Card.Body>
                </Card>
            </div>)
        } else {
            return(          
                <div onMouseEnter={() => this.hovering(true)}>
                    <Card >
                        <img src={this.props.details.image}/>
                    </Card>
                </div>
                
            )
        }
    }
}
export default NetflixCard