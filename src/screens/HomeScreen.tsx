import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'
import TopTabs from '../components/TopTabs'
import MeditationCard from '../components/MeditationCard'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditations</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text</Text>
      <TopTabs />
      <MeditationCard />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    title: {
        fontSize: s(20),
        fontWeight: 600,
        width: s(123),
        height: vs(24)
    },
    container: {
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
    }
})