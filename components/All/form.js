import { View, Text, TextInput } from "react-native";
import IconButton from "../../UI/IconButton";
import { StyleSheet } from "react-native";
import { Colors } from "../../util/style";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";

function Form({
  onChange,
  callCalendar,
  defaultvalue,
  addToDB,
  isChange,
  changeValues,
}) {
  const [itemInput, seetInput] = useState({
    value: "",
    isValid: true,
  });
  useEffect(() => {
    seetInput((curr) => ({
      isValid: true,
      value: isChange ? defaultvalue : "",
    }));
  }, [defaultvalue, isChange]);

  const onInputChange = (event) => {
    if (event.trim() === "") {
      seetInput({ name: "", isValid: false });
    } else {
      seetInput({ value: event, isValid: true });
    }
    onChange(event);
  };
  const addTODB = () => {
    addToDB();
    seetInput({
      value: "",
      isValid: true,
    });
  };
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text style={style.label}> POPUNITE PODATKE</Text>
      <View style={style.container}>
        <View style={{ flex: 1 }}>
          <Text style={style.label}>Ime</Text>
          <TextInput
            style={[
              style.input,
              itemInput.isValid ? style.notErrorInput : style.errorInput,
            ]}
            defaultValue={itemInput.value}
            onChangeText={(text) => onInputChange(text)}
          />
        </View>
        <View>
          <Text style={style.label}>Datum</Text>
          <IconButton
            style={style.iconButton}
            onPress={callCalendar}
            name="calendar"
            size={25}
            color={Colors.primary600}
          />
        </View>
      </View>
      <Button
        style={style.button}
        title={isChange ? "IZMENITE STAVKU" : "DODAJTE NA LISTU"}
        onPress={isChange ? changeValues : addTODB}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  label: {
    color: Colors.primary700,
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    padding: 13,
    marginTop: 0,
    marginRight: 35,
    borderRadius: 5,
  },
  notErrorInput: {
    backgroundColor: "white",
  },
  button: {
    marginVertical: 15,
    width: "50%",
  },
  iconButton: {
    backgroundColor: Colors.primary300,
  },
  errorInput: {
    backgroundColor: Colors.error100,
    borderWidth: 2,
    borderColor: Colors.error200,
  },
});
export default Form;
