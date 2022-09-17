import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
//import { updateFriends } from './src/friend-manager';

/*useEffect(() => {
  //const tickInterval = setInterval(() => update(), 1000);
  //const friendTickInterval = setInterval(() => updateFriends(), 1800000);
  return () => {
    //clearInterval(tickInterval);
    //clearInterval(friendTickInterval);
  };
}, []);*/

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: 'red',
    backgroundColor: '#eee'
  }
});
