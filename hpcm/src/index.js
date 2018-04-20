
/**
* @author Amit Raushan <amiraush@publicis@groupe.net>
* @description APP - Component which import other components.
* @returns  - React elements which will appear on screen.
*/

import React, {Component} from 'react';
import { render } from 'react-dom';
import Header from './components/Header/index.js';
import './styles/global.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
render (
    <div>
        <App/>
    </div>, 
    document.getElementById('reactContainer')
);
