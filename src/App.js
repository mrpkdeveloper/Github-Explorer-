import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Usercard from './components/Usercard';


class App extends React.Component {
  state = {
    user: null,
    repos: [],
    userDataError: null,
    loading: false

  }

  fetchUSerData = async (username) => {
    // using rest api github
    //fetch user from github
    // alert(`function fetchdata called successfully with username: ${username}`)
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (res.ok) {
      const data = await res.json()
      // console.log(data)
      return { data }
    }

    const error = (await res.json()).message
    return { error }
  }


  fetchrepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos?page=1`)
    if (res.ok) {
      const data = await res.json()
      // console.log(data)
      return { data }
    }
    const error = (await res.json()).message
    return { error }
  }


  fetchData = async (username) => {

    this.setState({ loading: true }, async () => {
      try {

        const [user, repos] = await Promise.all([
          this.fetchUSerData(username),
          this.fetchrepos(username),
        ])

        if (user.data !== undefined && repos.data !== undefined) {
          return this.setState({ user: user.data, repos: repos.data, loading: false })
        }

        this.setState({
          userDataError: user.error,
          reposerror: repos.error,
          loading: false
        })

      } catch (err) {
        this.setState({
          error: "there was some error",
          loading: false
        })
      }

    })


  }

  render() {

    const { userDataError, reposerror, loading, user } = this.state

    return (
      <div>
        <Search fetchdata={this.fetchData} />
        {/* if error found then only  display para */}
        {loading && (<p>loading....</p>)}
        {userDataError && <p className="text-danger">{userDataError}</p>}

        {/* when there is no loading no error and user is present then render usercard component */}
        {!loading && !userDataError && user && <Usercard user={user} />}
        {reposerror && <p className="text-danger">{reposerror}</p>}
      </div>
    )
  }
}
export default App;
