import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../util/style";
import Button from "../../UI/Button";

function Calendarpicker({ pressButton }) {
  const [date, setDate] = useState(null);
  function dateChange(event) {
    setDate(event);
  }
  const pressBtn = () => {
    if (date) {
      pressButton(date);
    } else {
      Alert.alert(
        "Izaberite datum",
        "Izaberite datum pritiskom na zejeni na kalendaru!"
      );
    }
  };
  return (
    <View style={styles.container}>
      <CalendarPicker
        minDate={new Date()}
        onDateChange={dateChange}
        textStyle={{ color: Colors.primary700 }}
        selectedDayStyle={{ backgroundColor: Colors.primary700 }}
        selectedDayTextStyle={{ color: "white" }}
        monthTitleStyle={{
          fontWeight: "bold",
        }}
        headerWrapperStyle={{
          backgroundColor: "white",
          width: "100%",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        startFromMonday={true}
      />
      <Button
        onPress={pressBtn}
        style={{ marginTop: 10 }}
        title="Dodaj datum"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary100,
    borderRadius: 15,
    margin: 10,
  },
});

export default Calendarpicker;
