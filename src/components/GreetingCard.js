import { useState } from "react";
import { View , Text, ProgressViewIOSComponent , StyleSheet , Image } from "react-native";

const GreetingCard = () => {
    const username = 'Pika'; //TODO: Make it dynamic after adding auth
    return (
        <View style={{width: 350, height: 300, backgroundColor: '#eee', borderRadius: 20, marginBottom: 50}}>
            <View style={{width: 300, height: 20, backgroundColor: '#333', borderRadius: 10, marginTop: 20, marginLeft: 26}}></View>
            <Text style={styles.greetingHeading}>Hello, 
                <Text style={styles.greetingUsername}> {username}</Text>
            </Text>
            <Image source={{uri: '../../assets/william.png'}} style="width: 300, height: 300" />
            
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