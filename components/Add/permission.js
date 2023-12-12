import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
export async function VerifyPermission(n,func,x) {
    if (n.status === ImagePicker.PermissionStatus.UNDETERMINED) {
      const premissionResponse = await func;
      return premissionResponse.granted;
    }
    if (n.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert("Nemate Dozvolu!", `Morate dozvoliti koriscenje ${x}`);
      return false;
    }
    return true;
  }