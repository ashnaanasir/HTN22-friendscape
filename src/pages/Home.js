import { Button, View, StyleSheet, Text, Image, StatusBar } from "react-native";
import GreetingCard from "../components/GreetingCard";
// import TopBar from "../components/TopBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GreetingCard style={styles.greetingCard} />
      <Button style={styles.button}
        title="View Friend"
        onPress={() =>
          navigation.navigate('FriendFinderScreen')
        }
      />
      <Button style={styles.button}
        title="Edit Avatar"
        onPress={() =>
          navigation.navigate('AvatarEditScreen')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexOrder: "row",
    justifyContent: "space-between",
    fontSize: "28px",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  greetingCard: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    marginTop: 250,
    padding: 25
  }
});

export default Home;

