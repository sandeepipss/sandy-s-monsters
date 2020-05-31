import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [ ],
      searchField: ''
    };

    // this.handleChange= this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://dreamapisandpipss.herokuapp.com/Instadata`)
      .then(res => {
        const users = res.data;
        this.setState({ monsters: users});
      })


  }


  handleChange=(e)=> {
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.place.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
    
      <h1>Sandy's posts </h1>
      
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
      <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
}
export default App;


