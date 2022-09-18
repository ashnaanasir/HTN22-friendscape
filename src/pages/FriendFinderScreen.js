import React, { useState, useEffect } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
/*
<MapView
  provider={PROVIDER_GOOGLE}
  style={styles.map}
  region={{
    latitude: 43.4729,
    longitude: -80.5396,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }}
/>;*/

const FriendFinderScreen = ({ navigation, route }) => {
  return <View></View>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    width: "auto",
    height: "auto",
    position: "absolute",
    top: "0px",
    left: "0px",
    //top: '-9999px',
    //bottom: '-9999px',
    //left: '-9999px',
    //right: '-9999px',
    margin: "auto",
  },
  main: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
