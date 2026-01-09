import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SendIcon } from './Icons'
import { vs, s } from 'react-native-size-matters'

const SocialCircle = () => {
  return (
    <View style={styles.circleButton}>
    </View>
  )
}

export default SocialCircle

const styles = StyleSheet.create({
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
})