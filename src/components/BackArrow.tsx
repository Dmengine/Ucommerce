import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from '../constants/colors';

const BackArrow = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={24} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: Colors.gray400,
    justifyContent: "center",
    alignItems: "center",
  },
});
