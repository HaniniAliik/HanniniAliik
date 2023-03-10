import React,{useLayoutEffect} from 'react';
import {TouchableOpacity , Pressable , View ,Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';

function HomeChild() {
  const onSignOut = () => {
    signOut(auth).then(msg => console.log('logging out successfully', msg))
    .catch(error => console.log('Error logging out: ', error));
    navigation.navigate("Login")
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
            
          }}
          onPress={onSignOut}
        >
          <AntDesign name="logout" size={24}  style={{marginRight: 10,color:"#0E7E80"}}/>
        </TouchableOpacity>
      )
      
    });
  }, [navigation]);
  const navigation = useNavigation();
  return (
    <View style={[styles.iconAddParent, styles.parentLayout, styles.container]}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/untitled_design.png')}
        resizeMode="cover"
      />
      <View style={styles.iconAdd}>
        <Pressable
          style={[styles.back, { top: 0, left: -57 }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../assets/images/left.png')}
            style={[styles.back1, styles.done2Typo]}
          />
        </Pressable>
        </View>
        {/* <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={[{top:-150,left:-60},styles.back1, styles.done2Typo]}>Back</Text>
        </Pressable> */}
        <View style={styles.iconAdd2}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayoutc]}
          onPress={() => navigation.navigate('Games')}
        >
          
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require('../assets/games1.png')}
              onPress={() => navigation.navigate('Games')}
            />
          
          <Text style={styles.game}>Games</Text>
        </Pressable>
      </View>
      <View style={styles.iconAdd1}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayoutt]}
          onPress={() => navigation.navigate('ChildTasks')}
        >
          
            <Image
              style={[styles.iconLayout1, styles.todo1]}
              resizeMode="cover"
              source={require('../assets/pngtree-task-complete-3d-icon-render-png-image_6172213-removebg-preview.png')}
            />
          
          <Text style={styles.todo}>Tasks</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    left: 271,
    position: 'absolute',
    top: 100,
    width: '100%',
  },
  parentLayout: {
    overflow: 'hidden',
    height: 844,
  },
  iconLayout1: {
    height: '47%',
    width: '53%',
    borderRadius: 20,
    right: 35,
    top: -35,
  },
  back:{
  },
  wrapperLayoutc: {
    height: 200,
    width: 200,
    top: -130,
    position: 'absolute',
  },
  wrapperLayoutt: {
    height: 300,
    width: 250,
    top: 120,
    position: 'absolute',
  },
  iconLayout: {
    margin: 5,
    height: '55%',
    width: '55%',
    borderRadius: 20,
    right: -155,
    top: 225,
  },
  vector: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    position: 'absolute',
  },
  iconAdd: {
    height: '10.51%',
    width: '17%',
    top: '20.9%',
    right: '69.17%',
    bottom: '68.6%',
    left: '16.83%',
    position: 'absolute',
  },
  iconAdd2: {
    height: '10.51%',
    width: '17%',
    top: '20.9%',
    right: '69.17%',
    bottom: '68.6%',
    left: '16.83%',
    position: 'absolute',
  },
  iconAdd1: {
    height: '10.51%',
    width: '17%',
    top: '20.9%',
    right: '69.17%',
    bottom: '68.6%',
    left: '10.83%',
    position: 'absolute',
  },
  wrapper: {
    left: 20,
  },
  container: {
    top: 0,
  },
  game: {
    left: 165,
    width: 90,
    height: 30,
    top: 354,
    position: 'absolute',
    fontSize: 25,
    color:"white"
  },
  todo: {
    left: -2,
    width: 90,
    height: 30,
    top: 100,
    fontSize: 25,
    color: "white",
    position: 'absolute',
  },
  todo1: {
    borderRadius: 20,
  },
  frameChild: {
    top: 11,
    left: 328,
    width: 49,
    height: 43,
    position: 'absolute',
  },
  iconEdit: {
    height: '3.93%',
    width: '6.96%',
    top: '1.82%',
    right: '6.38%',
    bottom: '94.26%',
    left: '86.67%',
    position: 'absolute',
  },
  image12: {
    left: 144,
  },
  vectorParent: {
    top: 0,
    left: 0,
    width: 390,
    position: 'absolute',
  },
  iconAddParent: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: '100%',
    height: 844,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  back1: {
    width: 50,
    height: 50,
    left: 10,
    top: -130,
  },
});
export default HomeChild;

// // ////5idmet ahlem tasks child illi imiss no9tlouuuuuuuuuuu//////////////

