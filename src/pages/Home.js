import { Fragment } from "react";
import { Button, View, StyleSheet, Text, Image, StatusBar } from "react-native";
import GreetingCard from "../components/GreetingCard";
import MapManager from "../map-manager/map-manager";

const Home = ({ navigation }) => {
    const mapManager = new MapManager();
  return (
    <View style={styles.container}>
      <Fragment>
        <GreetingCard style={styles.greetingCard} />
      </Fragment>
      <StatusBar />
      <Button
        title="Find Friend"
        onPress={() =>
          navigation.navigate('FriendFinderScreen', { mapManager: mapManager })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  greetingCard: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
