import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Usercard from './components/Usercard';


class App extends React.Component {
  state = {
    user: null,
    error: null,
    loading: false

  }

  fetchuser = async (username) => {

    this.setState({ loading: true }, async () => {

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
            user: data,
            loading: false
          })
        }
        // else {
        const error = (await res.json()).message
        this.setState({
          error,
          loading: false
        })
        // }

      }
      catch (err) {
        this.setState({
          error: "there was some error",
          loading: false
        })
        // console.log(err)
      }

    })


  }

  render() {

    const { error, loading, user } = this.state

    return (
      <div>
        <Search fetchdata={this.fetchuser} />
        {/* if error found then only  display para */}
        {loading && (<p>loading....</p>)}
        {error && <p className="text-danger">{error}</p>}

        {/* when there is no loading no error and user is present then render usercard component */}
        {!loading && !error && user && <Usercard user={user} />}
      </div>
    )
  }
}
export default App;
