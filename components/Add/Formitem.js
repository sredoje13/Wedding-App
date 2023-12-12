import React from "react";
import { View, Text, Alert } from "react-native";
import Inputitem from "./Inputitem";
import Button from "../../UI/Button";
import { StyleSheet } from "react-native";
import ImagePickerExample from "./IMagePIcker";
import { Colors } from "../../util/style";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
function Formitem({ AddAll, defvalue }) {
  console.log(defvalue)
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null || defvalue?.picture);

  const [value, setValue] = useState(defvalue?.sex || "MUSKO");
  const [items, setItems] = useState([
    { label: "MUSKO", value: "MUSKO" },
    { label: "ZENSKO", value: "ZENSKO" },
  ]);

  const [inputValues, setINputValues] = useState({
    name: { value: defvalue?.name || "", isvalid: true },
    year: { value: defvalue?.age.toString() || "", isvalid: true },
  });
  function changeInput(key, enteredinput) {
    setINputValues((current) => {
      return {
        ...current,
        [key]: {
          value: enteredinput,
          isvalid: enteredinput.trim() !== "" ? true : false,
        },
      };
    });
  }

  function AddImg(val) {
    setImage(val);
  }
  function addMember() {
    if (inputValues.name.isvalid && inputValues.year.isvalid) {
      AddAll({
        name: inputValues.name.value,
        age: Number(inputValues.year.value),
        picture: image,
        sex: value,
      });
    } else {
      Alert.alert("Popunite sva polja!!!");
    }
  }

  return (
    <View>
      <Inputitem
        value={inputValues.name.value}
        isvalid={inputValues.name.isvalid}
        label="IME*"
        onChange={changeInput.bind(this, "name")}
        inputValidators={{
          maxLength: 20,
        }}
      />
      <Inputitem
        value={inputValues.year.value}
        label="GODINE*"
        isvalid={inputValues.year.isvalid}
        onChange={changeInput.bind(this, "year")}
        inputValidators={{
          maxLength: 3,
          keyboardType: "number-pad",
        }}
      />
      <Text style={styled.text}>IZABERITE POL*</Text>
      <View style={styled.pickerContainer}>
        <DropDownPicker
          style={styled.picker}
          listMode="SCROLLVIEW" //moram dodati ovoo!!!!
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{ color: Colors.primary700 }}
          listItemContainerStyle={{ backgroundColor: Colors.primary500 }}
          listItemLabelStyle={{ color: "white" }}
        />
      </View>
      <Text style={styled.add}>DODAJTE SLIKU</Text>
      <ImagePickerExample AddImg={AddImg} />
      <Button
        title="Dodaj"
        disabled={
          inputValues.name.value.trim() === "" || inputValues.year.value === 0
        }
        style={styled.addButton}
        onPress={addMember}
      />
    </View>
  );
}
const styled = StyleSheet.create({
  picker: {
    backgroundColor: Colors.primary200,
    borderColor: "",
    color: "black",
    color: Colors.primary600,
    borderRadius: 5,
    height: 50,
  },

  text: {
    color: Colors.primary700,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 5,
  },
  pickerContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  add: {
    color: Colors.primary700,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  addButton: {
    margin: 20,
  },
});

export default Formitem;
