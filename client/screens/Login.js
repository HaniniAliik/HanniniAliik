import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,Pressable } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))

        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
 
  
  return (
//     <View style={styles.container}>
    
//       <View style={styles.whiteSheet} />
//       <SafeAreaView style={styles.form}>
//         <Text style={styles.title}>Log In</Text>
//          <TextInput
//         style={styles.input}
//         placeholder="Enter email"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         autoFocus={true}
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter password"
//         autoCapitalize="none"
//         autoCorrect={false}
//         secureTextEntry={true}
//         textContentType="password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={onHandleLogin}  >
//         <Text style={{fontWeight: 'bold', color: "black", fontSize: 18}}> Log In</Text>
//       </TouchableOpacity>
//       <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
//         <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
//           <Text style={{color: "black", fontWeight: '600', fontSize: 14}}> Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//       </SafeAreaView>
//       <StatusBar barStyle="light-content" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: "rgb(204, 242, 237)",
//     alignSelf: "center",
//     paddingBottom: 24,
//   },
//   input: {
//     backgroundColor: "rgb(204, 242, 237)",
//     height: 58,
//     marginBottom: 20,
//     fontSize: 16,
//     borderRadius: 10,
//     padding: 12,
//   },
//   backImage: {
//     width: "100%",
//     height: 340,
//     position: "absolute",
//     top: 0,
//     resizeMode: 'cover',
//   },
//   whiteSheet: {
//     width: '100%',
//     height: '75%',
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 60,
//   },
//   form: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 30,
//   },
//   button: {
//     backgroundColor: 'rgb(204, 242, 237)',
//     height: 58,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
// });

<View style={styles.container}>
    <Image style={{ marginTop: -110 }} source={require("../screens/kids.png")} />
    {/* <Text style={{ fontWeight: "bold", fontSize: 26 }}>Register</Text> */}
    <View style={{ marginTop: -60 }}>
      {/* <Text style={{ position:"absolute", marginTop:20, marginLeft:-50}}>Email:</Text> */}
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        backgroundColor="rgba(0, 191, 166, 0.15)"
        autoCorrect={false}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        backgroundColor="rgba(0, 191, 166, 0.15)"
        secureTextEntry={true}
      />
    </View>
    {/* <TouchableOpacity style={styles.button}> */}
    {/* <Text style={{ fontWeight: 'bold', fontSize: 22 }}    onPress={()=>fff(),
        console.log("hi")} >Login</Text> */}
    <Pressable style={styles.button}>
      <Text style={styles.buttonText} onPress={onHandleLogin} >
        SignIn
      </Text>
    </Pressable>
    {/* <Button  style={styles.button} onPress={() => createU()} 
        title="ssss" /> */}
    {/* </TouchableOpacity> */}
    <TouchableOpacity style={{ marginTop: 20 }}>
      {/* <Text style={{ fontWeight: "bold", fontSize: 16 }}> */}
      <Text style={{ fontSize: 16 }}>Do you have an account ? Register Now</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>  
            <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
  </View>
);
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  TextInput: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 20,
    //borderBottomColor: "yellow",
    //borderBottomWidth: 1,
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    width: 370,
    marginBottom: 10,
    textAlign: "center",
  }, /// ///

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "green",
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    borderColor: "#fff",
    Color: "red",
  },
});