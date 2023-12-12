import { View,Text,StyleSheet } from "react-native";
import { Colors } from "../util/style";

function Title({props}) {
    return (
      <View>
        <Text style={style.title}>
            {props}
        </Text>
      </View>
    );
}
const style = StyleSheet.create({

    title: {
      fontSize: 35,
      textAlign: "center",
      color: Colors.primary700,
      fontFamily: "TitanOne-Regular",
      marginTop: 25,
    }})
export default Title;