// // import * as React from "react";
// // import {  Component, createRef ,useState,useEffect } from "react";
// // import { View, Text, StatusBar, style, Pressable,Platform, StyleSheet, TouchableOpacity,Button } from "react-native";
// // import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
// // import { ScrollView, TextInput } from "react-native-gesture-handler";
// // import { firebase } from "../config/firebase.js";
// // import BouncyCheckbox from "react-native-bouncy-checkbox";
// // import RewardsComponent from 'react-native-rewards';
// // import { useNavigation } from "@react-navigation/native";

// // const CornflowerBlue = '#6495ED';

// // const colors = {
// //   themeColor: "#00BFA6",
// //   white: "#fff",
// //   background: "#f4f6fc",
// //   greyish: "#a4a4a4",
// //   tint: "#2b49c3",
// // };
// // // dummy data
// // const Lists = [
// //   {
// //     task: "Do your homework page 90",
// //     icon: "hiking",
// //     theme: "#37003c",
// //     stamp: "Today . 8pm",
// //   },
// //   {
// //     task: "Take care of your sister",
// //     icon: "account-tie",
// //     theme: "#008b8b",
// //     stamp: "Today . 8pm",
// //   },
// //   {
// //     task: "Go to school at 10am",
// //     icon: "cart",
// //     theme: "#fed132",
// //     stamp: "Today . 8pm",
// //   },
// //   {
// //     task: "It's lunch time",
// //     icon: "weight",
// //     theme: "#fed132",
// //     stamp: "Today . 12am",
// //   },
// // ];

// // export default function List(props) {
// //     const navigation= useNavigation();

// //   // Declaring const where to save data
// //   //Delete from firestore
// //   //fetch data
// //   const [todos, setTodos] = useState([]);

// //   // collect collection tasks from firebase
// //   const todoRef = firebase.firestore().collection("tasks");

// //   const [addData, setAddData] = useState("");
// //   const [animationState,setAnimationState] = useState('rest')

// //   //Get data from firestore
// //   useEffect(() => {
// //       setAnimationState("reward")

// //     todoRef.orderBy("stamp", "desc").onSnapshot((QuerySnapshot) => {
// //       const todos = [];
// //       QuerySnapshot.forEach((doc) => {
// //         //  console.log(doc)
// //         const { task, icon, theme, stamp,check,idChild,idParent} = doc.data();
// //         // console.log(doc.data())
// //         // if (idChild==="222"){
// //         todos.push({
// //           id: doc.id,
// //           task,
// //           icon,
// //           theme,
// //           stamp,
// //           check,
// //           idChild,
// //           idParent,
// //         });
// //     // }
// //       });
// //       setTodos(todos);
// //     });

// //   }, []);

// //   // function to check true or false
// //   const updateCheck = (task) => {
// //     todoRef.doc(task.id).update({
// //       check: !task.check,
// //     }).then(()=>{
// //     console.log(task)
// //    })

// //     .catch(error=>alert('ee',error))
// //   };

// //   // function linefalse
// //   const linefalse=(task)=>{
// //     if (task.check===true){
// //         return "line-through"
// //     }
// //     return "none"
// //   }

// // //function rewards
// // const rewards = ()=> {
// //     var res=true
// //     for (var i =0 ;i<todos.length;i++){
// //          if (todos[i].check===false){
// //        res= false
// //        }
// //      }
// //    console.log('all todos are done')
// //      return  res   }
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         background: colors.themeColor,
// //       }}
// //     >
// //       {/* display data from firebase */}
// //       <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
// //      {rewards() ===false ?(
// //      <View>
// //      <View style={{ backgroundColor: colors.themeColor }}>
// //         <View
// //           style={{
// //             padding: 16,
// //             flexDirection: "row",
// //             justifyContent: "space-between",
// //           }}
// //         >
// //           <MaterialCommunityIcons
// //             name="bell-outline"
// //             size={30}
// //             style={{ color: colors.white }}
// //           />
// //           <AntDesign name="user" size={30} style={{ color: colors.white }} />
// //         </View>
// //       </View>
// //       <View style={{ padding: 16 }}>
// //         <Text style={{ color: "black", fontSize: 30 }}>{"Tasks"}</Text>
// //         {/* icone search */}
// //         {/* <MaterialCommunityIcons
// //             name="magnify"
// //             size={30}
// //             style={{ color: colors.white }}
// //           />  */}
// //       </View>
// //       <View
// //         style={{
// //           padding: 20,
// //           flexDirection: "row",
// //           backgroundColor: colors.background,
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //           borderTopLeftRadius: 20,
// //         }}
// //       ></View>
// //       <ScrollView
// //         style={{
// //           backgroundColor: colors.background,
// //         }}
// //       >
// //         {todos.map((task) => {
// //           {
// //             console.log(task);
// //           }
// //           return (
// //             <View
// //               style={{
// //                 backgroundColor: colors.white,
// //                 flexDirection: "row",
// //                 marginHorizontal: 16,
// //                 marginVertical: 4,
// //                 borderRadius: 20,
// //                 paddingVertical: 20,
// //                 paddingHorizontal: 24,
// //                 alignItems: "center",
// //                 justifyContent: "space-between",

