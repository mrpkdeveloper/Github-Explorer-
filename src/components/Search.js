import React from 'react';

class Search extends React.Component {
    state = {
        username: "",
    }
    usernamechange = e => {
        const value = e.target.value
        this.setState({ username: value })
    }
    render() {
        const { username } = this.state
        return (
            <div>
                <input value={username} onChange={this.usernamechange} className="input" placeholder="Enter username" type="text" />
                <button>Submit</button>
            </div>
        )
    }
}

export default Search;