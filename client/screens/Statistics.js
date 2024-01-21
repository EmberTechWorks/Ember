// Import the Firebase Authentication module
import listUsers from "firebase/auth";
import React, { useEffect, useState } from "react";
// Get the Firebase Authentication instance
import { auth } from "../firebaseConfig";

const Statistics = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    // Function to fetch the list of users
    const fetchUsers = async () => {
        try {
            // Get the list of users from the Firebase Authentication module
            const userList = await auth.listUsers();
            console.log("User List:", userList);

            // Extract the names from the user objects
            const userNames = userList.map((user) => user.displayName);
            console.log("User Names:", userNames);

            // Update the users state with the fetched names
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    console.log("Users:", users);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.uid}>{user.uid}</li>
                ))}
            </ul>
        </div>
    );
};

export default Statistics;
