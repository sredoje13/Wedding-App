import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { initdatabase, initdatabaseCouple } from "./util/database/sqldatabase";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./util/content/redux";
import NavigationScreens from "./screens/Navigation";

export default function App() {
  const [isinitdatabase, setisinitdatabase] = useState(false);
  const [fontsLoaded] = useFonts({
    "TitanOne-Regular": require("./assets/fonts/TitanOne-Regular.ttf"),
    "YatraOne-Regular": require("./assets/fonts/YatraOne-Regular.ttf"),
  });
  useEffect(() => {
    async function initalldb() {
      await initdatabaseCouple()
        .then(() => initdatabase())
        .then(() => setisinitdatabase(true));
    }
    initalldb();
  }, []);
  if (!isinitdatabase) {
    return <Text>Loading</Text>;
  }
  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationScreens />
      </Provider>
    </>
  );
}
