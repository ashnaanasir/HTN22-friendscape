import { Fragment } from "react";
import { Button, View, StyleSheet, Text, Image, StatusBar } from "react-native";
import GreetingCard from "../components/GreetingCard";
// import MapManager from "../map-manager/map-manager";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TopBar = ( { navigation }) => {
  return(
    <Fragment style={styles.top}>
      <FontAwesome5 
      name={'backward'}
      onPress={() =>
        navigation.navigate('CameraScreen')
      }
       />
      <Text>
        Settings
      </Text>
    </Fragment>
  )
}

const Home = ({ navigation }) => {
    // const mapManager = new MapManager();
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation}/>
      <Fragment>
        <GreetingCard style={styles.greetingCard} />
      </Fragment>
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
