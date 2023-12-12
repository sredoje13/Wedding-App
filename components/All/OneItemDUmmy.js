import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Button from "../../UI/Button";
import IconButton from "../../UI/IconButton";
import { Colors } from "../../util/style";
function OneItemDUmmy({ item, onPress, addItem, isMyTask, myDate, isRecent }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {!isMyTask && (
          <IconButton
            name="calendar"
            size={25}
            color={Colors.primary700}
            onPress={onPress}
          />
        )}
        {isMyTask && <Text style={styles.datetext}>{myDate}</Text>}
        {!isRecent && (
          <Button
            style={styles.button}
            styletitle={{ fontSize: 10 }}
            title="DODAJ"
            onPress={addItem}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "YatraOne-Regular",
    color: Colors.primary700,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: 45,
  },
  datetext: {
    color: Colors.primary700,
    fontSize: 14,
    marginRight: 0,
    marginLeft: -20,
  },
});

export default OneItemDUmmy;
