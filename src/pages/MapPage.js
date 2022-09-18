import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

export default function MapPage( { navigation, route } ) {
  const [region, setRegion] = useState({
    latitude: 43.4729,
    longitude: -80.5396,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={styles.container}>
      <MapView region={region} provider={PROVIDER_GOOGLE} style={styles.map}>
        {route.params.friends.friends.map((friend, index) => (
          <Marker
            key={index}
            coordinate={friend.position}
            title={friend.name}
          />  
        ))}
      </MapView>
      <Text>{route.params.friends.friends.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
    width: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
