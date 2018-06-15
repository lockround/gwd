import React from 'react';

import Main from './Main';
import Header from './common/Header';


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}


export default App;