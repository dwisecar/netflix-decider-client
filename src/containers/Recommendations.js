import React from 'react';
import {Container, Row} from 'react-bootstrap';
import DisplayRow from './DisplayRow';

class Recommendations extends React.Component {
    
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <div className='recommendations-row'>
                            <h3>RECOMMENDATIONS</h3>
                            <DisplayRow contents={this.props.contents} />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Recommendations