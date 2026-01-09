import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import ProfileSetting from './src/screens/ProfileSetting';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    // <IntroScreen />
    // <ProfileSetting />
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
