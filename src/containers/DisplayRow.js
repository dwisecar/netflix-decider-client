import React from 'react';
import NetflixCard from '../components/NetflixCard';
import {Col} from 'react-bootstrap';


class DisplayRow extends React.Component {
    
    render(){
        return(

            <div className='display-row'>             
                {this.props.contents.map(details => (
                <Col>
                    <NetflixCard details={details}/>
                </Col>))}
            </div>
        )
    }
}
export default DisplayRow
