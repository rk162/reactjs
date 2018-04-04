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
