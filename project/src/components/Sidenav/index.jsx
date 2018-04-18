import React from 'react';
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidenav extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (

            <div id="mySidenav" className="sidenav" style={{width:'%'}}>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

        );
    }
}

export default Sidenav;