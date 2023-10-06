import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "../../components/searchBar";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

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
        <View style={ScreenStyles.searchBarContainer}>
          <SearchBar style={ScreenStyles.searchBarInput}/>
        </View>
        <View style={ScreenStyles.photoContainer}>
        <Icon
        name="camera"
        type="font-awesome-5"
        size={100}
       style={{marginTop:"25%"}}
      />
         <TouchableOpacity style={ScreenStyles.button} onPress={() => {
                navigation.navigate('SendFotos');
            }}>
                <Text style={ScreenStyles.buttonText}>Tirar Foto</Text>
            </TouchableOpacity>
        </View>

    </LinearGradient>
    )
}
const ScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }, 
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // Cor de fundo da barra de pesquisa
        paddingHorizontal: 10,
        borderRadius: 8,
        margin: 10,
        marginTop:70
      },
      searchBarInput: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 10,
        fontSize: 16,
      },
      photoContainer:{
        backgroundColor:"#6935D3",
        width:"70%",
        height:"50%",
        alignSelf:"center",
        marginTop:"15%",
        borderRadius:20
      },
      button:{
        backgroundColor: '#865FD6',
        width: '70%',
        alignSelf:"center",
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
});

export default Home;