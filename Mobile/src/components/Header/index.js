import React, { useContext, useState } from 'react';
import  { Text,Image, View,StyleSheet} from 'react-native';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PropTypes from "prop-types";


function HeaderPortal({ isAMainPage }){

    const navigation = useNavigation();

    const {roleQuery,token,logOut} = useContext(AuthContext);

    const id = roleQuery.userId ? roleQuery.userId : roleQuery.docentUserId;
  
    useState(()=>{
      api.get(`estudantes/${id}`,{
        headers: {
          'token': token
        }
      })
      .then(res => setUserData(res.data));
  
    },[]);
  
    const [userData,setUserData] = useState({});
    
    return(
        <View>
            <View style={styles.container}>
            <View style={styles.nameArea}>
                <Text style={styles.textName}>{userData.nome}
                </Text>
                { isAMainPage && (

                    <TouchableHighlight style={styles.closeButton}  onPress={logOut}> 
                    <FontAwesome color='tomato' name='close' size={24}/>
                    </TouchableHighlight>

                )}
            </View>

                {!isAMainPage && (
                    <View style={styles.buttonsHeader}>
                        <TouchableHighlight  onPress={navigation.goBack}> 
                            <FontAwesome color='#112F5B' name='arrow-left' size={24}/>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={logOut}> 
                           <FontAwesome color='tomato' name='close' size={24}/>
                        </TouchableHighlight>
                    </View>)
                }

                    <Image
                        style={styles.avatar}
                        source={{ uri:userData.foto}}
                    />

            </View>
            <View style={styles.boasvindasView}>
                 <Text style={styles.boasVindas}>Boas-Vindas</Text>
                 <Text>{
                            roleQuery.userId 
                            ? 'Estudante' 
                            : 'Docente'
                        }
                 </Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      height:200,
      backgroundColor: "#ADF8FF",
      justifyContent:'center',
      alignItems:'center',
      borderBottomEndRadius:50,
      borderBottomStartRadius:50,
      paddingTop:50
    },
    textName:{
        fontFamily: 'Nunito_400Regular',
        fontSize:36,
        flexDirection:'row', 
    },
    avatar:{
        width: 158,
        height: 144,
        borderRadius:20,
        borderColor:'#112F5B',
        borderWidth:5

    },buttonsHeader:{
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nameArea:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },boasVindas:{
        color:'#364F6B',
        fontSize:36,
        fontFamily: 'Nunito_700Bold',
    },boasvindasView:{
        marginTop:30,
        alignItems:'center'
    }
});

HeaderPortal.propTypes = {
    isAMainPage: PropTypes.bool
};

export default HeaderPortal;