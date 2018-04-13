import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      userid:'',
      username: '',
      password: '',
      checkbox: true,
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
  event.preventDefault();
  const loginRef = firebase.database().ref('login');
  loginRef.once('value',(snapshot)=>{
    let loginArray = Object.keys(snapshot.val());
    
    let newLogin = {
      userid: loginArray.length+1,
      username: this.state.username,
      password: this.state.password
    }
   loginRef.push(newLogin);
   console.log(`user added with username: ${this.state.username} and password: ${this.state.password}`);
    this.setState({
      username: '',
      password: ''
    });
   
  })
  alert('Logged in with username: '+this.state.username+' and password: '+this.state.password);
  
  if(!this.canBeSubmitted){
   
  return;
  }
}
handleLink(event){
  alert('Forwarding to Forgot Password page...');
  event.preventDefault();
}

componentDidMount(){
  const rootRef= firebase.database().ref('login');
  const userRef= rootRef.child('0');
  console.log(userRef)
  userRef.on('value',(snapshot)=>{
    this.setState({
      username: snapshot.val().username,
      password:snapshot.val().password
    });
    console.log(this.state.username);
    console.log(this.state.password);
  });
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
      <input type= "submit" disabled={!isEnabled} value="Login" />
    </form>
  )
}
}

class App extends Component {
  render() {
  
    const helloworld='Welcome to the road of learning.';
    return (
      <div className="App">
      <h2>{helloworld}</h2>
      <p>Hello!</p>
    <p>Good to see you here.</p>
      <Form />
      </div>
     );
    }
}

export default App;
