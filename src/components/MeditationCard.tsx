import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { vs, s } from "react-native-size-matters";
import { VideoIcon } from "./Icons";
import { Colors } from '../constants/colors';

const phoneWidth = Dimensions.get("window").width;
const cardWidth = (phoneWidth - s(16)) / 2;

interface MeditationCardProps {
  imageURL: string;
  title: string;
  date: string;
}
const MeditationCard: React.FC<MeditationCardProps> = ({imageURL, title, date}) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <View style={styles.liveBadge}>
          <Text
            style={{
              color: Colors.white,
              fontSize: s(11),
              textAlign: "center",
              fontWeight: "semibold",
            }}
          >
            Live
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              position: "absolute",
              top: vs(10),
              left: s(1),
              flexDirection: "row",
              alignItems: "center",
              marginTop: vs(6),
              width: s(146),
              height: vs(17),
            }}
          >
            <VideoIcon />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: cardWidth,
    height: vs(161),
    borderRadius: s(16),
    backgroundColor: Colors.gray300,
    overflow: "hidden",
    marginTop: vs(10),
    marginHorizontal: s(2),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.overlayDark,
    borderRadius: s(16),
  },
  image: {
    borderRadius: s(16),
    resizeMode: "cover",
    opacity: 0.7,
    width: "100%",
    height: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: s(18),
  },
  cardContent: {
    color: Colors.white,
    position: "absolute",
    bottom: vs(18),
    left: s(12),
  },
  dateText: {
    color: Colors.white,
    fontSize: s(12),
    marginStart: s(7),
  },
  liveBadge: {
    width: s(39),
    height: s(22),
    borderRadius: s(90),
    backgroundColor: Colors.liveRed,
    position: "absolute",
    top: vs(7),
    right: s(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
