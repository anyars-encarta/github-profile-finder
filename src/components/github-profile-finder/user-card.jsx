const UserCard = ({ user }) => {
    const { avatar_url, followers, following, login, name, bio, public_repos, html_url, created_at, location } = user

    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>

            <p><b>Bio: {' '}</b>{bio}</p>
            <p><b>Address: {' '}</b>{location}</p>
            <div className="name-container">
                <a href={html_url} target="_blank" rel="noreferrer">{name || login}</a>
                <p>User joined on: {' '}
                    {
                        `${createdDate.getDate()} 
                  ${createdDate.toLocaleString('en-us', { month: 'short' })}
                  ${createdDate.getFullYear()}`
                    }
                </p>
            </div>

            <div className="profile-info">
                <div>
                    <p>Public Repos:</p>
                    <p>{public_repos}</p>
                </div>

                <div>
                    <p>Followers:</p>
                    <p>{followers}</p>
                </div>

                <div>
                    <p>Following:</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
};

export default UserCard;