//ahlem

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StatusBar, style, Pressable } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { firebase } from "../config/firebase.js";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);

  // collect collection tasks from firebase
  const todoRef = firebase.firestore().collection("tasks");

  const [addData, setAddData] = useState("");

  //Get data from firestore
  useEffect(() => {
    todoRef.orderBy("stamp", "desc").onSnapshot((QuerySnapshot) => {
      const todos = [];
      QuerySnapshot.forEach((doc) => {
        //  console.log(doc)
        const { task, icon, theme, stamp,check,idChild,idParent} = doc.data();
        // console.log(doc.data())
        // if (idChild==="222"){
        todos.push({
          id: doc.id,
          task,
          icon,
          theme,
          stamp,
          check,
          idChild,
          idParent,
        });
    // }
      });
      setTodos(todos);
    });
  }, []);
  // function to check true or false
  const updateCheck = (task) => {
    todoRef.doc(task.id).update({
      check: !task.check,
    }).then(()=>{
    // console.log(task)
   })
  
    .catch(error=>alert('ee',error))
  };

  // function linefalse
  const linefalse=(task)=>{
    if (task.check===true){
        return "line-through"
    }
    return "none"
  }

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
          
          <Pressable
        
        onPress={() => {
          navigation.navigate("Notification")}}
      >
        <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            style={{ color: colors.white }}
          />
      </Pressable >
          <AntDesign name="user" size={30} style={{ color: colors.white }} />
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "black", fontSize: 30 }}>{"Tasks"}</Text>
      </View>
      
      <View
        style={{
          padding: 0,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      ></View>
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
                  <Text style={{ fontSize: 19, textDecorationLine:linefalse(task) }} >{task.task}</Text>
                  <Text style={{ cololr: colors.greyish }}>
                    {task.stamp.toString()}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* check icon */}
                
                <BouncyCheckbox
                  size={25}
                  fillColor="#00BFA6"
                  unfillColor="rgba(0, 191, 166, 0.15)"
                  style={{ marginRight: -30 }}
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 1 }}
                  isChecked={task.check}
                  onPress={()=>updateCheck(task)}
                  
                />
                
              </View>
            </View>
          );
        })}
      </ScrollView>
    
    </View>
  );
}

