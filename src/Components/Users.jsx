import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers); 

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                const remaining = users.filter(user => user._id !== id);
                setUser(remaining);
                alert('delete successfully');
            }
        })
    }
   
    return (
        <div>
           <p>{users.length}</p>
           {
            users.map(user =>
                <p key={user._id}>{user.name} {user.email}
                <Link to={`/users/${user._id}`}>
                <button>update</button>
                </Link>
                <button onClick={() => handleDeleteUser(user._id)}>X</button>
                </p>
            )
           }
        </div>
    );
};

export default Users;