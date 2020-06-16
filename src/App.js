import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
class App extends React.Component {
  state = {
    user: null
  }

  fetchuser = async (username) => {
    //fetch user from github
    // alert(`function fetchdata called successfully with username: ${username}`)
    try {
      //using rest api github
      const res = await fetch(`https://api.github.com/users/${username}`,)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
      }

    }
    catch (err) {
      console.log(err)
    }

  }

  render() {
    return <Search fetchdata={this.fetchuser} />
  }
}
export default App;
