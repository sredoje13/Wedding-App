import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../UI/Button";
import { useEffect, useState } from "react";
import About from "../components/Home/About";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../UI/IconButton";
import { Colors } from "../util/style";
import { getalltasks } from "../util/database/sqldatabase";
import { useRef } from "react";
import { getCouple } from "../util/database/sqldatabase";
import { actions } from "../util/content/redux";
import Couple from "../components/Home/Couple";
import Title from "../UI/Title";
function HomeScreen({ navigation }) {
  const ref = useRef();
  const screenDimensions = Dimensions.get("screen");
  const firstcouple = useSelector((state) => state.Wedding.first);
  const secondcouple = useSelector((state) => state.Wedding.second);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllTasks() {
      const allTasks = await getalltasks();
      dispatch(actions.getAllTasks(allTasks));
    }
    getAllTasks();
  }, []);
  useEffect(() => {
    async function getall() {
      const couples = await getCouple();
      if (couples.length === 0) {
        dispatch(actions.getallmembers({ first: null, second: null }));
      } else {
        let first;
        let second;
        const findIndexofFirst = couples.findIndex(
          (item) => item.numofMember === 1
        );
        const findIndexofSecond = couples.findIndex(
          (item) => item.numofMember === 2
        );
        if (findIndexofFirst !== -1) {
          first = couples[findIndexofFirst];
        }
        if (findIndexofSecond !== -1) {
          second = couples[findIndexofSecond];
        }
        dispatch(actions.getallmembers({ first: first, second: second }));
      }
    }
    getall();
  }, []);

  function navigatetoAdd() {
    navigation.navigate("Add");
  }

  const AboutHandler = () => {
    ref.current.scrollTo({
      x: 0,
      y: screenDimensions.height - 300,
      animated: true,
    });
  };
  const CoupleHandler = () => {
    ref.current.scrollTo({
      x: 0,
      y: screenDimensions.height * 2 - 700,
      animated: true,
    });
  };

  let content = (
    <IconButton
      name="add-circle-outline"
      onPress={navigatetoAdd}
      size={135}
      color="white"
    />
  );
  if (firstcouple && secondcouple) {
    content = (
      <Image source={require("../util/images/savee.png")} style={style.image} />
    );
  }
  return (
    <View style={style.container}>
      <ScrollView ref={ref}>
        <View style={style.buttonContainer}>
          <Button style={style.button} onPress={AboutHandler} title="O nama" />
          <Button
            style={style.button}
            onPress={CoupleHandler}
            title="Uputstvo"
          />
        </View>
        <Title props="DOBRODOSLI U NASU APLIKACIJU " />
        <View style={style.imgContainer}>
          {content}
          {(!firstcouple || !secondcouple) && (
            <Text style={style.textforadd}>KLIKNITE I DODAJTE PAR</Text>
          )}
        </View>
        <Text style={style.text}>
          Nasa aplikacija je napravljena da olaksa organizaciju vencanja svim
          buducim bracnim parovima{" "}
        </Text>
        <About />
        <Couple />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    textAlign: "center",
    color: Colors.primary700,
    fontSize: 28,
    backgroundColor: "white",
    padding: 8,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    fontFamily: "YatraOne-Regular",
  },
  image: {
    height: 400,
    width: 400,
  },
  imgContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  button: {
    width: "40%",
  },
  textforadd: {
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.primary600,
  },
});

export default HomeScreen;
