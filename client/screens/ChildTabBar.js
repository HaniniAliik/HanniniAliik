import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Home from './Home';
import Chat from './Chat';

import HomeChild from './HomeChild';
import Games from './Games';
import Camera from './Camera'

const Tabb = createBottomTabNavigator();
const ChildTaBar = () => {
    
    return (
        
        <Tabb.Navigator
        
            initialRouteName="HomeChild"
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
                    else if (route.name === "Games") {
                        Icon = focused ? "gamepad-variant" : "gamepad-variant-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                   
                    else if (route.name === "Camera") {
                        Icon = focused ? "camera" : "camera-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "Home") {
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
                    paddingBottom: 15,
                },
            })}
        >
            <Tabb.Screen
                name="HomeChild"
                component={HomeChild}
            />
            <Tabb.Screen
                name="Chat"
                component={Chat}
            />
            <Tabb.Screen
                name="Camera"
                component={Camera}
            />
            <Tabb.Screen
                name="Games"
                component={Games}
            />
            
            <Tabb.Screen
                name="Home"
                component={Home}
            />
        </Tabb.Navigator>
    )
}

export default ChildTaBar