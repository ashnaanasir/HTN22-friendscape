import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function MapPage() {
  const [region, setRegion] = useState({
    latitude: 43.4729,
    longitude: -80.5396,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 'auto',
      width: 'auto',  
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
