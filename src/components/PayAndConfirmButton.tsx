import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AddButtonIcon } from './Icons'
import { Colors } from '../constants/colors';


const PayAndConfirmButton = () => {
  return (
    <TouchableOpacity style={styles.constainer}>
      <Text style={styles.text}>Pay & Confirm</Text>
    </TouchableOpacity>
  )
}

export default PayAndConfirmButton

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: Colors.primary,
        marginTop: vs(15),
        height: vs(62),
        marginHorizontal: s(10),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: vs(17),
    }
})