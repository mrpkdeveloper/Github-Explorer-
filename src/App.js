import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Usercard from './components/Usercard';
import Repocard from './components/Repocard';


class App extends React.Component {
  state = {
    user: null,
    repos: [],
    userDataError: null,
    loading: false,
    page: 1

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
    const { page } = this.state
    const res = await fetch(`https://api.github.com/users/${username}/repos?page=${page}`)
    if (res.ok) {
      const data = await res.json()
      // console.log(data)
      return { data, page: page + 1 }
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
          return this.setState({ user: user.data, repos: repos.data, page: repos.page, loading: false })
        }

        this.setState({
          userDataError: user.error,
          reposerror: repos.error,
          loading: false,
        })

      } catch (err) {
        this.setState({
          error: "there was some error",
          loading: false
        })
      }

    })


  }

  loadmore = async () => {
    const { page, data } = await this.fetchrepos(this.state.user.login)
    if (data)
      this.setState((state) => ({
        repos: [...state.repos, ...data],
        page
      }))
  }

  render() {

    const { userDataError, reposerror, loading, user, repos } = this.state

    return (
      <div className="container">
        <Search fetchdata={this.fetchData} />
        {/* if error found then only  display para */}
        {loading && (<p>loading....</p>)}
        {userDataError && <p className="text-danger">{userDataError}</p>}

        {/* when there is no loading no error and user is present then render usercard component */}
        {!loading && !userDataError && user && <Usercard user={user} />}
        {reposerror && <p className="text-danger">{reposerror}</p>}

        {!loading && !reposerror && repos.map((repo) => <Repocard key={repo.id} repo={repo} />)}
        <button className="btn btn-success" onClick={this.loadmore}>Load More</button>
      </div>
    )
  }
}
export default App;
