// ahlem
 import * as React from "react";
import {  Component, createRef ,useState,useEffect } from "react";
import { View, Text, StatusBar,Image, style, Pressable,Platform, StyleSheet, TouchableOpacity,Button } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { firebase } from "../config/firebase.js";
import BouncyCheckbox from "react-native-bouncy-checkbox";4
import RewardsComponent from 'react-native-rewards';
import { useNavigation } from "@react-navigation/native";

const CornflowerBlue = '#6495ED';

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
  const navigation = useNavigation()
  // Declaring const where to save data
  //Delete from firestore
  //fetch data
  const [todos, setTodos] = useState([]);

  // collect collection tasks from firebase
  const todoRef = firebase.firestore().collection("tasks");

  const [addData, setAddData] = useState("");
  const [animationState,setAnimationState] =useState('rest')

  //Get data from firestore
  useEffect(() => {
      setAnimationState("reward")

    todoRef.onSnapshot((QuerySnapshot) => {
      const todos = [];
      QuerySnapshot.forEach((doc) => {
        //  console.log(doc)
        const { task, icon, theme,check,idChild,idParent} = doc.data();
        // console.log(doc.data())
        // if (idChild==="222"){
        todos.push({
          id: doc.id,
          task,
          icon,
          theme,
          
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
    console.log(task)
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
  


//function rewards
const rewards = ()=> {
    var res=true
    for (var i =0 ;i<todos.length;i++){
         if (todos[i].check===false){
       res= false
       }
     }
   console.log('all todos are done')
     return  res   }
  return (
    <View
      style={{
        flex: 1,
        background: colors.themeColor,
      }}
    >
      {/* display data from firebase */}
       <StatusBar barStyle="light-content" backgroundColor={colors.themeColor}/> 
     {rewards() === false ?(
     <View>
     {/* <View style={{ backgroundColor: colors.themeColor }}> */}
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            style={{ color: colors.white }}
          /> */}
          {/* <AntDesign name="user" size={30} style={{ color: colors.white }} /> */}
        </View>
      {/* </View> */}
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
                    {/* {task.stamp.toString()} */}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* check icon */}
                
                <BouncyCheckbox
                  size={25}
                  fillColor="#00BFA6"
                  
                  unfillColor="rgba(0, 191, 166, 0.15)"
                  style={{ marginLeft: 20 }}
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
      </View>):
      
      (
        <View style={styles.container}>
            {/* <Text  >{todos[0]}</Text> */}
          <RewardsComponent
            animationType="confetti"
            state={animationState}
            onRest={() => setAnimationState('rest')
        }
          >
               <RewardsComponent
            animationType="confetti"
            state={animationState}
            onRest={() => setAnimationState('rest')}

          >
           
          </RewardsComponent>
          {/* button of rewards */}
            
            {/* <Text >congratulation Check your rewards </Text> */}
            {/* <View> */}
            {/* <Image style={{ marginTop: -20,height:400,width:415  }} source={require('../images/jump.gif') }/> */}
            {/* </View> */}
            <Button 
        title=" 🎊🎈congratulation Check your rewards 🎉🏆 "
        color="#00BFA6"
        marginVertical="200"
        
        
       
        onPress={() => navigation.navigate("Rewards")}
      />
          </RewardsComponent>

        </View>
        
    )} 

      {/* <Text> Lets get started</Text>     */}
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    
       
      },
      button: {
        backgroundColor: CornflowerBlue,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonPunish: {
        backgroundColor: '#f04',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,
      },
      buttonProps: {
        backgroundColor: 'gray',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
       
        marginTop: 10,
      },
      buttonText: {
        color: '#00BFA6',
        fontSize: 24,
      },
    });
