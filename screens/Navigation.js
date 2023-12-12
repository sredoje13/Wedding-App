import { Colors } from "../util/style";
import UpdateCouple from "./UpdateCouple";
import { DrawerScreenss } from "./Draver";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddScreen from "./AddFirst";
import AddItemScreen from "./AddItemScreen";

const Stack = createNativeStackNavigator();

export default function NavigationScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: Colors.gray200 },
          headerStyle: {
            backgroundColor: Colors.primary100,
          },
          headerTintColor: Colors.primary600,
        }}
      >
        <Stack.Screen
          name="Items"
          component={DrawerScreenss}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          options={{
            title: "",
          }}
          component={AddScreen}
        />
        <Stack.Screen
          name="UpdateCouple"
          options={{
            title: "",
          }}
          component={UpdateCouple}
        />

        <Stack.Screen name="Additem" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
