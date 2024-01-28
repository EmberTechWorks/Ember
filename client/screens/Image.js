import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert,Platform,Button } from 'react-native';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { auth, database, storage } from '../firebaseConfig';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const navigation = useNavigation(); // Initialize the useNavigation hook

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
    const uploadImage = async () => {
        setUploading(true);
        try {

            const uri= await FileSystem.getInfoAsync(image);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    resolve(xhr.response);
                };
                xhr.onerror = function(e) {
                    console.log(e);
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = "blob";
                xhr.open("GET", uri, true);
                xhr.send(null);
            });
            const fileName = image.substring(image.lastIndexOf('/') + 1);
            const ref = storage.ref().child(fileName);
            const snapshot = await ref.put(blob);
            setUploading(false);
            Alert.alert("Success");
            setImage(null);
            blob.close();
        }
        catch(err){
            console.log(err);
            setUploading(false);
        }
    }


      return (
        <View style={styles.container}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{marginTop:20, width: 100, height: 50,marginBottom:20 }} />}
            <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                <Text style={styles.uploadText}>
                    Upload Image
                </Text>
            </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadButton:{
        marginTop: 100,
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    uploadText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
