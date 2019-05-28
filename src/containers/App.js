import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount= async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await data.json();
    this.setState({ robots: json });
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ?
      <h1 className='tc'>Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
