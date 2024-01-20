import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={require("../assets/ember.jpeg")}
        style={{ width: 150, height: 150, borderRadius: 50, marginBottom: 20 }}
      />
      <TouchableOpacity>
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          ember
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginTop: 20,
          borderRadius: 10,
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }}
        onPress={handleLoginPress}
      >
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        {/* <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={{
                  backgroundColor: '#f57c00',
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 20,
                  marginBottom: 50,
                  shadowColor: '#f57c00',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: .9,
                shadowRadius: 8,
              }}
            >
                <Entypo name="chat" size={24} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
