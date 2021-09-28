import React from "react";
import { Dimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const RenderHtmlSection = ({ source, style }) => {
  const { __, width } = Dimensions.get("window");

  return source ? (
    <RenderHtml source={{ html: source }} baseStyle={style} contentWidth={width} />
  ) : null;
};

export default RenderHtmlSection;
