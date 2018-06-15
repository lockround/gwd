import React from 'react';
import { Table } from 'reactstrap';

const DataComponent = (props) => {
    debugger;
    return(
        <Table>
            <thead>
          <tr>
            <th>#</th>
            <th>District</th>
            <th>Block</th>
            <th>LATITUDE</th>
            <th>LONGITUDE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
         <th scope="row">{props.data.H_C}</th>
            <td>{props.data.DISTRICT}</td>
            <td>{props.data.BLOCK}</td>
            <td>{props.data.LATITUDE}</td>
            <td>{props.data.LONGITUDE}</td>
          </tr>
          
        </tbody>
        </Table>
    )
}

export default DataComponent;