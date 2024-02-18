import { useState, useEffect } from "react";
import UserCard from "./user-card";
import './styles.css';

const GitHubProfileFinder = () => {
    const [userName, setUserName] = useState('anyars-encarta');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchGitHubUserData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json();

            if (data) {
                setUserData(data);
                setLoading(false);
                setUserName('');
            }

        } catch (e) {
          setErrorMessage(e.message)
          setLoading(false);
        }
    };

    const handleSubmit = () => {
        fetchGitHubUserData();
    };

    useEffect(() => {
        fetchGitHubUserData();
        //eslint-disable-next-line
    }, []);


    if (loading) {
        return <h1>Loading data. Please wait...</h1>
    };

    if (errorMessage !== null) {
        return (
        <div>
          <h1>There was an error: {errorMessage}</h1>
        </div>
        )
    };

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search GitHub Username..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                userData !== null ? <UserCard user={userData} /> : null
            }
        </div>
    )
};

export default GitHubProfileFinder;