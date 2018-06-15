import React from 'react';
import { Container,Row,Col,Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddNewMonsoon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  
  render(){
    return(
      <Container>
      <Row>
      <Col>
    <Form>
        <FormGroup>
          <Label for="Z_CODE">Z_CODE</Label>
          <Input type="text" name="Z_CODE" id="Z_CODE" placeholder="Z_CODE" />
        </FormGroup>
        <FormGroup>
          <Label for="DIV_CODE">DIV_CODE</Label>
          <Input type="text" name="DIV_CODE" id="DIV_CODE" placeholder="DIV_CODE" />
        </FormGroup>
        <FormGroup>
          <Label for="DIST_CODE">DIST_CODE</Label>
          <Input type="text" name="DIST_CODE" id="DIST_CODE" placeholder="DIST_CODE" />
        </FormGroup>
        <FormGroup>
          <Label for="B_CODE">B_CODE</Label>
          <Input type="text" name="B_CODE" id="B_CODE" placeholder="B_CODE" />
        </FormGroup>
        <FormGroup>
          <Label for="H_C">H_C</Label>
          <Input type="text" name="H_C" id="H_C" placeholder="H_C" />
        </FormGroup>
        <FormGroup>
          <Label for="DISTRICT">DISTRICT</Label>
          <Input type="select" name="DISTRICT" id="DISTRICT"> 
            <option>1</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="BLOCK">BLOCK</Label>
          <Input type="select" name="BLOCK" id="BLOCK"> 
            <option>1</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="HYDROGRAPH STATION">HYDROGRAPH STATION</Label>
          <Input type="text" name="HYDROGRAPH STATION" id="HYDROGRAPH STATION" placeholder="HYDROGRAPH STATION" />
        </FormGroup>
        <FormGroup>
          <Label for="LONGITUDE">LONGITUDE</Label>
          <Input type="text" name="LONGITUDE" id="LONGITUDE" placeholder="LONGITUDE" />
        </FormGroup>
        <FormGroup>
          <Label for="LATITUDE">LATITUDE</Label>
          <Input type="text" name="LATITUDE" id="LATITUDE" placeholder="LATITUDE" />
        </FormGroup>
        <FormGroup>
          <Label for="Z_CODE">Z_CODE</Label>
          <Input type="text" name="Z_CODE" id="Z_CODE" placeholder="Z_CODE" />
        </FormGroup>
        <FormGroup>
          <Label for="X">X</Label>
          <Input type="text" name="X" id="X" placeholder="X" />
        </FormGroup>
        <FormGroup>
          <Label for="Y">Y</Label>
          <Input type="text" name="Y" id="Y" placeholder="Y" />
        </FormGroup>
        <FormGroup>
          <Label for="P_W">P_W</Label>
          <Input type="select" name="P_W" id="P_W"> 
            <option>P</option>
            <option>W</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="RL">RL</Label>
          <Input type="select" name="RL" id="RL"> 
            <option>R</option>
            <option>L</option>
          </Input>
        </FormGroup>
        <Button>Save</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    )
    
  }
}

export default AddNewMonsoon;