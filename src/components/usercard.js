import React from 'react'
//we dont want here any state so we will make simple function component here and not class
const usercard = ({ user }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={user.avatar_url} />
                <h1>{user.name}</h1>
                <p>{user.company}</p>
                <p>{user.bio}</p>
            </div>
        </div>
    )
}

export default usercard