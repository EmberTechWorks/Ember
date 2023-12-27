import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to the chat server
        const newSocket = io('YOUR_CHAT_SERVER_URL');
        setSocket(newSocket);

        // Clean up the socket connection on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            // Emit the message event to the server
            socket.emit('message', inputText);

            // Clear the input text
            setInputText('');
        }
    };

    useEffect(() => {
        // Listen for incoming messages from the server
        if (socket) {
            socket.on('message', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket]);

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type your message"
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    chatContainer: {
        flex: 1,
        backgroundColor: '#f5f8fa',
        padding: 10,
    },
    chatMessage: {
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    chatInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    chatInput: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
export default Chat;

