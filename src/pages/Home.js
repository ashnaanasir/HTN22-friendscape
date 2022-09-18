import { Button, View, StyleSheet, Text, Image, StatusBar } from "react-native";
import GreetingCard from "../components/GreetingCard";
// import TopBar from "../components/TopBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GreetingCard style={styles.greetingCard} />
      <Button style={styles.button}
        title="Find Friend"
        onPress={() =>
          navigation.navigate('FriendFinderScreen')
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
  button: {
    marginTop: 50,
    padding: 25
  }
});

export default Home;

