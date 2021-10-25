import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
//utils & styles
import { STYLES } from "../../style/styles";

export default function LocalizationMapSection({ latitude, longitude }) {
  return (
    <View style={style.container}>
      
      <MapView
        style={style.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 330,
    borderRadius: 20,
    ...STYLES.shadow,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
