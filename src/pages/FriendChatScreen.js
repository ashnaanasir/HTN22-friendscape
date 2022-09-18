import { View, Text, Image, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function FriendChatScreen( { navigation, route } ) {
    //const [friendSprite, setFriendSprite] = useState(route.params.activeFriend.sprite);
    const [friendName, setFriendName] = useState(route.params.activeFriend.name);
    const [friendPoints, setFriendPoints] = useState(route.params.activeFriend.points);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    return (
        <View>
            <View style={styles.background}>
                <Image style={styles.background} />
                <Camera style={styles.camera} />
            </View>
            <View style={styles.main}> 
                <Text style={styles.friendName}> {friendName} </Text>
                <Text style={styles.friendPoints}> {friendPoints} </Text>
            </View>
        </View>
    );
    //<Image style={styles.friendSprite} source={friendSprite} />
}

const styles = StyleSheet.create({
    background: {
        flex: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    camera: {
        flex: 1,
        width: 'auto',
        height: '100vh',
        resizeMode: 'cover',
        position: 'absolute',
        top: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        right: '-9999px',
        margin: 'auto',
    },
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    friendName: {
        flex: 0,
        position: 'relative',
        top: '10%',
        left: '10%',
        fontSize: '2em',
        color: 'white',
    },
    friendPoints: {
        flex: 0,
        position: 'relative',
        top: '10%',
        right: '10%',
        fontSize: '1em',
        color: 'white',
    },
    friendSprite: {
        flex: 0,
        position: 'relative',
        bottom: '20%',
        left: '20%',
        width: '60%',
        height: '60%',
    }
});