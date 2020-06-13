import React from 'react';

class Search extends React.Component {

    inputref = React.createRef()
    handleclick = () => {
        const value = this.inputref.current.value
        alert(`value inside input ref is  ${value}`)
    }
    //this is done for taking input value from page
    // state = {
    //     username: "",
    // }
    // usernamechange = e => {
    //     const value = e.target.value
    //     this.setState({ username: value })
    // }

    render() {
        // const { username } = this.state
        return (
            <div>
                {/* <input value={username} onChange={this.usernamechange} className="input" placeholder="Enter username" type="text" /> */}
                <input ref={this.inputref} className="input" placeholder="Enter username" type="text" />
                <button onClick={this.handleclick}>Submit</button>
            </div>
        )
    }
}

export default Search;