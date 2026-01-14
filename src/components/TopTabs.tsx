import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { act } from "react";
import { useState } from "react";
import { vs, s } from "react-native-size-matters";
import { Colors } from '../constants/colors';

const tabArr = ["Live", "Recorded"];

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("Live");
  return (
    <View style={styles.container}>
      {tabArr.map((tabName) => {
        const isActive = activeTab === tabName;
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              isActive
                ? { backgroundColor: Colors.tabActive }
                : { backgroundColor: "transparent" },
            ]}
            onPress={() => setActiveTab(tabName)}
            key={tabName}
          >
            <Text
              style={
                isActive ? { color: Colors.white, fontWeight: "600", fontSize: s(14) } : { color: Colors.tabInactive, fontWeight: "300", fontSize: s(14) }
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray250,
    padding: s(4),
    width: s(334),
    height: vs(40),
    borderRadius: s(12),
    flexDirection: "row",
    alignItems: "center",
  },
  tabButton: {
    height: vs(28),
    borderRadius: s(8),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tabActive,
  },
});
