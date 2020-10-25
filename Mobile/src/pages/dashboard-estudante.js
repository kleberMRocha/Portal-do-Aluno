import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DashboardEstudante() {
  return (
    <View style={styles.container}>
      <Text>Boas-Vindas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADF8FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
