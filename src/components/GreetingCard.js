import { useState } from "react";
import { View , Text, ProgressViewIOSComponent , StyleSheet , Image } from "react-native";

const GreetingCard = () => {
    const username = 'Pika'; //TODO: Make it dynamic after adding auth
    return (
        <View style={{width: 350, height: 300, backgroundColor: '#eee', borderRadius: 20, }}>
            <Text style={styles.greetingHeading}>Hello, 
            <Text style={styles.greetingUsername}> {username}</Text>
            </Text>
            <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 250, height: 300, marginTop: 10,}} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    
    greetingHeading: {
        color: '#29B1CC',
        fontSize: 40,
        marginLeft: 120,
        marginTop: 30,
    },
    greetingUsername: {
        color: '#FF8585',
        fontSize: 40,
    }
});


export default GreetingCard;