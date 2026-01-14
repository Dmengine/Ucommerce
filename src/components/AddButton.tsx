import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AddButtonIcon } from './Icons'
import { Colors } from '../constants/colors';


const AddButton = () => {
  return (
    <TouchableOpacity style={styles.constainer}>
        <AddButtonIcon />
      <Text style={styles.text}>Add New</Text>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: Colors.gray350,
        marginTop: vs(15),
        height: vs(62),
        marginHorizontal: s(10),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: s(10),
    },
    text: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
        width: s(68),
        lineHeight: vs(17),
    }
})