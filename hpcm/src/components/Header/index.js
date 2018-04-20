import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialIcon from 'react-google-material-icons';
import './style.css';
import Sidenav from '../Sidenav/index.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import image from '../../assets/images/profile-icon.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            icon: true
        };
        this.toggleHidden = this
            .toggleHidden
            .bind(this);
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
            icon: !this.state.icon
        });
    }

    render() {
        return (
            <div>
                <div className='d-flex col-12 header'>
                    <div className='p-2'>
                        {this.state.icon
                            ? <div className='icon' onClick={this.toggleHidden}>
                                <MaterialIcon icon='menu' size={36}/>
                            </div>
                            : <div className='icon' onClick={this.toggleHidden}>
                                <MaterialIcon icon='close' size={36}/>
                            </div>
                        }
                    </div>
                    <div className='p-2 header-title'>HPCM
                    </div>
                    <div className='dropdown ml-auto d-none d-md-block p-2 pr-4'>
                        <div className='dropbtn'>
                            <span className='align-middle p-2'><img className='profile-img' src={image} alt='profile-icon' /></span>
                            <span className='align-middle p-2'>John Doe</span>
                            <div className="dropdown-content">
                                <a href="#">Profile Info</a>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {!this.state.isHidden && <Sidenav />}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Header;