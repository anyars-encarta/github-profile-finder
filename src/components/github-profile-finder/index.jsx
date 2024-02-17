import { useState, useEffect } from "react";
import UserCard from "./user-card";

const GitHubProfileFinder = () => {
    const [userName, setUserName] = useState('anyars-encarta');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGitHubUserData = async () => {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`)
      const data = await response.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName('');
      }
    };

    const handleSubmit = () => {
        fetchGitHubUserData();
    };

    useEffect(() => {
      fetchGitHubUserData();
    }, []);


    if (loading) {
       return <h1>Loading data. Please wait...</h1>
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