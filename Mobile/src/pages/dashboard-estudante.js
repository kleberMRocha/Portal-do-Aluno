import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderPortal from "../components/Header";
import AuthContext from "../contexts/auth";
import api from "../services/api";



export default function DashboardEstudante() {

 const {roleQuery,token} = useContext(AuthContext);

    const id = roleQuery.userId ? roleQuery.userId : roleQuery.docentUserId;

  useEffect(()=>{
    api.get(`/matriculas/${id}`,{ headers: {'token': token,} })
    .then(res => {
      const periodosLetivos = res.data.map(item =>{ 
       return {
         matriculaId:item.id,
         turmaId:item.Turma.id,
         perletivo:`${item.Turma.Periodosletivo.nome} - ${item.Turma.nome}`
        }
      });

      setperletivos(periodosLetivos);
    })
    
  },[]);

  const [perLetivos,setperletivos] = useState([]);
  const navigation = useNavigation();

  function handleNavigationTurmas(matriculaId){
    navigation.push('Turmas',{ matriculaId });
  }
  return (
    <ScrollView style={styles.container}>
     
      <HeaderPortal isAMainPage={true}/>
  
      <Text style={styles.instructionsText}>Seleciona um periodo Letrivo </Text>
      <View style={styles.perLetivos}>
          {perLetivos.map(item =>{
            return(
                    <TouchableOpacity 
                    onPress={()=>handleNavigationTurmas(item.matriculaId)}
                    style={styles.perLetivosBtn} 
                    key={item.matriculaId}>
                      <Text style={styles.perletivoText}>{item.perletivo}</Text>
                    </TouchableOpacity>                
            )
          })}
      </View>
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
  },
  perLetivos:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center'
  },
  perLetivosBtn:{
    backgroundColor:'#3FC1C9',
    borderRadius:20,
    width:250,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    margin:3

  },perletivoText:{
    fontSize:24,
    color:'#ffffff',
    fontFamily:'Nunito_700Bold'

  }
});
