import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Title from "../UI/Title";
import OneItemDUmmy from "../components/All/OneItemDUmmy";
import ButtonReminder from "../components/Reminder/ButtonReminder";
import { getRecentDate } from "../util/getDate";
import { getalltasks } from "../util/database/sqldatabase";
import { StyleSheet } from "react-native";
function RemanderScreen(props) {
  const [isWeek, setisweek] = useState(true);
  const alltasks = useSelector((state) => state.Wedding.tasks);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    pressForWeek();
  }, []);
  function pressForMonth() {
    setisweek(false);
    const tasskk = alltasks.filter((item) => getRecentDate(false, item.date));
    setTasks(tasskk);
  }
  function pressForWeek() {
    setisweek(true);
    const tasskk = alltasks.filter((item) => getRecentDate(true, item.date));
    setTasks(tasskk);
  }
  const renderItem = ({ item }) => {
    return (
      <OneItemDUmmy
        myDate={item.date}
        item={item}
        isRecent={true}
        isMyTask={true}
      />
    );
  };
  return (
    <View>
      <Title props="OBAVEZE KOJE VAS CEKAJU" />
      <ButtonReminder
        pressForWeek={pressForWeek}
        pressForMonth={pressForMonth}
        styleMonth={!isWeek}
        styleWeek={isWeek}
      />
      <FlatList
        data={tasks}
        style={styles.flat}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  flat: {
    padding: 15,
  },
});
export default RemanderScreen;
