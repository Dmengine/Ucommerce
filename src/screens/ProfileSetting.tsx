import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackArrow from "../components/BackArrow";
import { vs, s } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '../constants/colors';


const ProfileSetting = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: 17 }}>
      <View style={styles.header}>
        <BackArrow />
        <UserAvatar />
      </View>
      <Text style={styles.contactUs}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialMediaText}>Social Media Platforms</Text>
        <SocialSection icon={<FontAwesome name="whatsapp" size={24} color={Colors.socialTeal} />} title="WhatsApp" />
        <SocialSection icon={<Feather name="x" size={24} color={Colors.socialBlue} />} title="X" />
        <SocialSection icon={<AntDesign name="instagram" size={24} color={Colors.socialTeal} />} title="Instagram" />
        <SocialSection icon={<FontAwesome5 name="snapchat" size={24} color={Colors.socialBlue} />} title="Snapchat" />
        <SocialSection icon={<FontAwesome5 name="tiktok" size={24} color={Colors.socialBlue} />} title="TikTok" />
      </View>
    </View>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactUs: {
    marginTop: vs(25),
    fontSize: s(30),
    fontWeight: "600",
    color: Colors.black,
    marginStart: s(19),
  },
  socialContainer: {
    backgroundColor: Colors.gray200,
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialMediaText: {
    fontSize: s(16),
    fontWeight: "600",
    color: Colors.black,
    marginBottom: vs(15),
  },
});
