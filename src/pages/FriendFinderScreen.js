import { View , Text} from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';


const FriendFinderScreen = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    return (
        <View>
            <Camera />
        </View>
    );
}

const styles = StyleSheet.create({});

export default FriendFinderScreen;