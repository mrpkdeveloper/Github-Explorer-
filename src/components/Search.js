import React from 'react';

class Search extends React.Component {

    //input using ref 
    // inputref = React.createRef()
    // handleclick = () => {
    //     const value = this.inputref.current.value
    //     alert(`value inside input ref is  ${value}`)
    // }

    //this is done for taking input value from page
    //this methdo is used when we want two way maping
    state = {
        username: "",
    }
    usernamechange = e => {
        const value = e.target.value
        this.setState({ username: value })
    }

    render() {
        const { username } = this.state
        const { fetchdata } = this.props

        return (
            <div>
                {/* using ref */}
                {/* <input ref={this.inputref} className="input" placeholder="Enter username" type="text" /> */}
                <input value={username} onChange={this.usernamechange} className="input" placeholder="Enter username" type="text" />
                <button onClick={() => { fetchdata(username) }}>Submit</button>
            </div>
        )
    }
}

export default Search;