import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Header from './Components/Common/Header/Header.js';
import HomePage from './Components/HomePage/HomePage.js';
import ListPage from './Components/ListPage/ListPage.js';
import DetailsPage from './Components/DetailsPage/DetailsPage.js';
import CreatePage from './Components/UpdatePage/CreatePage.js';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={HomePage} 
                        />
                        <Route 
                            path="/messier_catalog" 
                            exact
                            component={ListPage} 
                        />
                        <Route 
                            path="/messier_catalog/create" 
                            exact
                            component={CreatePage} 
                        />
                        <Route 
                            path="/messier_catalog/:messier_id" 
                            exact
                            component={DetailsPage} 
                        />
                    </Switch>
                    <footer>
                        contact info goes here. 
                    </footer>
                </Router>
            </div>
        );
    }
}
