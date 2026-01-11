import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrow from './BackArrow'
import { vs, s } from 'react-native-size-matters'

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginStart:s(20), flexDirection:'row', alignItems:'center', gap:s(20), borderRadius:2, width:133}}>
        <BackArrow />
        <Text style={{color:'#181C2E', fontSize:17, fontWeight:'400'}}>Payment</Text>
      </View>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        marginTop:vs(57),
    }
})