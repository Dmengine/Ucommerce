import { StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { SendIcon } from './Icons'
import { vs, s } from 'react-native-size-matters'
import { Colors } from '../constants/colors';

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circleButton}>
      <SendIcon />
    </TouchableOpacity>
  )
}

export default SendButton

const styles = StyleSheet.create({
  circleButton: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  }
})