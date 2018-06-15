import React from 'react';
import axios from 'axios';
import uniq from 'lodash.uniq';
//Layout
import {Container,Row,Col} from 'reactstrap';

//import Header from './common/Header';
import ShowDistrictForm from './monsoon/ShowDistrictForm';
import ShowBlockForm from './monsoon/ShowBlockForm';
import DataComponent from './monsoon/DataComponent';

const mapIntoObjects = (arr) => {
    return Object.keys(arr).map(key => arr[key]).reduce((acc,item) => {
        acc[item._id] = item;
        return acc;
    },{});
}

const findObjBasedOnBlock = (block,arr) => {
    return arr.find(obj => obj['BLOCK'] === block)
}

const findDistrictsB = (w,arr) => {
    let a = 0;
    return arr.reduce((acc,item) => {
       acc[a++] = item[w];
       return acc;
    },[]).filter((el,pos,arra) => {
        return arra.indexOf(el) === pos
    })
}

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isDistrictSelected: false,
            isBlockSelected: false,
            district: null,
            block:null,
            data:[]
        }
        this.handleDChange = this.handleDChange.bind(this);
        this.handleBChange = this.handleBChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        axios('https://react-slingshot-lockround.c9users.io:8081/allahabad').then(resp => {
            this.setState({
                data: resp.data
            })
        }).catch(err => {
                throw(err);
        })
    }
    
    handleDChange(e) {
        this.setState({
            isDistrictSelected:true,
            district: e.target.value
        })
    }
    handleBChange(e) {
        this.setState({
            isBlockSelected:true,
            block: e.target.value
        })
    }
    
    render(){
        debugger;
        return(
            <div>
                {/*<Header />*/}
                <Container>
                    <Row>
                        <Col>
                            {this.state.isDistrictSelected ? 
                            <div>
                            <h2 className="display-5">{this.state.district}</h2>
                            <ShowBlockForm 
                            blocks={uniq(findDistrictsB('BLOCK',this.state.data))}
                            change={this.handleBChange}
                            /></div> :
                            <ShowDistrictForm 
                            change={this.handleDChange} 
                            district={uniq(findDistrictsB('DISTRICT',this.state.data))}
                            />
                            }
                        </Col>
                        <Col>
                        {this.state.isBlockSelected 
                        ? 
                        <DataComponent data={findObjBasedOnBlock(this.state.block,this.state.data)}/>
                        : 'Please Select District & Block'}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}











export default App;