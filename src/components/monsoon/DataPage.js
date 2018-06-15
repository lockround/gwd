import React from 'react';
import {connect} from 'react-redux';
import {Container,Row,Col} from 'reactstrap';

class DataPage extends React.Component {
    render(){
    return(<Container>
                    <Row>
                        <Col>
                            {console.log(this.props.data)}
                        </Col>
                    </Row>
        </Container>
    );
}
}
function mapStateToProps(state,ownProps) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(DataPage);