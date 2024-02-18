import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  const {
    // eslint-disable-next-line
    avatar_url, followers, following,
    // eslint-disable-next-line
    login, name, bio, public_repos,
    // eslint-disable-next-line
    html_url, created_at, location,
  } = user;

  const createdDate = new Date(created_at);
  // eslint-disable-next-line
  const userAvatar = avatar_url;
  // eslint-disable-next-line
  const userUrl = html_url;
  // eslint-disable-next-line
  const publicRepos = public_repos;

  return (
    <div className="user">
      <div>
        <img src={userAvatar} className="avatar" alt="User" />
      </div>

      <p>
        <b>
          Bio:
          {' '}
        </b>
        {bio}
      </p>
      <p>
        <b>
          Address:
          {' '}
        </b>
        {location}
      </p>
      <div className="name-container">
        <a href={userUrl} target="_blank" rel="noreferrer">{name || login}</a>
        <p>
          User joined on:
          {' '}
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
          <p>{publicRepos}</p>
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
  );
};

UserCard.propTypes = {
  user: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default UserCard;
