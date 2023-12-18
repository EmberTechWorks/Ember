import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      
      <Image
        source={require("./assets/ember.jpeg")}
        style={{ width: 150, height: 150, borderRadius: 50, marginBottom: 20 }}
      />
      <TouchableOpacity className="rounded-lg">
        <Text className="text-black text-5xl font-bold">ember</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-blue-500 p-2 mt-3 rounded-lg shadow-md shadow-gray-400">
        <Text className="text-white text-2xl font-bold">Login</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </View>
  );
}
