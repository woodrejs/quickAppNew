import React from "react";
import RenderHtml from "react-native-render-html";

const RenderHtmlSection = ({ source, style }) => {
  return source ? <RenderHtml source={{ html: source }} baseStyle={style} /> : null;
};

export default RenderHtmlSection;
