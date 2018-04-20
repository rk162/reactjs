import React, {Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/images/app-logo.png';

class Sidenav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div
                id='mySidenav' className='sidenav'>
                <img className='app-logo' src={image}></img>
                <a href='#'>Panel Management</a>
                <a href='#' className='btn btn-link disabled'>Calender Setup</a>
                <a href='#' className='btn btn-link disabled'>Hiring Tool</a>
                <a href='#' className='btn btn-link disabled'>Reporting</a>
                <div className='d-flex align-items-start flex-column bottom-links'>
                    <a href='#' className='d-sm-block d-md-none mt-auto'>Profile Info</a>
                    <a href='#' className='d-block'>About Us</a>
                    <a href='#' className='d-block'>Help</a>
                    <a href='#' className='d-sm-block d-md-none'>Logout</a>
                </div>
            </div>
        );
    }
}

export default Sidenav;