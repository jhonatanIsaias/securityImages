import { View, Text, TouchableOpacity, TextInput} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from'@react-native-community/datetimepicker';
import {useState, useEffect} from "react";

const SendFotos = () => {

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
   // const [date, setDate] = useState(new Date());
    //const [showPicker,setShowPicker] = useState(false);
    return (
        <LinearGradient colors={['#9370DB', '#C7B6EA']} style={{ flex: 1 }}>
            <View style={{flex:0.2}}>
            </View>
            <View style={ScreenStyles.containerForm}>
                <Text style={ScreenStyles.title}>Cliente Token:</Text>
                <TextInput style={ScreenStyles.input}></TextInput>
                <Text style={ScreenStyles.title}>Tags:</Text>
                <TextInput style={ScreenStyles.input}></TextInput>
                <Text style={ScreenStyles.title}>Descrição:</Text>
                <TextInput style={ScreenStyles.inputDesc}></TextInput>
                <Text style={ScreenStyles.title}>Data:</Text>
               
            </View>
            <View style={ScreenStyles.containerButtons}>
                <TouchableOpacity style={ScreenStyles.button} onPress={() => {
                    navigation.navigate('SecurityToken');
                }}>
                    <Text style={ScreenStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ScreenStyles.button} onPress={() => {
                    navigation.navigate('SecurityToken');
                }}>
                    <Text style={ScreenStyles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}
const ScreenStyles = StyleSheet.create({
    photoContainer: {
        flex:1,
        backgroundColor: "#6935D3",
        width: '50%',
        height: '70%',
        alignSelf: "center",
        marginTop: "15%",
        borderRadius: 20
    },
    button: {
        backgroundColor: '#865FD6',
        width: '30%',
        alignSelf: "center",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        marginRight: 20,
        marginLeft:50,
        marginBottom:50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Quicksand_700Bold',
        color: '#FFF',
        fontSize: 18,

    },
    containerForm:{
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    input:{
        paddingLeft:10,
        borderRadius:15,
        backgroundColor:'#865FD6',
        height:30,
        marginBottom:2,
        fontSize:16 
    },
    inputDesc:{
        backgroundColor:'#865FD6',
        borderRadius:15,
        height:100,
        marginBottom:2,
        fontSize:16 
    },
    title:{
        fontFamily:'Quicksand_400Regular',
        fontSize: 20,
        marginTop:28
    },
    containerButtons:{
        flexDirection: 'row'
    }
});

export default SendFotos;