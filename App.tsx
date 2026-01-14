import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import ProfileSetting from './src/screens/ProfileSetting';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/components/PaymentScreen';
import { Colors } from './src/constants/colors';

export default function App() {
  return (
    // <IntroScreen />
    // <ProfileSetting />
    // <HomeScreen />
    <PaymentScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
