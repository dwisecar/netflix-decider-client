import React from 'react'

const NetflixCard = ({details}) => {
    
    return(
        <div>
            <h4>{details.title}</h4>
            <img src={details.image}/>
        </div>
    )
}
export default NetflixCard