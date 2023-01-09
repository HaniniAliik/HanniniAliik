import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Home from './Home';
import Chat from './Chat';

import Child from './Child';
import Games from './Games';

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
                    else if (route.name === "Child") {
                        Icon = focused ? "bell" : "bell-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                   
                    else if (route.name === "Games") {
                        Icon = focused ? "gamepad-variant" : "gamepad-variant-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "Chat") {
                        Icon = focused ? "message-reply-text" : "message-reply-text-outline";
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
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarShowLabel: false,
                labelStyle: { paddingBottom: 10, fontSize: 10 },

                tabBarStyle: {
                    height: 50,
                    left:7,
                    right: 7,
                    bottom: 675,
                
                    position: 'absolute',
                    borderRadius: 10,
                    backgroundColor: '#00BFA6',
                    paddingBottom: 15,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Child"
                component={Child}
            />
            <Tab.Screen
                name="Games"
                component={Games}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
            />
            
            
            
        </Tab.Navigator>
    )
}

export default TabNavigator