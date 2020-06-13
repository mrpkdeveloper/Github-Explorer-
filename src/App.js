import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
class App extends React.Component {
  state = {
    user: null
  }

  fetchuser = (username) => {
    //fetch user from github
    alert(`function fetchdata called successfully with username: ${username}`)
  }

  render() {
    return <Search fetchdata={this.fetchuser} />
  }
}
export default App;
