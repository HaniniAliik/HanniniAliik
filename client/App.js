import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Home from './screens/Home';
import AddChild from './screens/AddChild';
import UpdateChild from './screens/UpdateChild';
import TabNavigator from './screens/TabNavigator';
import Child from './screens/Child';
//AddChild : addchild
//frameScreen1 : updatechild
import Test from './screens/Test'
import Backround from './screens/Backround.js'
//import Header from './shared/header';

import Camera from './screens/Camera'
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
      headerShown: false
    }} defaultScreenOptions={TabNavigator}>
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='Chat' component={Chat} />
      <Stack.Screen name='AddChild' component={AddChild} />
      <Stack.Screen name='UpdateChild' component={UpdateChild} />
      <Stack.Screen name='Child' component={Child} />
      <Stack.Screen name='Camera' component={Camera} />
      <Stack.Screen name='Home' component={Home} />
    
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
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