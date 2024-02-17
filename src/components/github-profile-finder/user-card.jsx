const UserCard = ({ user }) => {
    const { avatar_url, followers, following, login, name, public_repos, html_url, created_at} = user

    const createdDate = new Date(created_at);

    return (
        <div className="user">
          <div>
            <img src={avatar_url} className="avatar" alt="User" />
          </div>

          <div>
            <a href={html_url} target="_blank">{name || login}</a>
            <p>User joined on: {' '}
                {
                  `${createdDate.getDate()} 
                  ${createdDate.toLocaleString('en-us', {month: 'short'})}
                  ${createdDate.getFullYear()}`
                }
            </p>
          </div>

          <div>
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