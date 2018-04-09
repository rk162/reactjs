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

class LoginControl extends Component {
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
        {this.state.isToggleOn ? (this.handleClick()) : (this.handleChange())}start/stop
      </button>
      <div> 
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      </div>
    );
  }
}

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      checkbox: true,
      option: 'coconut'
    }
  this.handleChange=this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleLink=this.handleLink.bind(this);
}
canBeSubmitted(){
  const {username,password}= this.state;
 return (
   username.length>0 && password.length>0
 )
}
handleChange(event){
  const target=event.target;
  const value= target.type==='text'?target.value.toUpperCase():(target.type==='checkbox'?target.checked:target.value);
  const name= target.name;
  this.setState({
   [name]:value
  });
}
handleSubmit(event){
  alert('Logged in with username: '+this.state.username+' and password: '+this.state.password);
  console.log('A name was submitted '+this.input.value);
  console.log('You selected '+this.state.option);
  event.preventDefault();
  if(!this.canBeSubmitted){
  return;
  }
}
handleLink(event){
  alert('Forwarding to Forgot Password page...');
  event.preventDefault();
}
render(){
  const isEnabled= this.canBeSubmitted();
  return(
    <form onSubmit={this.handleSubmit}>
    <div>
      <label>Enter your Username:
      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
      </label>
      </div>
     <div>
      <label>Enter your Password:
      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
      </label>
      </div>
      <div>
      <label>Remember Me
      <input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.handleChange} />
      </label>
      <span>     
        <a href='' onClick={this.handleLink}>Forgot Password</a>
      </span>
      </div>
      <div>
        <label>Uncontrolled Input
        <input type="text" ref={(input)=> this.input=input} />
        </label>
        <span>
        <label>
          Pick your favorite chocolate flavor:
          <select name="option" value={this.state.option} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        </span>
      </div>
      <input type= "submit" disabled={!isEnabled} value="Login" />
    </form>
  )
}
}

function BoilingVerdict(props){
  if(props.celsius>=100){
     return <p>The water will boil.</p>;
  }
  return <p>The water will not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
   // this.setState({temperature: e.target.value});
   this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature= this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit){
  return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
  return (celsius*9/5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends Component{
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render(){
    const scale=this.state.scale;
    const temperature=this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <div>
       <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
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
      <Form />
      <Calculator />
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
