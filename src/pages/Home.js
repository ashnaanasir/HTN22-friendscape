import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import GreetingCard from "../components/GreetingCard";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import TopBar from "../components/TopBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GreetingCard style={styles.greetingCard} />
      <View style={styles.buttonsContainer} >

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('FriendFinderScreen')
        }
        >
        <Text>View Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ExplorePageScreen')
        }
        >
        <Text>Go Exploring!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60
  },
  greetingCard: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    textAlign: "center",
    marginTop: 140,
    marginBottom: -15
  },
  button: {
    backgroundColor: '#FFE193',
    width: 250,
    textAlign: "center",
    padding: 15,
    margin: 10,
    borderRadius: 25
  },
});

export default Home;

