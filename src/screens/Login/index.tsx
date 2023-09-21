import {View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";


const Login = () => {
    
const [fontLoaded] = useFonts({
    
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold
});
    
    if(!fontLoaded){
        return null;
    }
    const navigation = useNavigation();
    return(
        <LinearGradient colors={['#9370DB', '#C7B6EA']} style={{ flex: 1 }}>
        <View style={ScreenStyles.container}>
       
        <View style={ScreenStyles.containerLogo}></View>
        <View  style={ScreenStyles.containerForm}>
            <Text style={ScreenStyles.title}>Email</Text>
            <TextInput placeholder="Digite um email..." style={ScreenStyles.input}></TextInput>
            <Text style={ScreenStyles.title}>Senha</Text>
            <TextInput placeholder="Digite sua senha..." style={ScreenStyles.input}></TextInput>
            <TouchableOpacity style={ScreenStyles.button} onPress={() => {
                    
                navigation.navigate('SecurityToken');
            }}>
                <Text style={ScreenStyles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            
      </View>
      <View style={ScreenStyles.containerLogo}></View>
    </View>
    </LinearGradient>
    )
}
const ScreenStyles = StyleSheet.create({
    container:{
    
        flex:1,
        
    },
    containerLogo: {
        flex:0.5
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
       
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontFamily:'Quicksand_400Regular',
        fontSize: 20,
        marginTop:28
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16 
    },
    button:{
        backgroundColor: '#6935D3',
        width: '100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontFamily:'Quicksand_700Bold',
        color: '#FFF',
        fontSize:18,
        
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
});

export default Login;