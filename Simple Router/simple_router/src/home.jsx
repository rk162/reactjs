import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
      constructor(){
       super()
       this.state={
           username:'',
           bio: '',
           avatar: '',
           blog: '',
       }
       this.handleClick= this.handleClick.bind(this);
      }

      handleClick(){
         axios.get('https://api.github.com/users/maecapozzi')
         .then(response=>{
             console.log(response);
         this.setState({
            username: response.data.name,
            bio: response.data.bio,
            avatar: (response.data.avatar_url),
            blog: response.data.blog,
        })})
      }

 render(){
    return (
        <main>
           <h1>Home</h1>
           <div className='button__container'>
           <button className='button' onClick= {this.handleClick}>Click Me</button>
           <p>Username: {this.state.username}</p>
           <p>Designation:{this.state.bio}</p>
           <p>Image:<img alt=  {this.state.username} src={this.state.avatar}/></p>
           <p>Blog: <a href= {`https://${this.state.blog}`}>{this.state.blog}</a></p>
         </div>
         </main>
        )
 }
}

export default Home