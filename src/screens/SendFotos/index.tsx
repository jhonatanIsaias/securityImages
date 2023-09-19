import { View, Text, TouchableOpacity, TextInput,KeyboardAvoidingView,
    Platform,Modal} from "react-native";
import React from 'react';
import useState from 'react';
import { StyleSheet } from "react-native";
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { LinearGradient } from 'expo-linear-gradient';
//import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SetStateAction} from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate} from "react-native-modern-datepicker";




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
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "DD/MM/YYYY"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
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

                <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>


          <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 64 }}>
            <View>
              <TouchableOpacity
                style={ScreenStyles.inputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>

          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={ScreenStyles.centeredView}>
              <View style={ScreenStyles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date: SetStateAction<string>) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#FFFFFF",
                    textHeaderColor: "#865FD6",
                    textDefaultColor: "#865FD6",
                    selectedTextColor: "#865FD6",
                    mainColor: "865FD6",
                    textSecondaryColor: "#865FD6",
                    format: 'DD/MM/YYYY'
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: '#865FD6' }}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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