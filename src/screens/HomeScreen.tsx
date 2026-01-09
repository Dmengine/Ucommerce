import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { vs, s } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditations</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text</Text>
      <TopTabs />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MeditationCard
            imageURL={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(16),
        }}
        contentContainerStyle={{
          paddingBottom: vs(50),
          paddingTop: vs(14),
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: s(20),
    fontWeight: 600,
    width: s(123),
    height: vs(24),
  },
  container: {
    flex: 1,
    marginTop: vs(60),
    marginHorizontal: s(4),
  },
  subtitle: {
    fontSize: s(14),
    fontWeight: 400,
    width: s(249),
    height: vs(17),
    marginTop: vs(6),
    marginHorizontal: s(4),
  },
});
