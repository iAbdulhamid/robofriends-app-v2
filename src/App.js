import React, {Component} from 'react';
import './App.css';

import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: '',
    };
    // we don't need this bind code anymore, scince we can use ES6 arrow function:
    // handleChange = (e) => {}
    // this.handleChange = this.handleChange.bind(this);
  }

  // When React but our component on the page ...
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // converting the incoming response to json object.
        .then(users => this.setState({robots: users}))
          .catch(err => console.log({error: err}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        
        <h1>ROBOFRIENDS</h1>
        <SearchBox placeholder='search robots...' 
                   handleChange={e => this.handleChange(e)}/>
        <CardList robots= {filteredRobots} />
        
      </div>
    );
  }
} 

export default App;
