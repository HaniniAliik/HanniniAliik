// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import NewChild from "./NewChild";
// import { FlatList } from "react-native-gesture-handler";
import  React,{useState} from "react";
import {
 Pressable,
 Text,
 StyleSheet,
 TouchableOpacity,
 View,
 Image,
 SafeAreaView
} from "react-native";
import {  ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ExistChild from "../src/components/ExistChild";
import { FontFamily, Color, FontSize, Border } from "../HomeStyles";
import { FontAwesome5 } from 'react-native-vector-icons';
import GlobalStyles from "../GlobalStyles";
import { auth } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';

// import GetKid from "./GetKid";

import Button from "../src/components/Button";

  //frameScreen2 : AddChild
  //frameScreen1 : UpdateChild



const Home = () => {
 const navigation = useNavigation();

 const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};
 const children = [
   { name: "Child 1", id:1 },
   { name: "Child 2", id:2 },
   { name: "Child 3", id:3 },
   { name: "Child 4", id:4 }
  
 ];
 const parent={name:"Parent"};

 const [editMode, setEditMode] = useState(false);
 const onSignOut = () => {
  signOut(auth).then(msg => console.log('logging out successfully', msg))
  .catch(error => console.log('Error logging out: ', error));
  navigation.navigate("Login")
}
 return (
  <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          style={{
            backgroundColor: colors.background, flex: 1
          }}

        >
   <View style={styles.home}>
     <TouchableOpacity
       style={styles.edit}
       activeOpacity={0.2}
       onPress={() => setEditMode(!editMode)} 
     >
       <Text  style={styles.edit1}>Edit</Text>
     </TouchableOpacity>
     <Text style={[styles.whoAreYou, styles.nameTypo]}>
       Who are you checking on?
     </Text>

<Pressable onPress={()=>navigation.navigate("HomeParent")}>
<View style={{top:-220, left:-55}}>
<View style={{ alignItems: "center" }}>
  <Image style={[styles.image123x1Icon,styles.namePosition,{ opacity: editMode ? 0.5 : 1 }]}resizeMode="cover" source={{ uri: "https://cdn.dribbble.com/users/948184/screenshots/4270844/38_octopus2_db.gif" }} />
 
        {editMode && 
        <FontAwesome5 name="pen" size={24} color="#fff" style={{ position: "absolute",top: "31%",left: "43%"}} onPress={() => navigation.navigate("EditChild")}/>
         }
 
  <Text style={[styles.name, styles.namePosition, styles.nameTypo]}>
     {parent.name} 
  </Text>
 
 </View>
</View>
</Pressable>
     
    
     <TouchableOpacity
       activeOpacity={0.2}
       onPress={() => navigation.navigate("NewChild")}
       style={[styles.mayssen, styles.groupChildLayout]}
     >
       <View style={[styles.groupChild, styles.groupChildLayout]} />
       <Text style={[styles.addChild, styles. addKid]}>add child</Text>
       <View style={[styles.iconAdd, styles.iconLayout]}>
         <View  style={[styles.iconAdd1, styles.iconLayout]}>
           <Pressable
             style={[styles.vector, styles.iconLayout]}
             onPress={() => navigation.navigate("NewChild")}
           >
             <Image 
               style={styles.icon}
               resizeMode="cover"
               source={require("../assets/vector.png")}
              
             />
           </Pressable>
         </View>
       </View>
     </TouchableOpacity>
   


     <View style={[styles.rowContainer, styles.container]}>
 {children.map(child => (
   <View style={[styles.elKaba1, { width: "50%", height: "40%" }]} key={child.id}>
     <Pressable onPress={()=>navigation.navigate("HomeChild")}>
     <ExistChild name={child.name} editMode={editMode} />
     </Pressable>
   </View>
   
 ))}
</View>
   </View>
   </ScrollView>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   padding: 20,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
 },
 elKaba1:{
   paddingLeft:40,
   paddingRight:100,
   paddingTop:50,
   paddingBottom:20,
   justifyContent:"space-between"    
   },
 mayssen:{
   paddingTop:130,
   paddingLeft:140
   },
 rowContainer: {
   paddingTop:100,
   padding: 50,
   flexWrap:"wrap",
   alignItems: "center"
   },
 addKid:{
   marginTop:255,
   marginLeft:139,
   fontFamily: FontFamily.ruda,
   fontWeight: "700",
   color: Color.white
 },
 nameTypo: {
   fontFamily: FontFamily.ruda,
   fontWeight: "700",
   color: Color.white,
 },
 groupChildLayout: {
   width: 100,
   position: "relative",
 },
 iconLayout: {
   marginTop:85,
   marginLeft:47,
   height: 50,
   width: 50,
   left: "50%",
   position: "absolute",
 },
 namePosition: {
   top:320,
   left: 195,
   position: "absolute",
 },
 edit1: {
   fontSize: FontSize.size_xl,
   fontFamily: FontFamily.rubikOne,
   width: 40,
   height: 21,
   textAlign: "left",
   color: Color.white,
 },
 edit: {
   left: 334,
   top: 57,
   position: "absolute",
 },
 whoAreYou: {
   top: 425,
   left: 70,
   fontSize: 20,
   width: 251,
   height: 23,
   textAlign: "left",
   position: "absolute",
 },
 groupChild: {
   left: 0,
   borderRadius: Border.br_md,
   backgroundColor: "#55eeda",
   shadowColor: "rgba(0, 0, 0, 0.25)",
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowRadius: 4,
   elevation: 4,
   shadowOpacity: 1,
   marginTop:125,
   height: 100,
   top: 0,
 },
 addChild: {
   top: 111,
   left: 17,
   fontSize: 15,
   width: 67,
   height: 19,
   textAlign: "left",
   position: "absolute",
 },
 icon: {
   height: "100%",
   marginLeft: -25,
   width: "100%",
 },
 vector: {
   top: 0,
 },
 iconAdd1: {
   marginLeft: -25,
   top: 0,
 },
 iconAdd: {
   top: 25,
   marginLeft: -25,
 },

 image123x1Icon: {
   top: 389,
   width: 99,
   height: 98,
 },
 name: {
   
     alignSelf: "center",
     marginTop: 105,
     marginLeft:25 
 
   // top: 496,
   // fontSize: FontSize.size_lg,
   // width:103,
   // height: 18,
   // bottom:200
 },
 home: {
   backgroundColor: Color.turquoise_100,
   flex:1,
   height: 844,
   overflow: "hidden",
   width: "100%",
 },
});

