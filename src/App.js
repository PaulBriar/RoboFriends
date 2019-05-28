import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
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
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if(this.state.robots.length === 0) {
      return <h1 className='tc'>Loading</h1>
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
