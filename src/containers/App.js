import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:users}));
  }

  change=(event)=>{
    this.setState({searchfield: event.target.value})
    
  }

  render(){
      const filtered=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
     if(this.state.robots.length===0){
      return <h1>LOADING</h1>
     } 
     else{
     return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.change}/>
          <Scroll>
            <Cardlist robots={filtered}/>
          </Scroll>
        </div>
      );   
      }
  }

}
export default App;