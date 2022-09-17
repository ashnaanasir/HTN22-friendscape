import { Fragment } from 'react';
import {Button, View, StyleSheet, Text, Image} from 'react-native';

import GreetingCard from '../components/GreetingCard';

const Home = () => {
    return (
        <Fragment>
            <GreetingCard style={styles.greetingCard}/>
        </Fragment>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    greetingCard: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});

export default Home;