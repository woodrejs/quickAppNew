import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const LocalizationMapSection = ({ location }) => {
  const { latitude, longitude } = location;

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
};
export default LocalizationMapSection;

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 330,
    borderRadius: 20,
    marginBottom: 30,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