export default Home;
































// import React, { useEffect } from "react";
// import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import Chat from "./Chat";
// import * as React from "react";
// import { Pressable, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import GlobalStyles from "../GlobalStyles";
// import { auth } from '../config/firebase';
// import { AntDesign } from '@expo/vector-icons';
// import { signOut } from 'firebase/auth';
// import ChildTaBar from "./ChildTabBar";

// import Button from "../src/components/Button";
// const Home= () => {
//   const navigation = useNavigation();
//   const onSignOut = () => {
//     signOut(auth).then(msg => console.log('logging out successfully', msg))
//     .catch(error => console.log('Error logging out: ', error));
//     navigation.navigate("Login")

//   };
 //frameScreen2 : AddChild
 //frameScreen1 : UpdateChild



//  useEffect(() => {
//         navigation.setOptions({
//             headerLeft: () => (
//                 <FontAwesome name="search" size={24}  style={{marginLeft: 15}}/>
//             ),
//             headerRight: () => (
//               <TouchableOpacity
//                 style={{
//                   marginRight: 10
//                 }}
//                 onPress={onSignOut}
//               >
//                 <AntDesign name="logout" size={24}  style={{marginRight: 10}}/>
//               </TouchableOpacity>
//             )
//         });
//     }, [navigation]);
//   return (
   
//     <View style={[styles.iconAddParent, styles.parentLayout]}>
//       <View style={styles.iconAdd}>
     
