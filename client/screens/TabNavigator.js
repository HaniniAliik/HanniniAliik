import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { StyleSheet } from 'react-native';
import Home from './Home';
import Chat from './Chat';
import Games from './Games';
import Camera from './Camera'
import HomeChild from './HomeChild';
import Notification from './Notification';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    const [trifi,setTrifi]=useState(2)
    
    return (
        
        <Tab.Navigator
        
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color, padding }) => {
                    
                    let Icon;
                    if (route.name === "HomeChild") {
                        Icon = focused ? "home" : "home-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "Chat") {
            
                        Icon = focused ? "message-reply-text" : "message-reply-text-outline";
                        size = focused ? size + 15 : size + 5;
                       
                    }
                   
                   
                    else if (route.name === "Camera") {

                        Icon = focused ? "camera" : "camera-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "Notification") {
                        Icon = focused ? "bell": "bell-outline" ;
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "HomeChild") {
                        Icon = focused ? "bell" : "bell-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    return (
                        <>
                            
                            <Icons
                                name={Icon}
                                size={size}
                                color={color}
                                style={{ paddingBottom: padding }}
                            />
                        </>
                        
                    )
                },
                headerShown: true,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarShowLabel: false,
                labelStyle: { paddingBottom: 10, fontSize: 10 },

                tabBarStyle: {
                    height: 50,
                    left:7,
                    right: 7,
                    bottom:0,
                
                    position: 'absolute',
                    borderRadius: 10,
                    backgroundColor: '#00BFA6',
                    paddingBottom: 0,
                },
            })}
        >
            <Tab.Screen
                name="HomeChild"
                component={HomeChild}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
            />
            
            <Tab.Screen
                name="Camera"
                component={Camera}
            />
            <Tab.Screen
            options={{tabBarBadge: trifi ? trifi : undefined}}
            onPress={() =>{setTrifi(0)}}
                name="Notification"
                component={Notification}

            />
             {/* <Tab.Screen
                name="HomeChild"
                component={HomeChild}
            /> */}
            
        </Tab.Navigator>
    )
}

export default TabNavigator

