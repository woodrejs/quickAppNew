import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Camera } from "expo-camera";
import axios from "axios";
import { userUpdate } from "../../utils/strapi";
import { COLORS } from "../../style/colors";
import { Image } from "react-native-svg";

import { STRAPI_DB } from "@env";
const MobileCamera = ({ isOpen, handler }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handlePhoto = async () => {
    // const jwt =
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTMwMGQ0MmU5ZWJlNDUyOGQ2NGMyNCIsImlhdCI6MTYzMjk4OTQzNSwiZXhwIjoxNjM1NTgxNDM1fQ.jHk1exuEgH1MWfrj0pBrLWlwu8GOkgkNzU-v9531vaw";
    // if (cameraRef.current) {
    //   const result = await cameraRef.current.takePictureAsync();
    //   let localUri = result.uri;
    //   let filename = localUri.split("/").pop();
    //   let match = /\.(\w+)$/.exec(filename);
    //   let type = match ? `image/${match[1]}` : `image`;
    //   let formData = new FormData();
    //   formData.append("avatar", { uri: localUri, name: filename, type });
    //   const YOUR_SERVER_URL = `${STRAPI_DB}users-permissions/users/me`;
    //   console.log(formData);
    //   const data = await axios.post(YOUR_SERVER_URL, formData, {
    //     headers: {
    //       Authorization: `Bearer ${jwt}`,
    //       accept: "multipart/form-data",
    //     },
    //   });
    //   console.log(data);
    // }
  };

  if (hasPermission === null) {
    return <Text>No permission granted</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return isOpen ? (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} pictureSize="4:3">
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePhoto}>
            <Text style={styles.text}> Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handler(false)}>
            <Text style={styles.text}> close </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  ) : null;
};

export default MobileCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: "110%",
    zIndex: 1000,
  },
  camera: {
    flex: 1,
    position: "relative",
  },
  buttonContainer: {
    flex: 1,
    position: "absolute",
    margin: 20,
    bottom: 20,
    right: 0,
  },
  button: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.extra,
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    color: "white",
    color: COLORS.white,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
