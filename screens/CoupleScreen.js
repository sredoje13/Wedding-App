import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DetailsofCouple from "../components/couple/DetailsofCouple";
import { deleteCouple } from "../util/database/sqldatabase";
import { actions } from "../util/content/redux";
import { Colors } from "../util/style";
import { FlatList } from "react-native";
import Title from "../UI/Title";
function CoupleScreen({ navigation }) {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.Wedding);
  const member = [members.first, members.second];
  const deleteMember = (value) => {
    Alert.alert(
      "OBRISITE JEDNOG CLANA",
      "da li ste sigurni da zelite da obrisete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await deleteCouple(value.item.id);
            dispatch(actions.deleteonemember(value.item.numofMember));
          },
        },
      ]
    );
  };
  if (!members.first && !members.second) {
    return (
      <View style={styles.title}>
        <Title props="NEMATE DODAT PAR" />
        <Pressable onPress={() => navigation.navigate("Add")}>
          <Text style={styles.press}>Idite na stranicu da dodate</Text>
        </Pressable>
      </View>
    );
  }
  const memberfunction = () => {
    let members = [];
    for (let onemember of member) {
      if (onemember !== undefined) {
        members.push(onemember);
      }
    }
    return members;
  };
  const renderitem = (itemData) =>
    itemData ? (
      <DetailsofCouple
        deleteMember={() => deleteMember(itemData)}
        changeMember={() => {
          navigation.navigate("UpdateCouple", { member: itemData.item });
        }}
        member={itemData.item}
      />
    ) : null;
  return (
    <View style={styles.container}>
      <Text></Text>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item?.id || 3.7876}
        renderItem={renderitem}
        data={memberfunction()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: {
    flex: 1,
  },
  title: {
    marginTop: 150,
  },
  press: {
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: Colors.primary600,
  },
});
export default CoupleScreen;
