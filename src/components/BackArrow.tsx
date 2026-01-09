import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const BackArrow = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
