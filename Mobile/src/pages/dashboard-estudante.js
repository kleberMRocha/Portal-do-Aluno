import React,{useContext} from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import AuthContext from "../contexts/auth";


export default function DashboardEstudante() {
  const {roleQuery,token,logOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Boas-Vindas</Text>
      <Button title='Log Out' onPress={logOut} />
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
