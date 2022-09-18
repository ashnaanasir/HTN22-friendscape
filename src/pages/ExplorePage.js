import { Text, Image, View, StyleSheet } from "react-native";
import bgImg from '../assets/DC.png';
import TopBar from "../components/TopBar";


const ExplorePage = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <Image source={bgImg} style={{width: 350, height: 450,}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
        }
});
export default ExplorePage;
