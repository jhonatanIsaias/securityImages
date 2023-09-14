import { View, Text,Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';


const ConnectDataBase = () => {

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
    
    return (
        <LinearGradient colors={['#9370DB', '#C7B6EA']} style={{ flex: 1 }}>
             <View style={{flex: 1}}>
             
             </View>
        </LinearGradient>
    )
}
const ScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default ConnectDataBase;