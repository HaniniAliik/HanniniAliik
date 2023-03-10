import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,Pressable,KeyboardAvoidingView, } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,sendPasswordResetEmail } from "../config/firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "react-native-elements/dist/helpers";
import MontserratBold from '../assets/fonts/MontserratAlternates-Bold.ttf';
//  import BackgroundAnimation from "./Backround";
//import Header from "../shared/header";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .then(navigation.navigate("Home"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("reset password has been sent successfully to your email")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
    else {
      alert("Invalid email")
    }
  }
  return (
<View style={styles.container}>
  {/* invoke the bachround image */}
    {/* <BackgroundAnimation></BackgroundAnimation>   */}
    <Image style={{ marginTop: 0, height:200,width:320}} source={require('../assets/logoha.png') }/>
     {/* <Image style={{ margin: 5 }} source={require("../images/kids.png")} />  */}
    {/* <Text style={{ fontWeight: "bold", fontSize: 26 }}>HANNINI </Text> */}
    <View style={{ marginTop: 80 }}>
    
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor ="white"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        backgroundColor="rgba(0, 191, 166, 0.15)"
        autoCorrect={false}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor ="white"
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        backgroundColor="rgba(0, 191, 166, 0.15)"
        secureTextEntry={true}
      />
    </View>
    <Pressable style={styles.button} onPress={() => (onHandleLogin())}>
      <Text style={[styles.customFont,styles.buttonText]}>
        Login
      </Text>
    </Pressable>
    {/* <Pressable style={styles.button}>
      <Text style={styles.buttonText} onPress={onHandleLogin} >
        Login
      </Text>
    </Pressable>
    */}
    <TouchableOpacity style={{ marginTop: 20 }}>
    
      <Text style={styles.customFont}>Do you have an account ? Register Now</Text>
    </TouchableOpacity>
    < TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => resetPassword()}>
              <Text style={[styles.customFont,{fontSize: 14 }]}> Forget password ?</Text>
            </TouchableOpacity>
          </View>
  </View>
);
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#55EEDA"
  },
  TextInput: {
    placeholderTextColor :"white",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#55EEDA",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 16,
    color:"#0e7e80",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    borderColor: "#fff",
    
  },
    customFont: {
      fontFamily: 'MontserratBold',
      fontWeight: 'bold',
      fontStyle: 'normal',
      // fontSize: 16,
      color: "#0e7e80"
    },
  
  
});