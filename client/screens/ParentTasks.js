//ahlem

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StatusBar,Keyboard,Pressable,Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { firebase } from "../config/firebase.js";
import { useNavigation } from "@react-navigation/native";
const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#0E7E80",
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

// fel props must add id parent: props.idP
export default function List(props) {
  const navigation = useNavigation()
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
        const { task, icon, theme, stamp, check, idChild } = doc.data();
        // console.log(doc.data())
        // condition to verify the child id
        // if (idChild==="222"){
        todos.push({
          id: doc.id,
          task,
          icon,
          theme,
          stamp,
          check,
        });
      // }
      });
      setTodos(todos);
    });
  }, []);
 

  // function delete Tasks from firestore

  const deleteTodo = (todos) => {
    todoRef
        .doc(todos.id)
        .delete()
        .then(() => {
            // show alert
        })
        .catch(error => {

        })
    }
  // function add a tod
  // hou
  const addTodo = () => {
    // check if we have a todo
    if (addData && addData.length > 0) {
      // get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        task: addData,
        icon: "child",
        theme: "#00BFA6",
        stamp: timestamp,
        check:false,
        // add id parent child
        idParent:'111',
        idChild:'222',
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData("");
          //  release keyboard
           Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
 

  return (
    <View
      style={{
        flex: 1,
        background: colors.themeColor,
      }}
    >
      {/* display data from firebase */}
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ padding: 16 }}>
      <Pressable style={[styles.back,{top:170,left:-30}]} onPress={() => navigation.navigate("HomeParent")}>
         <Image  source={require("../assets/images/left.png")}
     style={[styles.back1, styles.done2Typo]}/>
           </Pressable>
        <Text style={{ color: "#0e7e80", fontSize: 30,left:110 }}>{"Tasks"}</Text>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 0,
        }}
      >
        <TextInput
          style={{ fontSize: 24 }}
          onChangeText={(task) => setAddData(task)}
          placeholder="add new task"
          placeholderTextColor="white"
        />
        <MaterialCommunityIcons
          name="plus"
           onPress={addTodo}
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
          // {
          //   console.log(task);
          // }
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
                    {/* {task.stamp.toString()} */}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={30}
                  style={{ color: "rgba(0, 191, 166, 0.25)"}}
                />
                
                <MaterialCommunityIcons
                  onPress={() =>{
                    return deleteTodo(task)}}
                  name="trash-can"
                  size={30}
                  style={{ color:"#00BFA6",opacity:0.5, marginLeft: 5 }}
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
const styles = StyleSheet.create({
  back1:{
    width:50,
    height:50,
    left:10,
    top:-130
        },
})
