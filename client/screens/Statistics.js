// Assuming you are using a database like MongoDB with a profile collection

// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDoc, collection, query, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebaseConfig';

export default function Statistics() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRef = collection(database, 'profiles');
                const usersQuery = query(usersRef);
                const usersSnapshot = await getDocs(usersQuery);

                const usersData = [];
                usersSnapshot.forEach((doc) => {
                    usersData.push(doc.data());
                });

                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Statistics</Text>
            {users.map((user) => (
                <View key={user.user_id} style={styles.userContainer}>
                    <Text style={styles.username}>{user.username}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userContainer: {
        marginBottom: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: 'gray',
    },
});
