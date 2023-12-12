import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { Colors } from "../../util/style";
function Couple(props) {
  const datas = [
    {
      data: "Nasa aplikacija se vlo lako koristi! Najbitnije je da shvatite da smo tu da vam pomognemo.",
      id: 1,
    },
    {
      data: "Mozete upisati podatke vas i vaseg partnera/partnerke! To mozete izmeniti ili obrisati na strani 'Licni podaci'",
      id: 2,
    },
    { data: "Udjite na listu zadataka i magija pocinje!", id: 3 },
    { data: "Izaberite zadatke iz nase liste,ako zelite i upisite rok", id: 4 },
    { data: "Sasatavite sami svoje zadatke sa rokom", id: 5 },
    {
      data: "Na strani 'Uskoro' nalaze se zadaci koje treba da obavite za mesec, dve ili nedelju dana, u zavisnosti kako izaberete",
      id: 6,
    },
    { data: "Nista lakse i brze!", id: 7 },
  ];
  const renderItem = ({ item }) => (
    <View style={style.textContainer}>
      <Ionicons name="star" size={20} color={Colors.gray200} />
      <Text style={style.text}>{item.data}</Text>
    </View>
  );
  return (
    <View style={style.container}>
      <Text style={style.title}>UPUTSTVO ZA UPOTREBU</Text>
      <FlatList
        scrollEnabled={false}
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 70,
  },
  title: {
    fontFamily: "TitanOne-Regular",
    fontSize: 30,
    color: Colors.primary700,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: Colors.primary700,
    textAlign: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    elevation: 5,
  },
});
export default Couple;
