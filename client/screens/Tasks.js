//ahlem

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { firebase } from "../config/firebase.js";

const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};
// dummy data
const Lists = [
  {
    task: "Do your homework page 90",
    icon: "hiking",
    theme: "#37003c",
    stamp: "Today . 8pm",
  },
  {
    task: "Take care of your sister",
    icon: "account-tie",
    theme: "#008b8b",
    stamp: "Today . 8pm",
  },
  {
    task: "Go to school at 10am",
    icon: "cart",
    theme: "#fed132",
    stamp: "Today . 8pm",
  },
  {
    task: "It's lunch time",
    icon: "weight",
    theme: "#fed132",
    stamp: "Today . 12am",
  },
];

export default function List(props) {
  // Declaring const where to save data
  //Delete from firestore
  //fetch data
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection("tasks");
  const [addData, setAddData] = useState("");

  //Get data from firestore
  useEffect(() => {
    todoRef.orderBy("stamp", "desc").onSnapshot((QuerySnapshot) => {
      const todos = [];
      QuerySnapshot.forEach((doc) => {
        const { task, icon, theme, stamp } = doc.data();
        todos.push({
          id: doc.id,
          task,
          icon,
          theme,
          stamp,
        });
      });
      setTodos(todos);
    });
  }, []);

  // function delete todo from firestore

 
  // function add a tod
  // hou
 

  return (
    <View
      style={{
        flex: 1,
        background: colors.themeColor,
      }}
    >
      {/* display data from firebase */}
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            style={{ color: colors.white }}
          />
          <AntDesign name="user" size={30} style={{ color: colors.white }} />
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "black", fontSize: 30 }}>{"Tasks"}</Text>

        {/* Search for task to verify it */}
        {/* search */}
        {/* <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: colors.tint,
            borderRadius: 20,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            style={{ color: colors.white }}
          /> */}
        
      
        {/* </View> */}
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <TextInput
          style={{ fontSize: 24 }}
          onChangeText={(task) => setAddData(task)}
          placeholder="add new task"
        />
        <MaterialCommunityIcons
          name="plus"
        //   onPress={addTodo}
          size={40}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {todos.map((task) => {
          {
            console.log(task);
          }
          return (
            <View
              style={{
                backgroundColor: colors.white,
                flexDirection: "row",
                marginHorizontal: 16,
                marginVertical: 4,
                borderRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 24,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <MaterialCommunityIcons
                  name={task.icon}
                  size={30}
                  style={{ color: task.theme, marginRight: 5 }}
                /> */}
                <View>
                  <Text style={{ fontSize: 19 }}>{task.task}</Text>
                  <Text style={{ cololr: colors.greyish }}>
                    {task.stamp.toString()}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={30}
                  style={{ color: "#1f63d8"}}
                />
                <MaterialCommunityIcons
                  onPress={() => deleteTodo(task)}
                  name="trash-can"
                  size={30}
                  style={{ color:"#d81f1f", marginLeft: 5 }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <Text> Lets get started</Text>     */}
    </View>
  );
}
