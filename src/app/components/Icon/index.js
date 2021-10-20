import React from "react";
import {
  Foundation,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { COLORS } from "../../style/colors";

export default function Icon({ name, size = 24, color = COLORS.dark, styles = {} }) {
  switch (name) {
    case "key":
    case "password":
      return (
        <MaterialCommunityIcons name="key" size={size} color={color} style={styles} />
      );
    case "failed":
      return <Entypo name="cross" size={size} color={color} style={styles} />;
    case "exclamation":
      return <AntDesign name="exclamation" size={size} color={color} style={styles} />;
    case "image":
      return <Entypo name="image" size={size} color={color} style={styles} />;
    case "check":
      return <AntDesign name="check" size={size} color={color} style={styles} />;
    case "username":
    case "user":
      return <FontAwesome5 name="user-alt" size={size} color={color} style={styles} />;
    case "support":
      return <FontAwesome name="support" size={size} color={color} style={styles} />;
    case "star":
      return <MaterialIcons name="star" size={size} color={color} style={styles} />;
    case "eye":
      return (
        <MaterialCommunityIcons name="eye" size={size} color={color} style={styles} />
      );
    case "delete":
    case "cross":
      return <Entypo name="circle-with-cross" size={size} color={color} style={styles} />;
    case "place":
      return <MaterialIcons name="place" size={size} color={color} style={styles} />;
    case "search":
      return <MaterialIcons name="search" size={size} color={color} style={styles} />;
    case "filter":
      return (
        <MaterialCommunityIcons name="filter" size={size} color={color} style={styles} />
      );
    case "rightArrow":
      return <AntDesign name="arrowright" size={size} color={color} style={styles} />;
    case "leftArrow":
      return <AntDesign name="arrowleft" size={size} color={color} style={styles} />;
    case "cutlery":
      return <FontAwesome name="cutlery" size={size} color={color} style={styles} />;
    case "wheelchair":
      return <FontAwesome5 name="wheelchair" size={size} color={color} style={styles} />;
    case "parking":
      return (
        <MaterialIcons name="local-parking" size={size} color={color} style={styles} />
      );
    case "mail":
    case "email":
      return <Foundation name="mail" size={size} color={color} style={styles} />;
    case "heart":
      return (
        <MaterialCommunityIcons name="heart" size={size} color={color} style={styles} />
      );
    case "web":
      return (
        <MaterialCommunityIcons name="web" size={size} color={color} style={styles} />
      );
    case "telephone":
      return <Foundation name="telephone" size={size} color={color} style={styles} />;
    case "plus":
      return <Foundation name="plus" size={size} color={color} style={styles} />;
    case "ticket":
      return <Entypo name="ticket" size={size} color={color} style={styles} />;
    case "home":
      return <Entypo name="home" size={size} color={color} style={styles} />;
    case "users":
      return <FontAwesome5 name="users" size={size} color={color} style={styles} />;
    case "calendar":
      return (
        <FontAwesome5 name="calendar-day" size={size} color={color} style={styles} />
      );
    case "gear":
      return <FontAwesome name="gear" size={size} color={color} style={styles} />;
    default:
      return null;
  }
}
