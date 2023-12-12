import { StyleSheet, Pressable, View, Text } from "react-native";
import { Colors } from "../../util/style";
function ButtonReminder({
  pressForMonth,
  pressForWeek,
  styleMonth,
  styleWeek,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={pressForWeek}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
          styleWeek && styles.pressstyle,
        ]}
      >
        <Text style={styles.text}>NAREDNA NEDELJA</Text>
      </Pressable>
      <Pressable
        onPress={pressForMonth}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
          styleMonth && styles.pressstyle,
        ]}
      >
        <Text style={styles.text}>NAREDNI MESEC</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  pressable: {
    backgroundColor: "white",
    padding: 8,
    width: "40%",
  },
  text: {
    color: Colors.primary700,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  pressstyle: {
    borderBottomWidth: 5,
    borderBottomColor: Colors.primary700,
  },
});

export default ButtonReminder;
