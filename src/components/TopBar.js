import { View, StyleSheet, Image} from "react-native";
import userIcon from '../assets/PikaIcon.png';
import menuIcon from '../assets/icons8-menu-30.png';
import { Flex } from "@react-native-material/core";


const TopBar = () => {
    return(
      <View style={styles.container}>
        <Image source={userIcon} style={{width: 50, height: 50}} />
        <Image source={menuIcon} style={{width: 50, height: 50}} />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        width: 400
        
    }   

});

export default TopBar;