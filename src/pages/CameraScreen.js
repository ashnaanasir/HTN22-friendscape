import { Fragment, Text } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TopBar = () => {
    return(
        <Fragment style={styles.top}>
            <Image 
            source={{uri: 'https://reactnative.dev/docs/assets/PikaIcon.png'}}
            />
            <FontAwesome5 name={'menu'} />
        </Fragment>
    )
}

const CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Fragment>
                <TopBar/>
            </Fragment>
            <Text>Hello World</Text>
        </View>
    )
}

export default CameraScreen;