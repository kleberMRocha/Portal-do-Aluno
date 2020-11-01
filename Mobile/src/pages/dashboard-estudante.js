import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import HeaderPortal from "../components/Header";



export default function DashboardEstudante() {


  return (
    <ScrollView style={styles.container}>
     
      <HeaderPortal isAMainPage={true}/>
  
      <Text style={styles.instructionsText}>Seleciona um periodo Letrivo </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instructionsText:{
    fontSize:18,
    fontFamily: 'Nunito_400Regular',
    textAlign:'center',
    color:'#FA7F72',
  }
});
