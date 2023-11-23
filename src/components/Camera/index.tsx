import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

export default function OpenCamera() {
  let camera: any;
  camera = Camera;
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [photo, setPhoto] = useState<any>(null);
  const [type, setType] = useState(camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (camera) {
      const photoData = await camera.takePictureAsync();
      setPhoto(photoData.uri);
    }
  };

  const handleRetake = () => {
    setPhoto(null);
  };

  const handleSend = () => {
    navigation.navigate('SendFotos', { photo: photo });
  };

  if (hasPermission === null || hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {photo ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: photo }} style={{ flex: 1 }} />
          
          <TouchableOpacity style={styles.button} onPress={handleRetake}>
            <Feather name="rotate-cw" size={24} color="white" />
            <Text style={styles.buttonText}>Tirar Novamente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Feather name="send" size={24} color="white" />
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={(ref) => (camera = ref)}>
            <View style={{ flex: 1 }} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.flipButton} onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
                <Feather name="rotate-cw" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.captureButton} onPress={snap}>
                <View style={styles.captureIcon} />
              </TouchableOpacity>
            </View>
          </Camera>
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  flipButton: {
    padding: 15,
  },
  captureButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginRight: 140,
    borderWidth: 2,
    borderColor: 'transparent', // removido "none"
  },
  captureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#865FD6',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#865FD6',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});
