import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CashIcon } from "./Icons";
import { vs, s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface PaymentCardOptionProps {
  isSelected?: boolean;
  title: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const PaymentCardOption: React.FC<PaymentCardOptionProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected && (
        <View style={styles.selectedIndicator}>
          <Entypo name="check" size={20} color="white" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        {icon}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentCardOption;

const styles = StyleSheet.create({
  card: {
    width: s(85),
    height: vs(72),
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  container: {
    width: s(85),
    borderRadius: s(10),
  },
  selectedCard: {
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#ff7622",
  },
  selectedIndicator: {
    width: s(24),
    height: s(24),
    borderRadius: s(12),
    backgroundColor: "#ff7622",
    position: "absolute",
    top: -vs(5),
    right: -s(5),
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
