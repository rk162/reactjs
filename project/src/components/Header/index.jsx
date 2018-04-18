import React from 'react';
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialIcon from 'react-google-material-icons';
import Sidenav from '../Sidenav/index.jsx';

$(document).ready(function () {

    // $('#sidebar').mCustomScrollbar({theme: 'minimal'}); when opening the sidebar
    $('#sidebarCollapse')
        .on('click', function () {
            // open sidebar
            $('#sidebar').addClass('active');
            // fade in the overlay
            $('.overlay').fadeIn();
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

    // if dismiss or overlay was clicked
    $('#dismiss, .overlay').on('click', function () {
        // hide the sidebar
        $('#sidebar').removeClass('active');
        // fade out the overlay
        $('.overlay').fadeOut();
    });
});

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {

        return ( < Sidenav style = {{visibilty:'display'}} > </Sidenav>);
    }

    render() {
        return (
            <div>
                <div className='d-flex header'>
                    <div className='p-2'>
                        <MaterialIcon icon='menu' size={36} onClick={this.handleClick}></MaterialIcon>
                    </div>
                    <div className='p-2 header-title'>HPCM
                    </div>
                    <div className='dropdown ml-auto d-none d-md-block p-2 pr-4'>
                        <div
                            className='dropdown-toggle'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='align-middle p-2'>Image</span>
                            <span className='align-middle p-2'>Name</span>
                        </div>
                        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                            <a className='dropdown-item' href='#'>Profile Info</a>
                            <a className='dropdown-item' href='#'>Logout</a>
                        </div>
                    </div>
                    {/* <button
                        type='button'
                        classNameNameNameNameName='btn btn-danger'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Tooltip on right'>
                        Tooltip on right
                    </button> */}
                </div>
                       
            </div>
        );
    }
}

// Button.propTypes = {     text: PropTypes.string.isRequired };
export default Header;