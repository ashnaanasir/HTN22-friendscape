import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CameraScreen from '../pages/CameraScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const TopBar = ({ navigation }) => {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')} >
            <FontAwesome5 name={'backward'} />
        </TouchableOpacity>     
        
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default TopBar;