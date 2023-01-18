import { View, Switch,Text,StyleSheet,Pressable } from 'react-native'
import React,{Component, useState,useEffect} from 'react'
import { firebase } from "../config/firebase.js";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};

const Notification = () => {
  const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection("tasks");
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
// const requestUserPermission = async ( )=>{
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// } 
// useEffect(()=>{
//   if(requestUserPermission()){
//     //return fcm token for the device
//     messaging().getToken().then(token=>{
//       console.log(token);
//     });
//   }
//   else{console.log("failed token status",authStatus);  
//   }

//   // Check whether an initial notification is available
//   messaging()
//   .getInitialNotification()
//   .then(remoteMessage => {
//     if (remoteMessage) {
//       console.log(
//         'Notification caused app to open from quit state:',
//         remoteMessage.notification,
//       );
//     }
//   });

//    // Assume a message-notification contains a "type" property in the data payload of the screen to open

//    messaging().onNotificationOpenedApp( async remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     // navigation.navigate(remoteMessage.data.type);
//   });

// // Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
 
// const unsubscribe = messaging().onMessage(async remoteMessage => {
//   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
// });

// return unsubscribe;


// },[])
 
    return (
      <View>
        <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {todos.map((task) => {
          {
            console.log(todos[0],'<<<<<<<<<<<<<<<<<');
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
              <Pressable
        
        onPress={() => {
          navigation.navigate("ChildTasks")}}
      >
                  <Text style={{ fontSize: 19}} >New task added {task.task}</Text>
              </Pressable>  
              </View>
              
            </View>
          );
        })}
      </ScrollView>
      </View>
      // <View style={styles.container}>        
      //   <Switch
      //     trackColor={{ false: "#767577", true: "#9fd3c7" }}
      //     thumbColor={isEnabled ? "#9fd3c7" : "#f4f3f4"}
      //     ios_backgroundColor="#3e3e3e"
      //     onValueChange={toggleSwitch}
      //     value={isEnabled}
      //   />
      // </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });
export default Notification