//         <Pressable
//           style={[styles.vector, styles.iconLayout1]}
//           onPress={() => navigation.navigate("AddChild")}
//         >
//           <View style={styles.Cameraa}>
       
//         </View>
       
//           <Image
//             style={[styles.iconLayout, styles.iconLayout1]}
//             resizeMode="cover"
//             source={require("../assets/vector.png")}
//           />
//         </Pressable>
//       </View>
   
//       <View style={[styles.vectorParent, styles.parentLayout]}>
//         <Pressable
//           style={[styles.wrapper, styles.wrapperLayout]}
//           onPress={() => navigation.navigate("AddChild")}
//         //frameScreen2 : addchild
//         //frameScreen1 : updatechild
//         >
//           <Image
//             style={styles.iconLayout1}
//             resizeMode="cover"
//             source={require("../assets/rectangle-23.png")}
//           />
//           <Text style={{left:20}}>AddChild</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.image12, styles.wrapperLayout]}
//           onPress={() => navigation.navigate("ChildTabBar")}
//         >
//           <Image
//             style={styles.iconLayout1}
//             resizeMode="cover"
//             source={require("../assets/image-12.png")}
//           />
        
//           <Text style={{left:20}}>Ayso</Text>
//         </Pressable>
       
//         <Pressable
//           style={[styles.container, styles.wrapperLayout]}
//           onLongPress={() => navigation.navigate("UpdateChild")}
//         >
//           <Image
//             style={styles.iconLayout1}
//             resizeMode="cover"
//             source={require("../assets/rectangle-61.png")}
//           />
//           <Text style={{left:20}}>Lina</Text>
//         </Pressable>
     
//       </View>
//       <View style={styles.container}>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Chat")}
//                 style={styles.chatButton}
//             >
//                 <Entypo name="chat" size={24}  />
//             </TouchableOpacity>
//             {/* <View style={styles.Cameraa}>
//             <Button title="Take a picture" onPress={() => navigation.navigate("Camera")} icon="camera" />
//             </View> */}
//         </View>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container1: {
//     left: 271,
//     position: 'absolute',
//     top:0,
   
//     width: '100%',
//   },
//  Cameraa: {
//   backgroundColor: 'black',
//   top: 730,
//   justifyContent: 'center',
//   right: 145,
//   borderRadius: 100,
//   width: 170
//  },
//   parentLayout: {
//     overflow: "hidden",
//     height: 844,
//   },
//   iconLayout1: {
//     height: "100%",
//     width: "100%",
//   },
//   wrapperLayout: {
//     height: 103,
//     width: 103,
//     top: 280,
//     position: "absolute",
//   },
//   aysoIconLayout: {
//     height: 10,
//     width: 24,
//     top: 391,
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   vector: {
//     left: "0%",
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     position: "absolute",
//   },
//   iconAdd: {
//     height: "10.51%",
//     width: "17%",
//     top: "20.9%",
//     right: "69.17%",
//     bottom: "68.6%",
//     left: "13.83%",
//     position: "absolute",
//   },
//   wrapper: {
//     left: 20,
//   },
//   container: {
//     left: 271,
//   },
//   addChildIcon: {
//     left: 46,
//     width: 50,
//     height: 9,
//     top: 391,
//     position: "absolute",
//   },
//   aysoIcon: {
//     left: 183,
//   },
//   aysoIcon1: {
//     left: 314,
//   },
//   frameChild: {
//     top: 11,
//     left: 328,
//     width: 49,
//     height: 43,
//     position: "absolute",
//   },
//   iconEdit: {
//     height: "3.93%",
//     width: "6.96%",
//     top: "1.82%",
//     right: "6.38%",
//     bottom: "94.26%",
//     left: "86.67%",
//     position: "absolute",
//   },
//   image12: {
//     left: 144,
//   },
//   vectorParent: {
//     top: 0,
//     left: 0,
//     width: 390,
//     position: "absolute",
//   },
//   iconAddParent: {
//     backgroundColor: GlobalStyles.Color.white,
//     flex: 1,
//     width: "100%",
//     height: 844,
//   },
// });

// export default Home;






