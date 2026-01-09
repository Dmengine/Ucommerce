import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {vs, s} from 'react-native-size-matters'
import { VideoIcon } from './Icons'

const MeditationCard = () => {
  return (
    <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkZXRhdGlvbnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}}
        style={styles.imageContainer}
        imageStyle={styles.image}
    >
        <View style={styles.overlay}>

        </View>
        <View style={styles.cardContent}>
            <Text style={styles.title}>Meditations</Text>
             <View style={{position: 'absolute', top: vs(10), left: s(1), flexDirection: 'row', alignItems: 'center', marginTop: vs(6), width: s(146), height: vs(17)}}>
                <VideoIcon />
                <Text style={styles.dateText}>31st Jan - 09:00 am</Text>
            </View>
        </View>
    </ImageBackground>
  )
}

export default MeditationCard

const styles = StyleSheet.create({
    imageContainer: {
        width: s(166),
        height: vs(161),
        borderRadius: s(16),
        backgroundColor: '#F4F0ED',
        overflow: 'hidden',
        marginTop: vs(24),
        marginHorizontal: s(4),
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: s(16),
    },
    image: {
        borderRadius: s(16),
        resizeMode: 'cover',
        opacity: 0.7,
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#FFFFFF',
        fontSize: s(18),
    },
    cardContent: {
        color: '#FFFFFF',
        position: 'absolute',
        bottom: vs(18),
        left: s(12),
    },
    dateText: {
        color: '#FFFFFF',
        fontSize: s(12),
        marginStart: s(7)
    }
})