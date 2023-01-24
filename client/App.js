import React, {useState, createContext, useContext, useEffect, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, ActivityIndicator, SafeAreaView, Button, StyleSheet} from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import {auth, firebase} from './config/firebase';
// import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Home from './screens/Home';
import ChildTasks from "./screens/ChildTasks"
import {Permissions,Notifications} from 'expo'; 
import TabNavigator from './screens/TabNavigator';
import Login from "./screens/Login";
 import HomeChild from './screens/HomeChild';
 import HomeParent from './screens/HomeParent';
 import ParentTasks from './screens/ParentTasks';
 import Profile from './screens/Profile'
import Congratulation from "./screens/Congratulation"
  import GetKid from "./screens/GetKid"
import Test from './screens/Test'
import Backround from './screens/Backround.js';
import Camera from './screens/Camera';
import Notification from './screens/Notification';
import EditChild from "./screens/EditChild";
import NewChild from "./screens/NewChild";
import Games from './screens/Games';
import Rewards from './screens/Rewards';
import Map from './screens/Map'
import FlashMessage from "react-native-flash-message";
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
      <Stack.Screen name='Notification' component={Notification}/>
      <Stack.Screen name='Backround' component={Backround} />
      <Stack.Screen name='ChildTasks' component={ChildTasks} />
      <Stack.Screen name='ParentTasks' component={ParentTasks} />
      <Stack.Screen name='HomeChild' component={HomeChild} />
      <Stack.Screen name='Camera' component={Camera} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='HomeParent' component={HomeParent} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name='GetKid' component={GetKid} />
      <Stack.Screen name="EditChild" component={EditChild} options={{ headerShown: false }}/>
      <Stack.Screen name="NewChild" component={NewChild} options={{ headerShown: false }}  />
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
let firstChanges1 = []
let filtered = []
export default function App() {
    const flashMessage = useRef();
    firebase.firestore()
        .collection("tasks").orderBy("stamp", "desc")
        .onSnapshot(
            {
                next: (QuerySnapshot) => {
                    const data = [];
                    QuerySnapshot.docChanges().forEach(value => {
                            let doc = value.doc.data()
                            data.push({...doc, type: value.type}
                            )
                        }
                    )

                    if (firstChanges1.length === 0) {
                        firstChanges1 = data;
                    } else {
                        filtered = data.filter(value =>
                            !firstChanges1.find(value1 => JSON.stringify({type:value.type, task: value.task, stamp: value.stamp}) === JSON.stringify({type:value1.type, task: value1.task ,stamp: value1.stamp}))
                        )
                        firstChanges1 = data;
                        if (filtered.length>0) {
                            filtered.forEach(value => {
                                flashMessage.current.showMessage({
                                    message:"Task"+ value.type,
                                    description: value.task,
                                    color: 'white',
                                    type: 'info',
                                    icon: 'auto',
                                    duration: 7000,
                                    titleStyle: styles.flashTitle,
                                    textStyle: styles.flashText
                                });
                            })
                        }
                    }
                }
            }
        );
return (
<SafeAreaView style={styles.container}>
            <AuthenticatedUserProvider>
                <RootNavigator />
            <FlashMessage ref={flashMessage}/>
    </AuthenticatedUserProvider>
</SafeAreaView>

  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    flashMessage: {
        borderRadius: 12,
        opacity: 0.8,
        borderWidth: 2,
        borderColor: '#222',
        margin: 12,
        top: 70
    },
    flashTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    flashText: {
        fontStyle: 'italic',
        fontSize: 15
    }
});