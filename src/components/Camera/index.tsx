import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'expo-camera';
import { useNavigation } from "@react-navigation/native";

export default function OpenCamera() {
  let camera : any;
  camera = Camera;
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  //const [camera, setCamera] = useState<any>(null);
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

  if (hasPermission === null) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }
  if (hasPermission === false) {
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
          <Button title="tirar foto novamente" onPress={() => setPhoto(null)} />
          <Button title="Enviar" onPress={() => navigation.navigate('SendFotos',{photo:photo})} />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={ref => camera = ref}>
            <View style={{flex:10}}>

            </View>
            <View
              style={{
                flex: 1,
                
                backgroundColor: 'transparent',
               
              }}
            >
              <Button
              
                title="Flip"
                onPress={() => {
                  setType(
                    type === camera.Constants.Type.back
                      ? camera.Constants.Type.front
                      : camera.Constants.Type.back
                  );
                }}
              />
              <Button title="Tirar foto" onPress={snap} />
            </View>
          </Camera>
        </SafeAreaView>
      )}
    </View>

    
  );
}
