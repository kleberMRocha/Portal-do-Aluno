import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function LoginPage() {
  const [infoRecuperacao, setInfo] = useState("");
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton onPress={()=> goBack()} style={styles.goBack}>
        <FontAwesome name="arrow-circle-left" size={32} color="#112F5B" />
      </RectButton>
      <Text style={styles.boasVindas}>Recuperar Senha</Text>
      <View style={styles.formGroup}>
        <FontAwesome name="send" size={24} color="#DEDEDE" />
        <TextInput
          onChange={(e) => setInfo(e.value)}
          placeholder=" Matrícula ou E-mail"
          style={styles.textInput}
          value={infoRecuperacao}
        />
      </View>

      <RectButton style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>Enviar</Text>
      </RectButton>
      <Text style={styles.intrucao}>
        O link para redefinir a senha será enviado ao e-mail cadastrado no ato da
        matrícula
      </Text>

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
  loginBtn: {
    width: 273,
    height: 50,
    backgroundColor: "#3FC1C9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 8,
    fontFamily: "Nunito_700Bold",
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 24,
  },
  textInput: {
    width: 230,
    height: 35,
    backgroundColor: "#FFFFFF",
  },
  recuperarSenhaText: {
    color: "#FA7F72",
    width: 274,
    textAlign: "right",
    margin: 3,
    fontFamily: "Nunito_400Regular",
  },
  boasVindas: {
    color: "#364F6B",
    fontSize: 36,
    marginBottom: 32,
    fontFamily: "Nunito_700Bold",
  },
  intrucao: {
    color: "#364F6B",
    textAlign:'center',
    margin:50,
    fontSize: 14,
    width: 280,
    fontFamily: "Nunito_400Regular",
  },
  formGroup: {
    width: 274,
    height: 49,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#55C3FE",
  },
  goBack: {
    position:"absolute",
    left:0,
    top:50,
    padding: 5,
  },
});
