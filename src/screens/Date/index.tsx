import React, { useState } from 'react';
import {View,Text,TouchableOpacity,KeyboardAvoidingView,Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';


const DateScreen = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(today,'dd/MM/yyyy');
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [startedDate, setStartedDate] = useState('');

  function handleChangeStartDate() {
    setStartedDate(startDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
       
        style={{
          width: '100%',
          height: '100%',
          
        }}
      >
        <View>
          <View>
            <View>
              <TouchableOpacity
                style={ScreenStyles.inputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal animationType="slide" transparent={true} visible={openStartDatePicker}>
            <View style={ScreenStyles.centeredView}>
              <View style={ScreenStyles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy"
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: '#FFFFFF',
                    textHeaderColor: '#865FD6',
                    textDefaultColor: '#865FD6',
                    selectedTextColor: '#865FD6',
                    mainColor: '865FD6',
                    textSecondaryColor: '#865FD6',
                    format: startDate
                  }}
                  
                  
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: '#865FD6',marginTop:-30, }}>Fechar</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ScreenStyles = StyleSheet.create({
  
      inputBtn: {
        fontSize:16 ,
        borderRadius: 15,
        backgroundColor:'#865FD6',
        height: 50,
        paddingLeft: 8,
        justifyContent: "center",
        marginTop:-28
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
  // Outros estilos
});

export default DateScreen;
