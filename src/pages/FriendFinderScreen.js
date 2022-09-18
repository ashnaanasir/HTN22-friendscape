import { View , Image, Button, StyleSheet} from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

const FriendFinderScreen = ( { navigation, route } ) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    return (
        <View>
            <View style={styles.background}>
                
                <Camera style={styles.camera} />
            </View>
            <View style={styles.main}> 
                <Button title="See Friend" onPress={() => navigation.navigate('ChatScreen', {activeFriend: {name: "test", points: 10}})} /*new Friend(0, route.params.mapManager)})}*/ />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
    }
});

export default FriendFinderScreen;