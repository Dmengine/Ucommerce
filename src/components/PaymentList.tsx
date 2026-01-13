import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { CashIcon, MasterCardIcon, PayPalIcon, VisaIcon } from "./Icons";
import PaymentCardOption from "./PaymentCardOption";

const paymentMethods = [
  { title: "Cash", icon: <CashIcon /> },
  { title: "Visa", icon: <VisaIcon /> },
  { title: "Mastercard", icon: <MasterCardIcon /> },
  { title: "Paypal", icon: <PayPalIcon /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PaymentCardOption
            title={item.title}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.title)}
            isSelected={selectedMethod === item.title}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 37,
          marginStart: 24,
          gap: 16,
          flexDirection: "row",
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
