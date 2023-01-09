 import React, { useEffect } from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
 import { FontAwesome } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';
import Chat from "./Chat";
// import * as React from "react";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from "../src/components/Button";
const Home= () => {
  const navigation = useNavigation();

const handleNotificationPress = () =>{
  navigation.navigate("Notifications");
}

 useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
              <>
                <FontAwesome name="search" size={24}  style={{marginLeft: 15}}/>
                
                </>
            )

        });
    }, [navigation]);
  return (
     
    <View style={[styles.iconAddParent, styles.parentLayout]}>
      <View style={styles.iconAdd}>
      
        <Pressable
          style={[styles.vector, styles.iconLayout1]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <View style={styles.Camera}>
        
        </View>
        
          <Image
            style={[styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
      </View>
    
      <View style={[styles.vectorParent, styles.parentLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-23.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.wrapperLayout]}
          onLongPress={() => navigation.navigate("Frame3")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/rectangle-61.png")}
          />
        </Pressable>
        <Image
          style={styles.addChildIcon}
          resizeMode="cover"
          source={require("../assets/add-child.png")}
        />
        <Image
          style={[styles.aysoIcon, styles.aysoIconLayout]}
          resizeMode="cover"
          source={require("../assets/ayso.png")}
        />
       
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-175.png")}
        />
        <Image
          style={[styles.iconEdit, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-edit.png")}
        />
        <Pressable
          style={[styles.image12, styles.wrapperLayout]}
          onLongPress={() => navigation.navigate("Frame3")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/image-12.png")}
          />
        </Pressable>
        <Pressable 
        onPress={handleNotificationPress}>
        {/* <Image
            style={styles.notification} 
            resizeMode="cover"
            source={require("../assets/notificationIcon-removebg-preview.png")}
          /> */}
          <Ionicons name="notifications" size={24}  color="9fd3c7"/>
        </Pressable>
      </View>
      <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24}  />
            </TouchableOpacity>
            <View style={styles.Cameraa}>
            <Button title="Take a picture" onPress={() => navigation.navigate("Camera")} icon="camera" />
            </View>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
 Cameraa: {
  backgroundColor: 'black',
  top: 730,
  justifyContent: 'center',
  right: 145,
  borderRadius: 100,
  width: 170
 },
  parentLayout: {
    overflow: "hidden",
    height: 844,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    height: 103,
    width: 103,
    top: 280,
    position: "absolute",
  },
  aysoIconLayout: {
    height: 10,
    width: 24,
    top: 391,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  iconAdd: {
    height: "10.51%",
    width: "17%",
    top: "20.9%",
    right: "69.17%",
    bottom: "68.6%",
    left: "13.83%",
    position: "absolute",
  },
  wrapper: {
    left: 20,
  },
  container: {
    left: 271,
    top:740,
  },
  addChildIcon: {
    left: 46,
    width: 50,
    height: 9,
    top: 391,
    position: "absolute",
  },
  aysoIcon: {
    left: 183,
  },
  aysoIcon1: {
    left: 314,
  },
  frameChild: {
    top: 11,
    left: 328,
    width: 49,
    height: 43,
    position: "absolute",
  },
  iconEdit: {
    height: "3.93%",
    width: "6.96%",
    top: "1.82%",
    right: "6.38%",
    bottom: "94.26%",
    left: "86.67%",
    position: "absolute",
  },
  image12: {
    left: 144,
  },
  vectorParent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  iconAddParent: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    height: 844,
  },
  notification:{
    left: 2,
    top:500,
    right:100,
    // marginHorizontal:50,
    // marginTop:200,
  }
});

export default Home;






// import React, { useEffect } from "react";
// import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';

// const Home = () => {

//     const navigation = useNavigation();

//     useEffect(() => {
//         navigation.setOptions({
//             headerLeft: () => (
//                 <FontAwesome name="search" size={24}  style={{marginLeft: 15}}/>
//             ),

//         });
//     }, [navigation]);

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Chat")}
//                 style={styles.chatButton}
//             >
//                 <Entypo name="chat" size={24}  />
//             </TouchableOpacity>
//         </View>
//     );
//     };

//     export default Home;

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             justifyContent: 'flex-end',
//             alignItems: 'flex-end',
//             backgroundColor: "#fff",
//         },
//         chatButton: {
//             // backgroundColor: colors.primary,
//             height: 50,
//             width: 50,
//             borderRadius: 25,
//             alignItems: 'center',
//             justifyContent: 'center',
//             // shadowColor: colors.primary,
//             shadowOffset: {
//                 width: 0,
//                 height: 2,
//             },
//             shadowOpacity: .9,
//             shadowRadius: 8,
//             marginRight: 20,
//             marginBottom: 50,
//         }
//     });