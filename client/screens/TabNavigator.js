import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import {firebase} from "../config/firebase"
import Home from './Home';
import Chat from './Chat';
import Games from './Games';
import Camera from './Camera'
import HomeChild from './HomeChild';
import Profile from './Profile'
import Map from './Map'
import Notification from "./Notification"
import HomeParent from './HomeParent';
const Tab = createBottomTabNavigator();
var firstChanges1 = []
var filtered = []

const TabNavigator = () => {
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
                            !firstChanges1.find(value1 => JSON.stringify(value1) === JSON.stringify(value))
                        )
                        firstChanges1 = data;
                    }
                }
            }
        );
    return (

        <Tab.Navigator

            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color, padding}) => {

                    let Icon;
                    if (route.name === "HomeChild") {
                        Icon = focused ? "home" : "home-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    else if (route.name === "Profile") {
                        Icon = focused ? "account" : "account";

                        size = focused ? size + 15 : size +5
                    }
                    else if (route.name === "Map") {
                        Icon = focused ? "map" : "map";
                        size = focused ? size + 15 : size +5
                    }
                    
                    else if (route.name === "Chat") {
                        Icon = focused ? "message-reply-text" : "message-reply-text-outline";
                        size = focused ? size + 15 : size + 5;
                       
                    }
                    else if (route.name === "Camera") {
                        Icon = focused ? "camera" : "camera-outline";
                        size = focused ? size + 15 : size + 5;
                    } else if (route.name === "Notifications" && !filtered.length>0) {
                        Icon = focused ? "bell" : "bell-outline";
                        size = focused ? size + 15 : size + 5;
                    }
                    
                    return (
                        <>

                            <Icons
                                name={Icon}
                                size={size}
                                color={color}
                                style={{paddingBottom: padding}}
                            />
                        </>

                        
                    )
                },
                headerShown: true,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarShowLabel: false,

                tabBarStyle: {

                    height: 50,
                    left:0,
                    right: 0,
                    bottom:0,
                
                    position: 'absolute',
                    borderRadius: 0,
                    backgroundColor: '#0E7E80',
                },
            })}
        >
            <Tab.Screen
                name="HomeChild"
                component={HomeChild}
            /><Tab.Screen
                name="Notifications"
                component={Notification}
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

            name="Profile"
            component={Profile}/>
              <Tab.Screen
            name="Map"
            component={Map}/>
             {/* <Tab.Screen
                name="HomeChild"
                component={HomeChild}
            /> */}
            
        </Tab.Navigator>
    )
}

export default TabNavigator