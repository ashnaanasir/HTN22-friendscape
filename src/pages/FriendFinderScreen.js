import React, { useState, useEffect } from 'react';
import { View , Image, Button, Text, StyleSheet} from "react-native";
import { Camera, CameraType } from 'expo-camera';


const FriendFinderScreen = ( { navigation, route } ) => {
 
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    return (
        <View>
            <Text>Hello, here we find friends.</Text>
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


// const [hasCameraPermission, setHasCameraPermission] = useState(false);
    // const [camera, setCamera] = useState(null);
    // const [image, setImage] = useState(null);
    // const type = Camera.Constants.Type.back;
    // useEffect(() => {
    //     (async () => {
    //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
    //     setHasCameraPermission(true);})();
    //     }, []);

    // const takePicture = async () => {
    //     if(camera){
    //         const data = await camera.takePictureAsync(null)
    //         setImage(data.uri);
    //     }
    //     }

    // return (
        
    //     <View>
    //         <View>
    //             <Camera 
    //                 ref={ref => setCamera(ref)}
    //                 type={type}
    //                 ratio={'1:1'} 
                    
    //             />
    //         </View>
    //     </View>
    // );