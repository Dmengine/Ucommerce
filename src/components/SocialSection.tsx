import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

interface SocialSectionProps {
  title: string;
  icon: React.ReactNode;
}

const SocialSection = ({title, icon}: SocialSectionProps) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}
      <View style={styles.circleButton}>
          {icon}
      </View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  text: {
    marginStart: s(14),
    flex: s(1),
    fontSize: s(12),
    fontWeight: "500",
    color: "#8083A3",
  },
  circleButton: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: s(1),
    borderColor: '#E4E6E8'
  }
});
