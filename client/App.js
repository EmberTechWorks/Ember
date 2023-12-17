import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <TouchableOpacity className="bg-cyan-500 p-3 rounded-lg shadow-md shadow-gray-400">
        <Text className="text-white text-3xl font-bold ">Ember</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}
