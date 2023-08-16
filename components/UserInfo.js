import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UserInfo = ({ info, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.item}>
        <Text style={styles.text}>{info}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 30,
  },
  text: {
    color: "#aaa",
    fontSize: 18,
    fontWeight: "500",
  },
  label: {
    width: "100%",
    color: "#999",
    fontSize: 14,
  },
});
