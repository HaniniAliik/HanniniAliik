import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
// import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Home from './screens/Home';
import ChildTasks from "./screens/ChildTasks"
import {Permissions,Notifications} from 'expo'; 
import AddChild from './screens/AddChild';
import UpdateChild from './screens/UpdateChild';
import TabNavigator from './screens/TabNavigator';
import Login from "./screens/Login";
 import HomeChild from './screens/HomeChild';
 import HomeParent from './screens/HomeParent';
 // Ahlem
 import ParentTasks from './screens/ParentTasks';
 import Profile from './screens/Profile'

import Congratulation from "./screens/Congratulation"
  import GetKid from "./screens/GetKid"
//AddChild : addchild
//frameScreen1 : updatechild
import Test from './screens/Test'
import Backround from './screens/Backround.js';
import Camera from './screens/Camera';

import EditChild from "./screens/EditChild";
import NewChild from "./screens/NewChild";
import FrameScreen from "./screens/FrameScreen";
import Games from './screens/Games';
import Rewards from './screens/Rewards';
import Map from './screens/Map'
const Stack = createStackNavigator();

const AuthenticatedUserContext = createContext({});



const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [animating, setAnimating] = useState(true);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false , headerTintColor:"white"
    }} defaultScreenOptions={TabNavigator}>
      
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='Chat' component={Chat} />
      {/* <Stack.Screen name='Notifications' component={Notification}/> */}
      <Stack.Screen name='Backround' component={Backround} />
      <Stack.Screen name='AddChild' component={AddChild} />
      <Stack.Screen name='ChildTasks' component={ChildTasks} />
      <Stack.Screen name='ParentTasks' component={ParentTasks} />
      <Stack.Screen name='UpdateChild' component={UpdateChild} />
      <Stack.Screen name='HomeChild' component={HomeChild} />
      <Stack.Screen name='Camera' component={Camera} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='HomeParent' component={HomeParent} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name='GetKid' component={GetKid} />
      <Stack.Screen name="EditChild" component={EditChild} options={{ headerShown: false }}/>
      <Stack.Screen name="NewChild" component={NewChild} options={{ headerShown: false }}  />
      <Stack.Screen name="Frame3" component={FrameScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Games' component={Games} />
      <Stack.Screen name='Rewards' component={Rewards} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='Login' component={TasksParent} />   */}
         <Stack.Screen name='Login' component={Login} />    
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      
      <Stack.Screen name="NewChild" component={NewChild} options={{ headerShown: false }}  />
      <Stack.Screen name="EditChild" component={EditChild} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
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
    <AuthenticatedUserProvider>
      <RootNavigator />
      
    </AuthenticatedUserProvider>

  );
}