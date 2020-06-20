import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CardList from './Components/Card-List/CardList';

import SearchBox from './Components/SearchBox/SearchBox';


import AuthorInfo from './Components/AuthorInfo/AuthorInfo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      searchField: '',
      posts: [],
    }

  };
  componentDidMount() {
    fetch('http://localhost:3001/authors')
      .then(response => response.json())
      .then(author => this.setState({ authors: author }));

    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(post => this.setState({ posts: post }));

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }



  render() {
    const { searchField, authors } = this.state;
    const Filterauthors = authors.filter(author =>
      author.firstName.toLowerCase().includes(searchField.toLowerCase()));

    const AuthorId = ({ match }) => {
      return (
        <div>
          <AuthorInfo 
          author={this.state.authors.filter((author) => author.id === (match.params.authorid))[0]} 
          post = {this.state.posts.filter((post) => post.authorId === parseInt(match.params.authorid))}/>
        </div>)
    }

    return (
      <Router>
        <div className="App">

          <Switch>
            <Route path='/author' exact render={
              () => {
                return (
                  <div>
                    <h1> Authors List</h1>
                    <div className="Search">
                      <SearchBox placeholder='Search Authors'
                        handleChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <CardList authors={Filterauthors} />
                    </div>
                  </div>)
              }
            } />

            <Route path='/author/:authorid' exact component={AuthorId} />
            <Redirect to="/author" />

          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;