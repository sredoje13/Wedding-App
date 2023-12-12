import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";
function IconButton({ name, size, color, onPress, style,isdisabled }) {
  return (
    <Pressable
    disabled={isdisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && styles.pressed,
      ]}
    >
      <View>
        <Ionicons style={styles.icon} name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    padding: 8,
    margin: 5,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