// //               }}

// //             >

// //               <View style={{ flexDirection: "row" }}>
// //                 <View>
// //                   <Text style={{ fontSize: 19, textDecorationLine:linefalse(task) }} >{task.task}</Text>
// //                   <Text style={{ cololr: colors.greyish }}>
// //                     {task.stamp.toString()}
// //                   </Text>
// //                 </View>
// //               </View>
// //               <View style={{ flexDirection: "row", alignItems: "center" }}>
// //                 {/* check icon */}

// //                 <BouncyCheckbox
// //                   size={25}
// //                   fillColor="#00BFA6"
// //                   unfillColor="rgba(0, 191, 166, 0.15)"
// //                   style={{ marginLeft: 30 }}
// //                   iconStyle={{ borderColor: "red" }}
// //                   innerIconStyle={{ borderWidth: 1 }}
// //                   isChecked={task.check}
// //                   onPress={()=>updateCheck(task)}

// //                 />

// //               </View>
// //             </View>

// //           );

// //         })}

// //       </ScrollView>
// //       </View>):

// //       (
// //         <View style={styles.container}>
// //             {/* <Text  >{todos[0]}</Text> */}
// //           <RewardsComponent
// //             animationType="confetti"
// //             state={animationState}
// //             onRest={() => setAnimationState('rest')
// //         }
// //           >
// //                <RewardsComponent
// //             animationType="confetti"
// //             state={animationState}
// //             onRest={() => setAnimationState('rest')}

// //           >

// //           </RewardsComponent>
// //           {/* button of rewards */}

// //             {/* <Text >congratulation Check your rewards </Text> */}

// //             <Button
// //         title="congratulation Check your rewards"
// //         color="green"
// //         onPress={() => navigation.navigate("Rewards")}
// //         />
// //           </RewardsComponent>

// //         </View>

// //     )}

// //       {/* <Text> Lets get started</Text>     */}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //       container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#fff',
// //         margin: 10,
// //         marginTop: 20,
// //       },
// //       button: {
// //         backgroundColor: CornflowerBlue,
// //         height: 60,
// //         width: 60,
// //         borderRadius: 30,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         shadowColor: '#000',
// //         shadowOffset: {
// //           width: 0,
// //           height: 2,
// //         },
// //         shadowOpacity: 0.25,
// //         shadowRadius: 3.84,
// //         elevation: 5,
// //       },
// //       buttonPunish: {
// //         backgroundColor: '#f04',
// //         height: 60,
// //         width: 60,
// //         borderRadius: 30,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         shadowColor: '#000',
// //         shadowOffset: {
// //           width: 0,
// //           height: 2,
// //         },
// //         shadowOpacity: 0.25,
// //         shadowRadius: 3.84,
// //         elevation: 5,
// //         marginTop: 10,
// //       },
// //       buttonProps: {
// //         backgroundColor: 'gray',
// //         height: 60,
// //         width: 60,
// //         alignItems: 'center',
// //         justifyContent: 'center',

// //         marginTop: 10,
// //       },
// //       buttonText: {
// //         color: 'white',
// //         fontSize: 24,
// //       },
// //     });

// ///////////////Home child 5idmet lawled//////////////
// import React from 'react'
// import { Pressable, View } from "react-native";
// import { TouchableOpacity,  Text, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import {Color} from "../HomeStyles";
// import GlobalStyles from "../GlobalStyles";
// import TabNavigator from './TabNavigator';
// import ParentTasks from "./ParentTasks"

// function HomeChild() {
//     const navigation = useNavigation();
//     return (
//         <View style={[styles.iconAddParent, styles.parentLayout,styles.container]}>
//             <View style={styles.iconAdd}>
//             <Pressable style={[styles.back,{top:0,left:-57}]} onPress={() => navigation.navigate("Home")}>
//           <Image  source={require("../assets/left.png")}
//           style={[styles.back1, styles.done2Typo]}/>
//         </Pressable>

