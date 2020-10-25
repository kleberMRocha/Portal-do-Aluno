import {useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import React, { useState,useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import LoginPageIMG from '../assets/LoginPageIMG/g10.png';
import AuthContext from '../contexts/auth';
 

export default function LoginPage() {
  const {signed} = useContext(AuthContext);  
  console.log(signed);
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  function HandleToRecuperaSenha() {
    navigation.navigate('RecuperarSenha');
  }

  return (
    <View style={styles.container}>
      <Image source={LoginPageIMG} />
         <Text style={styles.boasVindas}>Boas-vindas</Text>
      <Text style={styles.intrucao}>Faça o login para continuar</Text>
      <View style={styles.formGroup}>
        <FontAwesome name='user' size={24} color='#DEDEDE' />
        <TextInput
          onChange={(e) => setUser(e.value)}
          placeholder=' Matrícula ou E-mail'
          style={styles.textInput}
          value={user}
        />
      </View>

      <View style={styles.formGroup}>
        <FontAwesome name='lock' size={24} color='#DEDEDE' />
        <TextInput
          onChange={(e) => setSenha(e.value)}
          placeholder=' Senha de Acesso'
          secureTextEntry={true}
          style={styles.textInput}
          value={senha}
        />
      </View>

      <RectButton onPress={HandleToRecuperaSenha}>
      <Text style={styles.recuperarSenhaText} >Esqueceu a senha?</Text>
      </RectButton>
      <RectButton style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>Log in</Text>
      </RectButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADF8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: 273,
    height: 50,
    backgroundColor: '#3FC1C9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 8,
    fontFamily: 'Nunito_700Bold',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    width: 230,
    height: 35,
    backgroundColor: '#FFFFFF',
  },
  recuperarSenhaText: {
    color: '#FA7F72',
    width: 274,
    textAlign: 'right',
    margin: 3,
    fontFamily: 'Nunito_400Regular',
  },
  boasVindas: {
    color: '#364F6B',
    fontSize: 36,
    marginTop: 4,
    fontFamily: 'Nunito_700Bold',
  },
  intrucao: {
    color: '#364F6B',
    fontSize: 12,
    margin: 3,
    fontFamily: 'Nunito_400Regular',
  },
  formGroup: {
    width: 274,
    height: 49,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#55C3FE',
  },
});
