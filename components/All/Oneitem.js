import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "../../UI/Button";
import { Colors } from "../../util/style";
import IconButton from "../../UI/IconButton";
import { useDispatch } from "react-redux";
import { actions } from "../../util/content/redux";
import { deleteOneTask, updateFavitems } from "../../util/database/sqldatabase";
import { useEffect, useState } from "react";
function Oneitem({ item, onChage }) {
  const[isdisabled,setIsDIsabled]=useState(false)
  useEffect(()=>{
 setTimeout(()=>{
   setIsDIsabled(false)
 },2000)
  },[isdisabled])
  const dispatch = useDispatch();
 async function onPressStar() {
    setIsDIsabled(true)
     await updateFavitems(item.id,item.important)
     dispatch(actions.updateFavitem(item.id))
  }
  function onDeleteFromList() {
    Alert.alert(
      `OBRISITE ZADATAK ${item.name}`,
      "da li ste sigurni da zelite da obrisete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await deleteOneTask(item.id);
            dispatch(actions.deleteTask(item.id));
          },
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <View style={styles.starContainer}>
         <IconButton isdisabled={isdisabled} name={item.important?"star":"star-outline" }size={22} onPress={onPressStar} />
          <View>
          <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Izmenite" onPress={onChage} />
        <Button
          style={styles.button}
          title="Obrisite"
          onPress={onDeleteFromList}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
  },
  buttonContainer: {
    flex: 1,
  },
  itemcontainer: {
    flex: 2,
  },
  name: {
    fontWeight: "bold",
    color: Colors.primary700,
    fontSize: 20,
  },
  date: {
    color: Colors.primary500,
  },
  button: {
    margin: 3,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -15,
  },
});
export default Oneitem;
