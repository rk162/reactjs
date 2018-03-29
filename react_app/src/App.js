import React, {Component} from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
// import logo from './logo.svg';
import './App.css';
// const welcome="Welcome  React";
class App extends Component {
constructor(props){
  super(props)
this.state={
  editing:false
}

  this.save= this.save.bind(this)
  this.edit= this.edit.bind(this)
  this.remove=this.remove.bind(this)
  this.renderForm=this.renderForm.bind(this)
  this.renderDisplay=this.renderDisplay.bind(this)
}
save(){
  alert('saved')
}

  edit(){
  this.setState({
    editing:true
  })
} 
remove(){
  alert('removing note')
} 
renderForm(){
  return(
    <div className="note">
    <form>
      <textarea />
       <button onClick={this.save}><FaFloppyO /> </button>
    </form>
    </div>
  )
}
renderDisplay() {
    return (
  <div className="note">
  <p>Learn React</p>
  <span>
  <button onClick={this.edit} id='edit'><FaPencil /></button>
  <button onClick={this.remove} id='remove'><FaTrash /></button>
  </span>
  </div>

//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <Welcome
//             firstname="React"
//             version={16}
//             text="Using Props"
//             title="props"
//             toggle={this.state.toggle}/>
//         </header>
//         <p className="App-intro">
//           To get started, edit
//           <code>src/App.js</code>
//           and save to reload.
//         </p>
//           <p>{this.state.toggle && 'This should show and hide'}</p>
//         <button onClick={this.toggle}>Show / Hide</button>
//       </div>
  );
 }

render() {
 return this.state.editing?this.renderForm():this.renderDisplay()
}
}

// class Welcome extends Component {   render() {     const {text, title} =
// this.props;     return (       <div>         <h1
// className="App-title">{text}</h1>         <h1
// className="App-title">{title}</h1>       </div>     );   } }

// const Welcome = ({firstname,version}) => (
//   <h1>
//     Welcome to {firstname} Version {version}
//   </h1>
// )

export default App;