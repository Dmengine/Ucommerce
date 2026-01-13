import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrow from './BackArrow'
import { vs, s } from 'react-native-size-matters'
import PaymentCardOption from './PaymentCardOption'
import PaymentList from './PaymentList'
import BankCard from './BankCard'
import AddButton from './AddButton'
import BankCardText from './BankCardText'
import PayAndConfirmButton from './PayAndConfirmButton'

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginStart:s(20), flexDirection:'row', alignItems:'center', gap:s(20), borderRadius:2, width:133, paddingHorizontal:s(16)}}>
        <BackArrow />
        <Text style={{color:'#181C2E', fontSize:17, fontWeight:'400'}}>Payment</Text>
      </View>

      {/* payment content */}
      <PaymentList />
      <BankCard />
      <AddButton />
      <BankCardText />
      <PayAndConfirmButton />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        marginTop:vs(57),
        flex:1,
    }
})