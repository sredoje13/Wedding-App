import { StyleSheet, Text } from "react-native";
import { TextInput, View } from "react-native";
import { Colors } from "../../util/style";
function Inputitem({
  onChange,
  inputValidators,
  label,
  placeholder,
  isvalid,
  value,
}) {
  const styling = [isvalid ? styled.textInput : styled.errorInput];
  return (
    <View style={styled.inputContainer}>
      <Text style={styled.inputLabel}>{label}</Text>
      <TextInput
        style={styling}
        value={value}
        onChangeText={onChange}
        {...inputValidators}
        placeholder={placeholder}
      />
      {!isvalid && (
        <Text style={styled.errorText}>
          Obevezno je popuniti {label.slice(0, -1)}
        </Text>
      )}
    </View>
  );
}
const styled = StyleSheet.create({
  inputContainer: {
    padding: 10,
    margin: 10,
  },
  inputLabel: {
    color: Colors.primary700,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  textInput: {
    backgroundColor: Colors.primary200,
    height: 50,
    borderRadius: 5,
    padding: 10,
    color: Colors.primary700,
  },
  errorInput: {
    backgroundColor: Colors.error100,
    height: 50,
    borderRadius: 5,
    padding: 10,
    borderColor: Colors.error200,
    borderWidth: 1,
  },
  errorText: {
    color: Colors.error200,
    fontSize: 14,
  },
});
export default Inputitem;
