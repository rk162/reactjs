
/**
* @author Amit Raushan <amiraush@publicis@groupe.net>
* @description APP - Component which import other components.
* @returns  - React elements which will appear on screen.
*/

import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/index.jsx';
import 'popper.js';
import 'bootstrap';
import './styles/global.css';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
class App extends React.Component {
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