//                 <Pressable
//                     style={[styles.wrapper, styles.wrapperLayoutc]}
//                     onPress={() => navigation.navigate("Games")}
//                 >
//                     <Image
//                         style={styles.iconLayout1}
//                         resizeMode="cover"
//                         source={require("../assets/game1.png")}
//                     />

//                     <Text style={styles.game}>Games</Text>
//                 </Pressable>

//             </View>
//             <View style={styles.iconAdd1}>

//                 <Pressable
//                     style={[styles.wrapper, styles.wrapperLayoutt]}
//                     //ahleeeeem : kenit childTasks
//                     onPress={() => navigation.navigate("ChildTasks")}
//                 >

//                     <Image
//                         style={[styles.iconLayout1,styles.todo1]}
//                         resizeMode="cover"
//                         source={require("../assets/todo1.png")}
//                     />
//                     <Text style={styles.todo}>Todo</Text>

//                 </Pressable>

//             </View>

//         </View>

//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         left: 271,
//         position: 'absolute',
//         top:100,
//         width: '100%',
//     },
//     parentLayout: {
//         overflow: "hidden",
//         height: 844,
//     },
//     iconLayout1: {
//         height: "100%",
//         width: "100%",
//         borderRadius:20,
//     },
//     wrapperLayoutc: {
//         height: 200,
//         width: 200,
//         top: -130,
//         position: "absolute",
//     },
//     wrapperLayoutt: {
//         height: 300,
//         width: 250,
//         top: 120,

//         position: "absolute",
//     },

//     iconLayout: {
//         maxHeight: "100%",
//         maxWidth: "100%",
//         overflow: "hidden",
//     },
//     vector: {
//         left: "0%",
//         top: "0%",
//         right: "0%",
//         bottom: "0%",
//         position: "absolute",
//     },
//     iconAdd: {
//         height: "10.51%",
//         width: "17%",
//         top: "20.9%",
//         right: "69.17%",
//         bottom: "68.6%",
//         left: "16.83%",
//         position: "absolute",
//     },
//     iconAdd1: {
//         height: "10.51%",
//         width: "17%",
//         top: "20.9%",
//         right: "69.17%",
//         bottom: "68.6%",
//         left: "10.83%",
//         position: "absolute",

//     },
//     wrapper: {
//         left: 20,
//     },
//     container: {
//         top:0,
//     },
//     game: {
//         left: 86,
//         width: 90,
//         height: 30,
//         top:200,
//         position: "absolute",
//         fontSize:20,
//     },
//     todo: {
//         left: 110,
//         width: 90,
//         height: 30,
//         top:300,
//         fontSize:20,

//         position: "absolute",
//     },
//     todo1:{
//         borderRadius:20
//     },
//     frameChild: {
//         top: 11,
//         left: 328,
//         width: 49,
//         height: 43,
//         position: "absolute",
//     },
//     iconEdit: {
//         height: "3.93%",
//         width: "6.96%",
//         top: "1.82%",
//         right: "6.38%",
//         bottom: "94.26%",
//         left: "86.67%",
//         position: "absolute",
//     },
//     back1: {

//             width:50,
//             height:50,
//             left:10,
//             top:-140

//       },
//       back: {
//         left: 6,
//         top: 47,
//         position: "absolute",
//       },
//     image12: {
//         left: 144,
//     },
//     vectorParent: {
//         top: 0,
//         left: 0,
//         width: 390,
//         position: "absolute",
//     },
//     iconAddParent: {
//         backgroundColor: GlobalStyles.Color.white,
//         flex: 1,
//         width: "100%",
//         height: 844,
//     },
// });
// export default HomeChild

// /////// rewards ////////////////

// // const CornflowerBlue = '#6495ED';

// //  const Reward =()=>{

// //   const [animationState,setAnimationState] =useState('rest')

// //     return (
// //         <View style={styles.container}>

// //           <RewardsComponent
// //             animationType="confetti"
// //             state={animationState}
// //             onRest={() => setAnimationState('rest')}
// //           >
// //                <RewardsComponent
// //             animationType="confetti"
// //             state={animationState}
// //             onRest={() => setAnimationState('rest')}
// //           >

// //           </RewardsComponent>
// //           {/* button of rewards */}
// //             <TouchableOpacity
// //               onPress={() => setAnimationState('reward')}
// //               style={styles.buttonProps}
// //             >
// //             </TouchableOpacity>
// //           </RewardsComponent>
// //         </View>
// //     );

// // }
// // export default Reward
