import React,{useContext, useEffect,useState} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import api from '../services/api';
import AuthContext from '../contexts/auth';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderPortal from '../components/Header';

function Turmas({route}){

    const {token} = useContext(AuthContext);
    const [diciplinas,setdiciplinas] = useState([]);
    const { matriculaId } = route.params;

    useEffect(() =>{
        api.get(`matricula/${matriculaId}`,{
            headers:{
                token
            }
        }).then(diciplinas => setdiciplinas(diciplinas.data.Turma.Diciplinas));
    },[])


    return (
                <ScrollView style={styles.container}>
                    <HeaderPortal isAMainPage={false}/>
                        <View style={styles.diciplinasView}>
                            {diciplinas.map(diciplina =>{
                                return(<TouchableOpacity style={styles.diciplinaBtn} key={diciplina.id}> 
                                    <Text style={styles.diciplinaTxt}>{diciplina.nome}</Text> 
                                </TouchableOpacity>)
                            })}
                        </View>
                
                </ScrollView>
            );
}

const styles = StyleSheet.create({
        container:{
            flex:1,
        },
        diciplinasView:{
            justifyContent:'center',
            alignItems:'center'
        },
        diciplinaBtn:{
            backgroundColor:'#3FC1C9',
            borderRadius:20,
            width:250,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            margin:3

        },diciplinaTxt:{
            fontSize:24,
            color:'#ffffff',
            fontFamily:'Nunito_700Bold'

        }
});


Turmas.propTypes ={
    route:PropTypes.object
}

export default Turmas;