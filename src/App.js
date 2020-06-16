import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
class App extends React.Component {
  state = {
    user: null,
    error: null

  }

  fetchuser = async (username) => {
    //fetch user from github
    // alert(`function fetchdata called successfully with username: ${username}`)
    try {
      // using rest api github
      const res = await fetch(`https://api.github.com/users/${username}`,)
      if (res.ok) {
        const data = await res.json()
        console.log(data)

        //this will update internal state (basically saves the user data)
        return this.setState({
          user: data
        })
      }
      // else {
      const error = (await res.json()).message
      this.setState({
        error
      })
      // }

    }
    catch (err) {
      this.setState({
        error: "there was some error"
      })
      // console.log(err)
    }

  }

  render() {

    const { error } = this.state

    return (
      <div>
        <Search fetchdata={this.fetchuser} />
        {/* if error found then only  display para */}
        {error && <p className="text-danger">{error}</p>}
      </div>
    )
  }
}
export default App;
