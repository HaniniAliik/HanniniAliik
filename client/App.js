import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Home from './screens/Home';
import ChildTasks from "./screens/ChildTasks"
import {Permissions,Notifications} from 'expo'; 
import TabNavigator from './screens/TabNavigator';
import Login from "./screens/Login";
 import HomeChild from './screens/HomeChild';
 import ParentTasks from './screens/ParentTasks';

import Congratulation from "./screens/Congratulation"
  import GetKid from "./screens/GetKid"
import Test from './screens/Test'
import Backround from './screens/Backround.js';
import Camera from './screens/Camera';
import Notification from './screens/Notification';
import EditChild from "./screens/EditChild";
import NewChild from "./screens/NewChild";
import Games from './screens/Games';
import HomeParent from './screens/HomeParent';

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
      headerShown :true, headerTintColor:"white"
    }} defaultScreenOptions={TabNavigator}>
      
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='Chat' component={Chat} />
      <Stack.Screen name='Notification' component={Notification}/>
      <Stack.Screen name='Backround' component={Backround} />
      <Stack.Screen name='ChildTasks' component={ChildTasks} />
      <Stack.Screen name='ParentTasks' component={ParentTasks} />
      <Stack.Screen name='HomeParent' component={HomeParent} />

      <Stack.Screen name='HomeChild' component={HomeChild} />
      <Stack.Screen name='Camera' component={Camera} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='GetKid' component={GetKid} />
      <Stack.Screen name="EditChild" component={EditChild} options={{ headerShown: false }}/>
      <Stack.Screen name="NewChild" component={NewChild} options={{ headerShown: false }}  />
      <Stack.Screen name='Games' component={Games} />
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

return (
    <AuthenticatedUserProvider>
      <RootNavigator />
      
    </AuthenticatedUserProvider>

  );
}