import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import bgImg from '../assets/DC.png';
import TopBar from "../components/TopBar";
import MessageBar from "../components/MessageBar";
import locationIcon from '../assets/icons8-location-50.png';
import { useNavigation } from '@react-navigation/native';


const ExplorePage = () => {
    const navigation = useNavigation(); //this hook allows you to use navigation in props.
    return (
        <View style={styles.container}>
            <TopBar />
            <Image source={bgImg} style={{width: 310, height: 400, marginTop: -120}} />
            <View style={styles.locationWrapper}>
                <Image source={locationIcon} style={{width: 50, height: 50}} />
                <Text style={styles.locationText}>Davis Hall Library</Text>
                <TouchableOpacity 
                    style={styles.exploreModeButton} 
                    onPress={() =>
                    navigation.navigate('MapPageScreen')}
                    >
                    <Text>Explore Mode</Text>
                </TouchableOpacity>
            </View>
            <MessageBar message={'  Please turn right in 50 meters'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontSize: 25
        },
    locationWrapper: {
        width: 400,
        flexDirection: "row"
        
        
    },
    locationText: {
        fontSize: 18,
        color: '#FF8585',
        marginTop: 15
    }
});
export default ExplorePage;