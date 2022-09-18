import React, { useState, useEffect } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";
import BritIcon from '../assets/BritIcon.png';
import GalIcon from '../assets/GalIcon.png';
import WiiIcon from '../assets/WiiIcon.png';
import SteinIcon from '../assets/SteinIcon.png';
import WillIcon from '../assets/WillIcon.png';
import Icon from 'react-native-vector-icons/FontAwesome5';


const FriendFinderScreen = ( { navigation, route } ) => {
 

    const forwardIcon = <Icon name={"forward"} size={30} style={{color: "grey"}}/>;
    const dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    
    return (
        <View>
            <Text style={styles.heading}>
                Friends List
            </Text>
            <>
                <ListItem
                    leadingMode="avatar"
                    title="brit"
                    leading={<Avatar image={BritIcon}/>}
                    secondaryText={dummy}
                    trailing={forwardIcon}
                    overline={"Level 2"}
                    style={styles.listItem}
                />
                <ListItem
                    leadingMode="avatar"
                    title="am.i.will"
                    leading={<Avatar image={WillIcon}/>}
                    secondaryText={dummy}
                    trailing={forwardIcon}
                    overline={"Level 38438"}
                />
                <ListItem
                    leadingMode="avatar"
                    title="wi.i.am"
                    leading={<Avatar image={WiiIcon}/>}
                    secondaryText={dummy}
                    trailing={forwardIcon}
                    overline={"Level 873"}
                />
                <ListItem
                    leadingMode="avatar"
                    title="stein"
                    leading={<Avatar image={SteinIcon}/>}
                    secondaryText={dummy}
                    trailing={forwardIcon}
                    overline={"Level 1"}
                />
                <ListItem
                    leadingMode="avatar"
                    title="gal"
                    leading={<Avatar image={GalIcon}/>}
                    secondaryText={dummy}
                    trailing={forwardIcon}
                    overline={"Level 12"}
                />
                <Icon 
                    name={"plus"} 
                    size={50}
                    style={{
                        margin: "auto",
                        display: "flex",
                        padding: "25px",
                        color: "grey",
                    }}
                />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: "right",
        padding: 15,
        marginRight: 10,
    },
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
