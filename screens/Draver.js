import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import CoupleScreen from "./CoupleScreen";
import FavoriteScreen from "./FavoriteScreen";
import RemanderScreen from "./RemanderScreen";
import HomeScreen from "./HomeScreen";
import Allitems from "./Allitems";
import { Colors } from "../util/style";

const Draver = createDrawerNavigator();
export const DrawerScreenss = () => (
  <Draver.Navigator
    screenOptions={{
      drawerIcon: () => <Ionicons name="menu" />,
      drawerStyle: {
        backgroundColor: Colors.primary700,
        width: 240,
      },
      drawerActiveTintColor: Colors.primary700,
      drawerActiveBackgroundColor: "white",
      drawerInactiveTintColor: "white",
      sceneContainerStyle: { backgroundColor: Colors.primary200 },
      headerStyle: {
        backgroundColor: Colors.primary700,
      },
      headerTintColor: Colors.primary100,
    }}
  >
    <Draver.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Pocetna strana",
        drawerIcon: () => <Ionicons name="home" size={25} />,
      }}
    />
    <Draver.Screen
      name="AllItems"
      component={Allitems}
      options={{
        drawerIcon: () => <Ionicons name="list" size={25} />,
        title: "Lista zadataka",
      }}
    />
    <Draver.Screen
      name="Remander"
      component={RemanderScreen}
      options={{
        drawerIcon: () => <Ionicons name="timer-outline" size={25} />,
        title: "Uskoro",
      }}
    />
    <Draver.Screen
      name="Couple"
      component={CoupleScreen}
      options={{
        drawerIcon: () => (
          <MaterialCommunityIcons name="account-heart" size={25} />
        ),
        title: "Vasi podaci",
      }}
    />
    <Draver.Screen
      name="FavScreen"
      component={FavoriteScreen}
      options={{
        drawerIcon: () => <MaterialCommunityIcons name="star" size={25} />,
        title: "Najvaznije",
      }}
    />
  </Draver.Navigator>
);
