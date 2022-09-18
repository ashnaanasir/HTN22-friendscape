import { StyleSheet, Button, View } from "react-native";
import { useState } from "react";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendFinderScreen from "./src/pages/FriendFinderScreen";
import FriendChatScreen from "./src/pages/FriendChatScreen";
import ExplorePage from "./src/pages/ExplorePage";
import MapPage from "./src/pages/MapPage";
import FriendManager from "./src/friend-manager/friend-manager";
// import CameraScreen from "./src/pages/CameraScreen";

export default function App() {
  const [region, setRegion] = useState({
    latitude: 43.4729,
    longitude: -80.5396,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const context = {
    friends: new FriendManager()
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialParams={context} />
        <Stack.Screen name="FriendFinderScreen" component={FriendFinderScreen} />
        <Stack.Screen name="FriendChatScreen" component={FriendChatScreen} />
        <Stack.Screen name="ExplorePageScreen" component={ExplorePage} initialParams={context} />
        <Stack.Screen name="MapPageScreen" component={MapPage} initialParams={context} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    color: "red",
    backgroundColor: "#eee",
  },
});
