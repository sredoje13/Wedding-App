import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Colors } from "../../util/style";
import { FlatList } from "react-native";

function About(props) {
  const datas = [
    {
      id: "text1",
      style: style.text1,
      data: "U nasoj aplikaciji je moguce kreirati listu obaveza za vase vencanje sa rokom do kad zelite da ih zavrsite",
    },
    {
      id: "text2",
      style: style.text2,
      data: "Mi smo kreirali listu obaveza koje mozete ekirati i plus dodati nesto sto ste zamislili",
    },
    {
      id: "text3",
      data: "Tu smo da Vam pomognemo da pretvorite vase vencanje u BAJKU!",
      style: style.text3,
    },
  ];
  const renderItem = ({ item }) => (
    <View style={style.textContainer}>
      <Text style={[style.text, item.style]}>{item.data}</Text>
    </View>
  );
  return (
    <View style={style.container}>
      <Text style={style.title}>O NAMA</Text>
      <FlatList
        scrollEnabled={false}
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Text style={[style.text, style.text1]}></Text>
      <Text style={[style.text, style.text2]}> </Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    padding: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  textContainer: {
    backgroundColor: Colors.primary100,
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  text1: {
    color: Colors.primary500,
  },
  text2: { color: Colors.primary600 },
  text3: {
    fontWeight: "bold",
    color: Colors.primary700,
  },
  title: {
    fontFamily: "TitanOne-Regular",
    fontSize: 30,
    color: Colors.primary700,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default About;
