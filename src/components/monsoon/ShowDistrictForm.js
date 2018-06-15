import React from 'react';


//Form
import {Form, FormGroup,Label,Input,Badge} from 'reactstrap';

const ShowForm = (props) => {
    debugger;
    return(
        <Form>
            <FormGroup>
                <Label for="exampleSelect"><h1>Select <Badge color="secondary">District</Badge></h1></Label>
                <Input type="select" name="select" id="exampleSelect" onChange={props.change}>
                <option>--select--</option>
                {props.district.map(item => {
                    return <option key={item}>{item}</option>
                })}
                </Input>
            </FormGroup>
        </Form>
    )
}

export default ShowForm;