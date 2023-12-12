import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { actions } from "../../util/content/redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import Formitem from "./Formitem";
import { insertCouple, updateCouple } from "../../util/database/sqldatabase";
import { Colors } from "../../util/style";
import { useSelector } from "react-redux";
import { AddandUpdate } from "../../util/addandupdatefunction";
import Title from "../../UI/Title";
function AddPage({ defvalue }) {
  const route = useRoute();
  const couplefirst = useSelector((state) => state.Wedding.first);
  const couplesecond = useSelector((state) => state.Wedding.second);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="POCETNA" onPress={() => navigation.navigate("Home")} />
      ),
    });
  });

  async function AddFirst(value) {
    await AddandUpdate(
      value,
      navigation,
      route,
      1,
      (val) => dispatch(actions.addFirstMember(val)),
      (val) => dispatch(actions.addFirstMember(val))
    );
  }
  async function AddSecond(value) {
    await AddandUpdate(
      value,
      navigation,
      route,
      2,
      (val) => dispatch(actions.addSecondMember(val)),
      (val) => dispatch(actions.addSecondMember(val))
    );
  }
  const text = (n) => <Title props={`DODAJTE ${n}. CLANA`} />;
  let istect = couplefirst && couplesecond && !route?.params;
  return (
    <View>
      <ScrollView>
        {(!couplefirst || route?.params?.member?.numofMember === 1) && (
          <View>
            {text(1)}
            <Formitem defvalue={defvalue} AddAll={AddFirst} />
          </View>
        )}
        {(!couplesecond || route?.params?.member.numofMember === 2) && (
          <View>
            {text(2)}
            <Formitem defvalue={defvalue} AddAll={AddSecond} />
          </View>
        )}
        {istect && (
          <Title
            props="  Uspesno ste dodali clanove,vratite se na 
          pocetnu stranu"
          />
        )}
      </ScrollView>
    </View>
  );
}
const styled = StyleSheet.create({
  title: {
    fontFamily: "TitanOne-Regular",
    color: Colors.primary700,
    fontSize: 30,
    textAlign: "center",
    marginTop: 50,
  },

  pressed: {
    opacity: 0.7,
  },

  presstext: {
    textAlign: "center",
    color: Colors.primary700,
    textDecorationLine: "underline",
  },
});

export default AddPage;
