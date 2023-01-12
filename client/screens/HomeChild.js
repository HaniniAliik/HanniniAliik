import React from 'react'
import { Pressable, View } from "react-native";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import TabNavigator from './TabNavigator';
function HomeChild() {
    const navigation = useNavigation();
    return (
        <View style={[styles.iconAddParent, styles.parentLayout,styles.container]}>
            <View style={styles.iconAdd}>
               <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={[styles.back1, styles.done2Typo]}>Back</Text>
        </Pressable>

                <Pressable
                    style={[styles.wrapper, styles.wrapperLayoutc]}
                    onPress={() => navigation.navigate("Games")}
                >
                    <Image
                        style={styles.iconLayout1}
                        resizeMode="cover"
                        source={require("../assets/game1.png")}
                    />
                    
                    <Text style={styles.game}>Games</Text>
                </Pressable>
               
                
            </View>
            <View style={styles.iconAdd1}>

                <Pressable
                    style={[styles.wrapper, styles.wrapperLayoutt]}
                    onPress={() => navigation.navigate("AddChild")}
                >
                    
                    <Image
                        style={[styles.iconLayout1,styles.todo1]}
                        resizeMode="cover"
                        source={require("../assets/todo1.png")}
                    />
                    <Text style={styles.todo}>Todo</Text>

                </Pressable>
               
                
            </View>
           
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        left: 271,
        position: 'absolute',
        top:100,
        width: '100%',
    },
    parentLayout: {
        overflow: "hidden",
        height: 844,
    },
    iconLayout1: {
        height: "100%",
        width: "100%",
        borderRadius:20,
    },
    wrapperLayoutc: {
        height: 200,
        width: 200,
        top: -130,
        position: "absolute",
    },
    wrapperLayoutt: {
        height: 300,
        width: 250,
        top: 120,
        
        position: "absolute",
    },
    
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    vector: {
        left: "0%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        position: "absolute",
    },
    iconAdd: {
        height: "10.51%",
        width: "17%",
        top: "20.9%",
        right: "69.17%",
        bottom: "68.6%",
        left: "16.83%",
        position: "absolute",
    },
    iconAdd1: {
        height: "10.51%",
        width: "17%",
        top: "20.9%",
        right: "69.17%",
        bottom: "68.6%",
        left: "10.83%",
        position: "absolute",
       
    },
    wrapper: {
        left: 20,
    },
    container: {
        top:0,
    },
    game: {
        left: 86,
        width: 90,
        height: 30,
        top:200,
        position: "absolute",
        fontSize:20,
    },
    todo: {
        left: 110,
        width: 90,
        height: 30,
        top:300,
        fontSize:20,
        
        position: "absolute",
    },
    todo1:{
        borderRadius:20
    },
    frameChild: {
        top: 11,
        left: 328,
        width: 49,
        height: 43,
        position: "absolute",
    },
    iconEdit: {
        height: "3.93%",
        width: "6.96%",
        top: "1.82%",
        right: "6.38%",
        bottom: "94.26%",
        left: "86.67%",
        position: "absolute",
    },
    image12: {
        left: 144,
    },
    vectorParent: {
        top: 0,
        left: 0,
        width: 390,
        position: "absolute",
    },
    iconAddParent: {
        backgroundColor: GlobalStyles.Color.white,
        flex: 1,
        width: "100%",
        height: 844,
    },
});
export default HomeChild