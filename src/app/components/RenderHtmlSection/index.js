import React from "react";
import { Dimensions } from "react-native";
import RenderHtml from "react-native-render-html";

export default function RenderHtmlSection({ text, style }) {
  const { __, width } = Dimensions.get("window");

  return text ? (
    <RenderHtml source={{ html: text }} baseStyle={style} contentWidth={width} />
  ) : null;
}
