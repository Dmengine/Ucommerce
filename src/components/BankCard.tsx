import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'
import { BankCardIcon } from './Icons'
import LottieView from 'lottie-react-native';

const BankCard = () => {
  return (
    <View style={styles.container}>
      <BankCardIcon />
      {/* <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: s(150),
          height: vs(150),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/BankCardAnimation.json')}
      /> */}
      <Text style={styles.BankCardText}>No master card added</Text>
      <Text style={styles.BankCardSubText}>You can add a mastercard and save it for later</Text>
    </View>
  )
}

export default BankCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F8F9',
        borderRadius: s(10),
        marginHorizontal: s(10),
        marginTop: vs(25),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E2E4E8',
        borderWidth: 1,
        paddingVertical: vs(15),
    },
    BankCardText: {
        marginTop: vs(10),
        fontSize: s(16),
        fontWeight: '700',
        color: '#32343E',
        width: s(173),
        height: vs(19),
        textAlign: 'center',
    },
    BankCardSubText:{
        width: s(266),
        height: vs(61),
        textAlign: 'center',
        fontSize: s(15),
        fontWeight: '400',
        color: '#2D2D2D',
        marginTop: vs(6),
    }
})