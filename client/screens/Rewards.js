//ahlem

import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StatusBar,Keyboard } from "react-native";
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

// fel props must add id parent: props.idP
export default function List(props) {
 
  const [rwd, setRwd] = useState([]);
  const todoRef = firebase.firestore().collection("rewards");
 
  const [addData, setAddData] = useState("");

  //Get data from firestore
  useEffect(() => {
    
    todoRef.onSnapshot((QuerySnapshot) => {
      const rwd = [];
      QuerySnapshot.forEach((doc) => {
        //  console.log(doc)
        const { description, idChild } = doc.data();
        // console.log(doc.data())
        // condition to verify the child id
        // if (idChild==="222"){
        rwd.push({
          id: doc.id,
          description,
          
        });
      // }
      });
      setRwd(rwd);
    });
  }, []);
 

  // function add a tod
  // hou
//   const addTodo = () => {
//     // check if we have a todo
//     if (addData && addData.length > 0) {
//       // get the timestamp
//       const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//       const data = {
//         task: addData,
//         icon: "child",
//         theme: "#00BFA6",


//         stamp: timestamp,
//         check:false,
//         // add id parent child
//         idParent:'111',
//         idChild:'222',
//       };
//       todoRef
//         .add(data)
//         .then(() => {
//           setAddData("");
//           //  release keyboard
//            Keyboard.dismiss();
//         })
//         .catch((error) => {
//           alert(error);
//         });
//     }
//   };
 

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
          
          <AntDesign name="user" size={30} style={{ color: colors.white }} />
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ color: "black", fontSize: 30 }}>{"Rewards"}</Text>

    
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
        {/* <TextInput
          style={{ fontSize: 24 }}
          onChangeText={(task) => setAddData(task)}
          placeholder="add new task"
        /> */}
        {/* <MaterialCommunityIcons
          name="plus"
           onPress={addTodo}
          size={40}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        /> */}
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {rwd.map((rwd) => {
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
                
                <View>
                  <Text style={{ fontSize: 19 }}>{rwd.description}</Text>
                  
                </View>
              </View>
              
            </View>
          );
        })}
      </ScrollView>
     
    </View>
  );
}
