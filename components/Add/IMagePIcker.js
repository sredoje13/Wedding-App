import React from "react";
import { Button, View, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../../util/style";
import { VerifyPermission } from "./permission";

export default function ImagePickerExample({ AddImg }) {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
   const [cameraStatus,requestPermissionCamera]=ImagePicker.useCameraPermissions()
   
/*   async function VerifyPermission() {
    if (status.status === ImagePicker.PermissionStatus.UNDETERMINED) {
      const premissionResponse = await requestPermission();
      return premissionResponse.granted;
    }
    if (status.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert("Nemate Dozvolu!", "Morate dozvoliti koriscenje galerije");
      return false;
    }
    return true;
  } */
  const pickImage = async () => {
    const verify = await VerifyPermission( status,requestPermission(),"galerije");
    if (verify) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        AddImg(result.assets[0].uri);
      }
    } else {
      Alert.alert("Nemate dozvolu za koriscenje galerije!");
    }
  };
  async function takeImage() {
    const verify = await VerifyPermission( cameraStatus,requestPermissionCamera(),"kamere");
    if (verify) {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        quality:1
      })

      if (!result.canceled) {
        console.log(result.assets[0].uri)
        AddImg(result.assets[0].uri); 
      }
    } else {
      Alert.alert("Nemate dozvolu za koriscenje galerije!");
    }
  }

  return (
    <View style={styled.container}>
      <Button color={Colors.primary300} title="Galerija" onPress={pickImage} />
      <Button color={Colors.primary300} title="Kamera" onPress={takeImage} />
    </View>
  );
}
const styled = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
