import React, { Component } from 'react';
import './App.css';

function formatName(user){
  return user.firstname+' '+user.lastname;
}

function getGreeting(user){
  if(user){
    return <h2>Hello, {formatName(user)}!</h2>
  }
  return <h2>Hello, Stranger!</h2>
}



const list=[
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0, 
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true,
      date: new Date()};

    this.handleClock= this.handleClock.bind(this)
    this.handleClick= this.handleClick.bind(this)
    this.handleChange= this.handleChange.bind(this)
    //this.tick= this.tick.bind(this)
  }
  componentDidMount(){
    this.timer= setInterval(
      ()=>this.tick(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  tick(){
    this.setState({
      date: new Date()
    });
  }

  handleClick(){ 
    clearInterval(this.timer);
    console.log('Stopped')
  }

  handleChange(){
    this.componentDidMount();
  }

  handleClock(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClock}>
        {this.state.isToggleOn ? this.handleClick() : this.handleChange()}start/stop
      </button>
      <div> 
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
   const numbers=[1,2,3,4,5];
   const listItems= numbers.map((number,key)=>
     <li key={key}>{number*2}</li>
    );
    const helloworld='Welcome to the road of learning.';
    const user={
      firstname:"Mark",
      lastname:"Head"
    };
    const element= <div tabIndex="0">
       <p>Hello!</p>
    <p>Good to see you here.</p>
    </div>;
    const {tabIndex} =element.props
    const array=[];

    return (
      <div className="App">
      <h2>{helloworld}</h2>
      <p>Welcome {formatName(user)}!</p>
      <br/>
      {getGreeting(user)}
      <LoginControl />
      <Toggle />
      {array.push('one','two')}
      <p>{array}</p>
      <p>{tabIndex}</p> 
      <div>{element}</div>

      {list.map((item)=>
     
        <div key={item.objectID}>
           <span>
             <a href={item.url}>{item.title}</a>
           </span>
           <span>{` `+item.author+` `}</span>
           <span>{item.num_comments+` `}</span>
           <span>{item.points}</span>
           </div>
     
      )}
      <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
