import Oneitem from "./Oneitem";
import { insertalltasks, updateOneTask } from "../../util/database/sqldatabase";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { datas } from "../../models/datas";
import Calendarpicker from "./CalendarPicker";
import { Colors } from "../../util/style";
import OneItemDUmmy from "./OneItemDUmmy";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../../UI/Title";
import { getFullDate } from "../../util/getDate";
import IconButton from "../../UI/IconButton";
import Form from "./form";
import { Dimensions } from "react-native";
import { actions } from "../../util/content/redux";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
function LIstofitems(props) {
  const dimenzions = Dimensions.get("screen");
  const scroll = useRef();
  const tasks = useSelector((state) => state.Wedding.tasks);
  const [openForm, setOpenForm] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [oneTask, setOneTask] = useState(null);
  const [date, setDate] = useState(null);
  const [changedvalue, setChangeValue] = useState(false);
  const [defaultName, setDefaultName] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {}, [oneTask]);
  function ismytask(n) {
    if (oneTask?.id && n.id === oneTask.id) {
      return true;
    } else {
      return false;
    }
  }
  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1.name === object2.name;
      });
    });
  }
  let arr = getDifference(datas, tasks);

  const addToDB = async ({ isfilt }) => {
    if (oneTask && oneTask?.name && date) {
      const filtering = arr.some(
        (item) => item.name.toUpperCase() === oneTask.name.toUpperCase()
      );
      if (filtering && isfilt) {
        Alert.alert(
          `Vec postoji ${oneTask.name} kao predlog`,
          "Pogledajte nase predloge"
        );
      } else {
        const itemdata = {
          name: oneTask.name,
          date: date.toISOString().slice(0, 10),
        };
        const inserted = await insertalltasks(itemdata);
        dispatch(actions.insertTask({ ...itemdata, id: inserted.insertId }));
        setOneTask(null);
        setDate(null);
      }
    } else {
      Alert.alert("Morate uneti datum ili dati ime stavki!");
    }
  };

  const callCalendar = () => {
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
    setOpenCalendar((curr) => !curr);
  };
  function pressBtn(date) {
    setDate(date);
    setOpenCalendar(false);
  }

  const changeItemsINDB = async () => {
    if (oneTask.name.trim() !== "") {
      const filtering = arr.some(
        (item) => item.name.toUpperCase() === oneTask.name.toUpperCase()
      );
      if (filtering) {
        Alert.alert(
          `Vec postoji ${oneTask.name} kao predlog`,
          "Pogledajte nase predloge"
        );
      } else {
        const values = {
          name: oneTask.name,
          date: date ? getFullDate(date) : oneTask.date,
        };
        await updateOneTask(oneTask.id, values);
        dispatch(
          actions.updateTask({
            id: oneTask.id,
            values: { ...values, id: oneTask.id },
          })
        );
      }
    } else {
      Alert.alert("Popunite NAZIV!");
    }
  };
  const renderDUmmyItem = ({ item }) => (
    <OneItemDUmmy
      isMyTask={ismytask(item)}
      myDate={date ? getFullDate(date) : null}
      addItem={() => addToDB({ isfilt: false })}
      onPress={() => {
        setOneTask(item);
        setOpenCalendar((curr) => !curr);
      }}
      item={item}
    />
  );
  const pressOnChangeSQL = (item) => {
    setChangeValue(true);
    setDefaultName(item.name);
    setOpenForm(true);
    setOneTask(item);
    scroll.current.scrollTo({ x: 0, y: dimenzions.height * 2, animated: true });
  };
  const renderSQLItems = ({ item }) => (
    <Oneitem item={item} onChage={() => pressOnChangeSQL(item)} />
  );
  let content = (
    <View>
      <Title props="TRENUTNO NEMATE NI JEDNU STAVKU" />
      <Text
        style={{ color: Colors.primary700, textAlign: "center", fontSize: 25 }}
      >
        Dodajte stavku
      </Text>
    </View>
  );
  if (tasks.lengt !== 0) {
    content = (
      <FlatList
        scrollEnabled={false}
        data={tasks}
        style={styles.flat2}
        renderItem={renderSQLItems}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return (
    <View>
      <ScrollView ref={scroll} style={styles.container}>
        {openCalendar && <Calendarpicker pressButton={pressBtn} />}
        <Title props="NASI PREDLOZI" />
        <FlatList
          style={styles.flat1}
          data={arr}
          renderItem={renderDUmmyItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
        <Title props="VASA LISTA" />

        <IconButton
          onPress={() => {
            setChangeValue(false);
            scroll.current.scrollTo({
              x: 0,
              y: dimenzions.height * 2,
              animated: true,
            });
            setOpenForm(true);
          }}
          name="add-circle-outline"
          size={100}
          color={Colors.gray200}
        />
        {content}
        {openForm && (
          <Form
            isChange={changedvalue}
            changeValues={changeItemsINDB}
            defaultvalue={defaultName}
            addToDB={() => addToDB({ isfilt: true })}
            callCalendar={callCalendar}
            onChange={(event) => {
              setOneTask((curr) => ({ ...curr, name: event }));
            }}
          />
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  flat1: {
    margin: 20,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    color: Colors.primary600,
    fontFamily: "TitanOne-Regular",
    marginTop: 25,
  },
  flat2: {
    backgroundColor: Colors.primary100,
    marginVertical: 20,
  },
});

export default LIstofitems;
