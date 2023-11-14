import { View, Text, TouchableOpacity, TextInput} from "react-native";
import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
import DateScreen from "../../components/Date";
import { useNavigation } from "@react-navigation/native";


const SendFotos = ({route} : any) => {
    const navigation = useNavigation();
    const {photo} = route.params;
    const [clientToken,setClientToken] = useState('');
    const [tags,setTags] = useState('');
    const [description, setDescription] = useState('');
    const [date,setDate] = useState('');

    const [errorClientToken,setErrorClientToken] = useState('');
    const [errorTags,setErrorTags] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorDate,setErrorDate] = useState('');
    const [flag , setFlag] = useState(false);
    
    const handleDateSelect = (selectedDate:string) => {
        setDate(selectedDate);
    };
   
    const verifyForm = ()=>{
      return clientToken.trim() !== '' && tags.trim() !== '' && description.trim() !== '' &&  date.trim() !== ''
        
      
    }
 
   
    const sendRequestSaveImage = async (clientToken:string,tags:string,description:string,date:string,uri:string) =>{
     
    
        const file = new FormData();

        const imageConfig = {
          uri: uri,
          type: 'image/jpg',
          name: 'file.jpg',
        };
        
        file.append('file',imageConfig)
        file.append('clientToken',clientToken);
        file.append('tags',tags);
        file.append('description',description);
        file.append('date',date);
       
             
        return await fetch('http://192.168.0.103:3000',{
          method: 'POST',
          headers:{
            'Content-Type':'multipart/form-data'
          },
          body: file
          }).then(response => console.log(response));
        
     
 
    }
   
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
            <View style={{flex:0.2}}>
            </View>
            <View style={ScreenStyles.containerForm}>
                <Text style={ScreenStyles.title}>Cliente Token:</Text>
                <TextInput style={ScreenStyles.input} onChangeText={value => setClientToken(value)}></TextInput>
                
                <Text style={ScreenStyles.title}>Tags:</Text>
                <TextInput style={ScreenStyles.input} onChangeText={value => setTags(value)}></TextInput>
              
                <Text style={ScreenStyles.title}>Descrição:</Text>
                <TextInput style={ScreenStyles.inputDesc} onChangeText={value => setDescription(value)}></TextInput>
                
                <DateScreen onDateSelect={handleDateSelect} />
                
                
                </View>
            <View style={ScreenStyles.containerButtons}>
        <TouchableOpacity disabled={!verifyForm()}   style={[
    ScreenStyles.button,
    { backgroundColor: !verifyForm() ? '#A7A7A7' : '#865FD6' },
  ]} onPress={  () =>  {
          sendRequestSaveImage(clientToken,tags,description,date,photo);
          navigation.navigate('Home');
        }}>
          <Text style={ScreenStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ScreenStyles.button} onPress={() => {}}>
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
        flex:1,
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
        padding: 16, // Em vez de 'paddingStart' e 'paddingEnd'
    },
    input:{
        paddingLeft:10,
        borderRadius:15,
        backgroundColor:'#865FD6',
        height:30,
        marginBottom: 12,
        fontSize:16, 
        textAlign:"left"
    },
    inputDesc:{
        backgroundColor:'#865FD6',
        borderRadius:15,
        height:100,
        marginBottom: 12,
        fontSize:16 
    },
    title:{
        fontFamily:'Quicksand_400Regular',
        fontSize: 20,
        marginTop:28
    },
    containerButtons:{
        flexDirection: 'row'
    },
    dateComponent:{
        width:350,
        color: '#865FD6',
        backgroundColor: '#FFFFF'
    },
    textHeader: {
        fontSize: 36,
        marginVertical: 60,
        color: "#111",
      },
      textSubHeader: {
        fontSize: 25,
        color: "#111",
      },
      inputBtn: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#222",
        height: 50,
        paddingLeft: 8,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 14,
      },
      centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      modalView: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 35,
        width: "90%",
      }
});

export default SendFotos;
