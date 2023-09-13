import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const ScreenStyles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    containerLogo: {
        flex: 0.5
    },
    button:{
        backgroundColor: '#6935D3',
        width: '80%',
        borderRadius:10,
        paddingVertical:8,
        marginTop:14,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'10%'
    },
    buttonText:{
        fontFamily:'Quicksand_700Bold',
        color: '#FFF',
        fontSize:18,
        
    },
    Text: {
        textAlign: "center"
    }
});

const InicialPage = () => {
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
    return (
        <LinearGradient colors={['#9370DB', '#C7B6EA']}style={{ flex: 1 }}>
        <View style={ScreenStyles.Container}>
            <View style={ScreenStyles.containerLogo}></View>
            <View>
                <TouchableOpacity  style={ScreenStyles.button}  onPress={()=>navigation.navigate('Login')}>
                    <Text style={ScreenStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={ScreenStyles.button}>
                    <Text style={ScreenStyles.buttonText}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    )
}



export default InicialPage;