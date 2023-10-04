import { View, Image, TouchableOpacity,Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';


const Profile = () => {

    const [fontLoaded] = useFonts({

        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold
    });

    if (!fontLoaded) {
        return null;
    }
    const navigation = useNavigation();
    return (
        <LinearGradient colors={['#9370DB', '#C7B6EA']} style={{ flex: 1 }}>
             <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Image source={require("../../components/img/Profile.png")} style={ScreenStyles.logoProfile}/>
                </View>
             <View  style={ScreenStyles.containerForm}>
            <Text style={ScreenStyles.title}>Nome do usuário:</Text>
            <Text style={ScreenStyles.subtitle}></Text>
            <View style={ScreenStyles.containerID}>
            <Text style={ScreenStyles.title}>Identificador usuário:</Text>
            <Text style={ScreenStyles.subtitleID}></Text>
            </View>
            </View>
            <View>
            <TouchableOpacity style={ScreenStyles.button} onPress={() => {
                navigation.navigate('SecurityToken');
            }}>
                <Text style={ScreenStyles.buttonText}>Sair</Text>
            </TouchableOpacity>
            </View>
             </View>
        </LinearGradient>
    )
}
const ScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    containerForm:{
        alignSelf: 'center',
       borderRadius:15,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: '#fff3',
        width: '80%',
        height: '30%'
    },
    title:{
        fontFamily:'Quicksand_400Regular',
        fontSize: 14,
        marginTop:28,
        borderRadius: 12,
        paddingLeft: 12,
        color:'#fff'
    },
    button:{
        backgroundColor: '#865FD6',
        width: '60%',
        alignSelf: 'center',
        borderRadius:12,
        paddingVertical:8,
        marginTop:30,
        marginBottom:60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontFamily:'Quicksand_700Bold',
        color: '#FFF',
        fontSize:18,
    },
    subtitle:{
        backgroundColor: '#865FD6',
        borderRadius:12,
        marginTop:12,
       
        fontSize:16 
    },
    subtitleID:{
        marginTop:30,
        backgroundColor: '#865FD6',
        borderRadius:12,
        marginLeft:10,
        fontSize:16 ,
        width:120
    },
    containerID:{
        flexDirection: 'row'
    },
    logoProfile:{
        alignItems:'center',
        alignSelf: 'center',
        height:200,
        width:200,
        marginTop:60,
        
    }
});

export default Profile;