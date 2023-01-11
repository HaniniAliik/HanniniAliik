import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

import Home from './Home';
import Chat from './Chat';
import Games from './Games';
import Camera from './Camera'
import HomeChild from './HomeChild';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    
    return (
        
        <Tab.Navigator
        
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color, padding }) => {
                    
                    let Icon;
                    if (route.name === "Home") {
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
                    else if (route.name === "Games") {
                        Icon = focused ? "gamepad-variant" : "gamepad-variant-outline";
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
                    left:0,
                    right: 0,
                    bottom: 0,
                
                    position: 'absolute',
                    borderRadius: 10,
                    backgroundColor: '#00BFA6',
                    paddingBottom: 0,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
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
                name="Games"
                component={Games}
            />
             <Tab.Screen
                name="HomeChild"
                component={HomeChild}
            />
            
        </Tab.Navigator>
    )
}

export default TabNavigator