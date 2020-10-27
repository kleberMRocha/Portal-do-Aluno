import { RectButton } from 'react-native-gesture-handler';
import {useNavigation } from '@react-navigation/native';
import React, { useState,useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TextInput, Switch } from 'react-native';
import LoginPageIMG from '../assets/LoginPageIMG/g10.png';
import AuthContext from '../contexts/auth';
import api from '../services/api'; 

export default function LoginPage() {

  const {getToken, isDadosValidos} = useContext(AuthContext);

  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [eUmDocente, setDocente] = useState(false);

  function handleToRecuperaSenha() {
    navigation.navigate('RecuperarSenha');
  }

  return (
    <View style={styles.container}>
      <Image source={LoginPageIMG} />
      <Text style={styles.boasVindas}>Boas-vindas </Text>
      <Text style={styles.intrucao}>Faça o login para continuar</Text>
      {!isDadosValidos && <Text style={styles.intrucaoError}>Dados Invalidos</Text>}
      <View style={isDadosValidos ? styles.formGroup : styles.formGroupError}>
        <FontAwesome name='user' size={24} color='#DEDEDE' />
        <TextInput
          onChangeText={(user) => setUser(user)}
          placeholder='Matrícula ou E-mail'
          style={styles.textInput}
        />
      </View>

      <View style={isDadosValidos ? styles.formGroup : styles.formGroupError}>
        <FontAwesome name='lock' size={24} color='#DEDEDE' />
        <TextInput
          onChangeText={(senha) => setSenha(senha)}
          placeholder=' Senha de Acesso'
          secureTextEntry={true}
          style={styles.textInput}
          value={senha}
        />
      </View>

      <RectButton onPress={handleToRecuperaSenha}>
      <Text style={styles.recuperarSenhaText} >Esqueceu a senha?</Text>
      </RectButton>
      <View style={styles.switchGroup}>
        <Text style={styles.intrucao}>Eu sou Docente :</Text>
        <Switch
          value={eUmDocente}
          onValueChange={()=> setDocente(!eUmDocente)}
        />
      </View>
      <RectButton 
        style={styles.loginBtn}
        onPress={() => getToken(user,senha,eUmDocente,api)}

      >
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
  intrucaoError:{
    color: 'tomato',
    fontSize: 16,
    textDecorationLine:'underline',
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
  formGroupError: {
    width: 274,
    height: 49,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'tomato',
  },
  switchGroup:{
    flexDirection:'row',
    justifyContent:'center',
    margin:15
  }
});
