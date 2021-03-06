import React from 'react';

const Repocard = ({ repo }) =>
    <div className="card">
        <div className="card-body">
            <a href={repo.html_url} target="blank">

                <h4 >{repo.full_name}</h4>
                <p>
                    <strong>stars:</strong>{repo.stargazers_count}
                </p>
                <p>
                    <strong>watchers:</strong>{repo.watchers_count}
                </p>
            </a>
        </div>

    </div>
export default Repocard;