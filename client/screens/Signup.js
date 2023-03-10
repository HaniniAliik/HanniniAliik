import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView,TouchableWithoutFeedback, TouchableOpacity, StatusBar, Alert, Pressable } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
// const backImage = require("../assets/backImage.png");
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';


export default function Signup({ navigation }) {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPwd, setConfPwd] = useState("");
  const [adress, setAdress] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);
  const[creditCart,setCreditCart]=useState(0);

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert("user connected sucessfuly");
          const parentId=auth.currentUser.uid;
          console.log(parentId)
          axios.post("http://172.20.10.2:8000/api/parent",{
            idparent:parentId,
            name:name,
            email:email,
            password:password,
            age:age,
            adresse:adress,
            phone:phone,
            creditCard:creditCart,
            image:"image-1.png",
            role:"parent"
          }).then((res)=>{
            res.data
          }).then(navigation.navigate("Home")).catch((err)=>{
            console.log("error");
          })
        

        })
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <TouchableWithoutFeedback> 
    <View style={styles.container}>
    
      {/* <Image source={backImage} style={styles.backImage} /> */}
      <ScrollView >
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>SignUp</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="white"
          autoCapitalize="none"
          keyboardType="name-address"
          textContentType="nameAddress"
          autoFocus={true}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="white"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="text"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={confPwd}
          onChangeText={(text) => setConfPwd(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your adress"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          textContentType="adress"
          value={adress}
          onChangeText={(text) => setAdress(text)}
        />
        <TextInput
      
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          textContentType="age"
          value={age}
          onChangeText={(text) => setAge(parseInt(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          textContentType="phone"
          value={phone}
          onChangeText={(text) => setPhone(parseInt(text))}
        />
        <TextInput
         keyboardType='text'
          style={styles.input}
          placeholder="Enter your Credit Card"
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          textContentType="phone"
          value={phone}
          onChangeText={(text) => setCreditCart(parseInt(text))}
        />
        
      </SafeAreaView>
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={onHandleSignup} >
            SignUp
          </Text>
        </Pressable>
        
      </View>
      <View style={{ marginTop: 60, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
        <Text style={{ color: '#0e7e80', fontWeight: '600', fontSize: 14, marginTop: -20 ,marginLeft:30}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 16, marginTop: -20 }}> Log In</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
      
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#55EEDA",
  },
  title: {
    marginTop:30,
    fontSize: 32,
    fontWeight: 'bold',
    color: "#0e7e80",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    placeholderTextColor :"white",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    marginBottom: 10,
    textAlign: "center",
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#55EEDA',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
    marginRight:60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginbottom:80,
    position: "relative",
    elevation: 3,
    backgroundColor: "#55EEDA",
    borderWidth: 1,
    borderColor: "white",
    width: 127,
    marginTop: 20


  },

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    borderColor: "green",
    color:"#0e7e80",
    textShadowColor: "red"

  },
});