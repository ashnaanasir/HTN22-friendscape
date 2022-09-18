import {View, StyleSheet, Text, Image} from 'react-native';
import heartIcon from '../assets/star.png'

const MessageBar = (props) => {
    const message = props.message ? props.message: 'You should turn a few meters to your right:';
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            <Image source={heartIcon} style={{width: 25, height: 25, paddingRight: 5}} />
            {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 130,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#333',
        width: 410,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 18,
        borderColor: '#fff',
        borderRadius: 15,
        borderWidth: 2,
        padding: 4,
        width: 300,
        marginLeft: 50,
        
    }
});

export default MessageBar;