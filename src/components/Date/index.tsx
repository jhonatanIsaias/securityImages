import React, { useState } from 'react';
import {View,Platform,Pressable, TextInput} from 'react-native';
import { StyleSheet } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const DateScreen = () => {
 
  const [date,setDate] = useState(new Date());
  const [showPicker,setShowPicker] =useState(false);

  function formatDate (rawDate:Date):String{
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = (date.getMonth() +1).toString().padStart(2, '0');;
    let day = date.getDate().toString().padStart(2, '0');;
   
    return `${day}/${month}/${year}`
  }
  
  const toglleDatePicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange =({type}: DateTimePickerEvent,selectedDate:Date) => {
    if(type == "set"){
        const currentDate = selectedDate;
        setDate(currentDate);
    }
    if(Platform.OS === 'android'){
      toglleDatePicker();
      
    }
    else{
      toglleDatePicker();
    }
  }
  return(
    <View style={{ marginTop:20}}>
    {showPicker && (<DateTimePicker
      mode="date"
      display="spinner"
      value={date}
      positiveButton={{label: 'Confirmar', textColor: '#865FD6'}}
      onChange={onChange}
      />
      )}

      <Pressable onPress={toglleDatePicker}>
        <TextInput
        style={ScreenStyles.inputBtn}
        editable={false}
        value={formatDate(date)}
        
        />
      </Pressable>
    </View>
  )

  ;
};

const ScreenStyles = StyleSheet.create({
  
      inputBtn: {
        fontSize:16 ,
        borderRadius: 15,
        backgroundColor:'#865FD6',
        height: 50,
        paddingLeft: 8,
        justifyContent: "center",
        color:"#000000"
       
      },
      centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      modalView: {
        marginBottom:70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        height:"80%",
        width: "90%",
      }

});

export default DateScreen;
