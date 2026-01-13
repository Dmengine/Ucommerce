import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'

const BankCardText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total:</Text>
      <Text style={styles.subText}>$96</Text>
    </View>
  )
}

export default BankCardText

const styles = StyleSheet.create({
    container: {
        marginTop: vs(25),
        marginStart: s(24),
        flexDirection: 'row',
        gap: s(14),
        alignItems: 'center',
        height: vs(40),
    },
    text: {
        fontSize: s(14),
        fontWeight: '400',
        color: '#A0A5BA',
        textTransform: 'uppercase',
        width: s(49),
        height: vs(24)
    },
    subText: {
        fontSize: s(28),
        fontWeight: '400',
        color: '#181C2E',
        alignItems: 'center',
        justifyContent: 'center',
        height: vs(40),
        width: s(50)
    }
})