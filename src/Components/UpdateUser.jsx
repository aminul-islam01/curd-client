import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const loadedUser = useLoaderData();

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email };

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    alert('user update successfully')
                }
                console.log(data)
            })
    }
    
    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <h2>Name: {loadedUser?.name}</h2>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name} required /><br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} required /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;