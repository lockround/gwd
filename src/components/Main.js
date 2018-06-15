import React from 'react';
import {Container} from 'reactstrap';
import {Route,Switch} from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import AddNewMonsoon from './monsoon/AddNewMonsoon';

const Main = () => {
    return (
    <Container>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/add_monsoon" component={AddNewMonsoon}/>
    </Switch>    
    </Container>
    )
}

export default Main;