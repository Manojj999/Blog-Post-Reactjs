import React, { Component } from 'react';
import './App.css';
import CardList from './Components/Card-List/CardList';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      searchField: ''
    }
    
  };
  componentDidMount() {
    fetch('http://localhost:3002/authors')
      .then(response => response.json())
      .then(author => this.setState({ authors: author }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {searchField , authors} = this.state;
    const Filterauthors = authors.filter(author => 
      author.firstName.toLowerCase().includes(searchField.toLowerCase()))
   
    return (
      <div className="App">
        <h1> Authors List</h1>
        
        <SearchBox placeholder='Search Authors'
        handleChange = {this.handleChange}
        />
        
        <CardList authors={Filterauthors} />
      </div>
    );
  }
}

export default App;