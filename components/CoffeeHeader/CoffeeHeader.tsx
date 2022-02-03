import React from "react";
import {
  Image,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
} from "react-native";

const cover = require("../../assets/coffee-cover.jpg");
const dimensions = {
  with: 900,
  height: 450,
};

const ratio = dimensions.height / dimensions.with;
export function CoffeeHeader() {
  const window = useWindowDimensions();

  const width = window.width;
  const height = width * ratio;

  return (
    <>
      <Image style={{ width, height }} source={cover} />
      <View style={styles.container}>
        <Text style={styles.title}>Types of Coffee</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F4E37",
    paddingVertical: 8,
    marginBottom: 16,
  },

  title: {
    alignSelf: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
});
