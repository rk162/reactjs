import React, {Component} from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
// import logo from './logo.svg';
import './Note.css';
// const welcome="Welcome  React";
class Note extends Component {
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

componentWillMount(){
  this.style={
    right: this.randomBetween(0,window.innerWidth-150,'px'),
    top: this.randomBetween(0,window.innerHeight-150,'px'),
    transform: `rotate(${this.randomBetween(-25,25,'deg')})`
  }
}

save(e){
  e.preventDefault()
  this.props.onChange(this.newText.value, this.props.index)
  this.setState({
    editing: false
  })
}

randomBetween(x,y,s){
  return  x + Math.ceil( Math.random() * (y-x)) + s
}

componentDidUpdate(){
  var textArea
  if(this.state.editing){
    textArea=this.newText
    textArea.focus()
    textArea.select()
  }
}

shouldComponentUpdate(nextProps, nextState){
  return (
    this.props.children!==nextProps.children||this.state!==nextState
  )
}

edit(){
  this.setState({
    editing:true
  })
} 
remove(){
  this.props.onRemove(this.props.index)
} 
renderForm(){
  return(
    <div className="note" style={this.style}>
    <form onSubmit={this.save}>
      <textarea ref={input =>this.newText= input} defaultValue={this.props.children} />
       <button><FaFloppyO /> </button>
    </form>
    </div>
  )
}
renderDisplay() {
    return (
  <div className="note" style={this.style}>
  <p>{this.props.children}</p>
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

export default Note;