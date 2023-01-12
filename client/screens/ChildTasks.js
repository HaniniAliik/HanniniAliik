//ahlem

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { firebase } from "../config/firebase.js";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
        //  console.log(doc)
        const { task, icon, theme, stamp } = doc.data();
        // console.log(doc.data())
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
{/* icone search */}
          {/* <MaterialCommunityIcons
            name="magnify"
            size={30}
            style={{ color: colors.white }}
          />  */}
        
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
               
                <View>
                  <Text style={{ fontSize: 19 }}>{task.task}</Text>
                  <Text style={{ cololr: colors.greyish }}>
                    {task.stamp.toString()}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                
                <BouncyCheckbox
  size={25}
  fillColor=" rgba(0, 191, 166, 0.15)"
  unfillColor="#FFFFFF"
//    text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
   innerIconStyle={{ borderWidth: 5 }}
//   textStyle={{ fontFamily: "JosefinSans-Regular" }}
//   onPress={(isChecked: boolean) => {}}
/>
                <BouncyCheckbox />
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <Text> Lets get started</Text>     */}
    </View>
  );
}
