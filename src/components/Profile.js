import React from 'react'
import { useState } from 'react';
import './Profile.css'
import DisplayTable from './DisplayTable';

function Profile() {
    const [data, setData] = useState({});
    const [username, setUsername] = useState('');
    const [repositories, setRepositories] = useState([]);
    const onChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const searchHandler = async (e) => {
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        // console.log(repoJson);
        if(profileJson){
            setData(profileJson);
            setRepositories(repoJson);
        }
    }
  return (
    <div className='user-search'>
        <h1>GitHub</h1>
        <input type="text" placeholder="Search username here..." value={username} onChange={onChangeHandler}/>
        <button type="search" onClick={searchHandler}>Search</button>
        <DisplayTable data={data} repositories={repositories} />
    </div>
  )
}

export default Profile
