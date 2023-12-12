import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Button from "../../UI/Button";
import { Colors } from "../../util/style";
function DetailsofCouple({ member, changeMember, deleteMember }) {
  console.log(member)

  const image = member?.picture ? (
    <Image style={style.image} source={{ uri: member.picture }} />
  ) : (
    <MaterialCommunityIcons name="account" size={150} color={Colors.gray200} />
  );
  if (!member) {
    return null;
  }
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>{image}</View>
      <Text style={style.text}>IME:{member.name}</Text>
      <Text style={style.text}>GODINE:{member.age}</Text>
      <Text style={style.text}>POL:{member.sex}</Text>
      <View style={style.buttonContainer}>
        <Button title="Izmenite" onPress={changeMember} />
        <Button title="Obrisite" onPress={deleteMember} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary700,
    borderWidth: 2,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginVertical: 20,
  },
  text: {
    marginVertical: 5,
    fontSize: 19,
    fontFamily: "TitanOne-Regular",
    color: Colors.primary700,
  },
});
export default DetailsofCouple;
