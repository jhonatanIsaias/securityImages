import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ou importe os ícones do React Icons

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="ios-home" size={24} color="black" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="ios-settings" size={24} color="black" />
        <Text style={styles.text}>Configurações</Text>
      </TouchableOpacity>
      {/* Adicione mais itens de menu conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 18,
  },
});

export default Sidebar;
