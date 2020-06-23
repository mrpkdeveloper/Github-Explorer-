import React from 'react'
//we dont want here any state so we will make simple function component here and not class
const usercard = ({ user }) => {
    return (
        <div className="container mx-10 my-3">
            <div className="card" >
                <img className="card-img-top" src={user.avatar_url} />
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.company}</p>
                    <p className="card-text">{user.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default usercard