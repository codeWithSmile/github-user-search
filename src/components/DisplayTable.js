import React from 'react'
import './DisplayTable.css'
function DisplayTable({data, repositories}) {
  return (
    <div>
      <table className='git-table'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Bio</th>
            <th>Repositories</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.bio}</td>
                <td>{repositories.map(repos => (
                    <div key={repos.name }>
                        <a href={repos.html_url} target="_blank">{repos.name}</a>
                    </div>
                ))}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTable
