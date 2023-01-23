import  React,{useState} from "react";
import {
 Pressable,
 Text,
 StyleSheet,
 TouchableOpacity,
 View,
 Image,
 SafeAreaView
} from "react-native";
import {  ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ExistChild from "../src/components/ExistChild";
import { FontFamily, Color, FontSize, Border } from "../HomeStyles";
import { FontAwesome5 } from 'react-native-vector-icons';
import GlobalStyles from "../GlobalStyles";
import { auth } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
// import GetKid from "./GetKid";
import Button from "../src/components/Button";
  //frameScreen2 : AddChild
  //frameScreen1 : UpdateChild
const Home = () => {
 const navigation = useNavigation();
 const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#F4F6FC",
  greyish: "#A4A4A4",
  tint: "#2B49C3",
};
 const children = [
  { name: "yahya", id:1 },
 { name: "Child 2", id:2 },
{ name: "Child 3", id:3 },
   { name: "Child 4", id:4 }
 ];
 const parent={name:"Parent"};
 const [editMode, setEditMode] = useState(false);
 const onSignOut = () => {
  signOut(auth).then(msg => console.log('logging out successfully', msg))
  .catch(error => console.log('Error logging out: ', error));
  navigation.navigate("Login")
}
 return (
  <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          style={{
            backgroundColor: colors.background, flex: 1
          }}
        >
   <View style={styles.home}>
     <TouchableOpacity
       style={styles.edit}
       activeOpacity={0.2}
       onPress={() => setEditMode(!editMode)}
     >
       {/* <Text  style={styles.edit1}>Edit</Text> */}
       <FontAwesome5 name="pen" size={24} color="#fff" style={{ top: "-180%",left: "270%"}} onPress={() => {setEditMode(!editMode)}}/>
     </TouchableOpacity>
     <Text style={[styles.whoAreYou, styles.nameTypo]}>
       Whom are you checking on
     </Text>
<Pressable onPress={()=>navigation.navigate("HomeParent")}>
<View style={{top:-220, left:-55}}>
<View style={{ alignItems: "center" }}>
  <Image style={[styles.image123x1Icon,styles.namePosition,{ opacity: editMode ? 0.5 : 1 }]}resizeMode="cover" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }} />
        {editMode &&
        <FontAwesome5 name="pen" size={24} color="#fff" style={{ position: "absolute",top: "31%",left: "43%"}} onPress={() => navigation.navigate("EditChild")}/>
         }
  <Text style={[styles.name, styles.namePosition, styles.nameTypo,{color: "#0E7E80"}]}>
     {parent.name}
  </Text>
 </View>
</View>
</Pressable>
     <TouchableOpacity
       activeOpacity={0.2}
       onPress={() => navigation.navigate("NewChild")}
       style={[styles.mayssen, styles.groupChildLayout]}
     >
       <View style={[styles.groupChild, styles.groupChildLayout]} />
       <Text style={[styles.addChild, styles. addKid]}>Add child</Text>
       <View style={[styles.iconAdd, styles.iconLayout]}>
         <View  style={[styles.iconAdd1, styles.iconLayout]}>
           <Pressable
             style={[styles.vector, styles.iconLayout]}
             onPress={() => navigation.navigate("NewChild")}
           >
             <Image
               style={styles.icon}
               resizeMode="cover"
               source={require("../assets/vector.png")}
             />
           </Pressable>
         </View>
       </View>
     </TouchableOpacity>
     <View style={[styles.rowContainer, styles.container]}>
 {children.map(child => (
   <View style={[styles.elKaba1, { width: "50%", height: "40%" }]} key={child.id}>
     <Pressable onPress={()=>navigation.navigate("HomeChild")}>
     <ExistChild name={child.name} editMode={editMode} />
     </Pressable>
   </View>
 ))}
</View>
   </View>
   </ScrollView>
   </SafeAreaView>
 );
};
const styles = StyleSheet.create({
 container: {
   padding: 20,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
 },
 elKaba1:{
   paddingLeft:40,
   paddingRight:100,
   paddingTop:50,
   paddingBottom:20,
   justifyContent:"space-between"
   },
 mayssen:{
   paddingTop:130,
   paddingLeft:140
   },
 rowContainer: {
   paddingTop:100,
   padding: 50,
   flexWrap:"wrap",
   alignItems: "center"
   },
 addKid:{
   marginTop:255,
   marginLeft:139,
   fontFamily: FontFamily.ruda,
   fontWeight: "700",
   color: "#0E7E80"
 },
 nameTypo: {
   fontFamily: FontFamily.ruda,
   fontWeight: "700",
   color: Color.white,
 },
 groupChildLayout: {
   width: 100,
   position: "relative",
 },
 iconLayout: {
   marginTop:85,
   marginLeft:47,
   height: 50,
   width: 50,
   left: "50%",
   position: "absolute",
 },
 namePosition: {
   top:320,
   left: 195,
   position: "absolute",
 },
 edit1: {
   fontSize: FontSize.size_xl,
   fontFamily: FontFamily.rubikOne,
   width: 40,
   height: 21,
   textAlign: "left",
   color: Color.white,
 },
 edit: {
   left: 334,
   top: 57,
   position: "absolute",
 },
 whoAreYou: {
   top: 430,
   left: 26,
   fontSize: 26,
   width: 330,
   height: 50,
   textAlign: "left",
   position: "absolute",
 },
 groupChild: {
   left: 0,
   borderRadius: Border.br_md,
   backgroundColor: "#55EEDA",
   shadowColor: "rgba(0, 0, 0, 0.25)",
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowRadius: 4,
   elevation: 4,
   shadowOpacity: 1,
   marginTop:125,
   height: 100,
   top: 0,
 },
 addChild: {
   top: 111,
   left: 17,
   fontSize: 15,
   width: 67,
   height: 19,
   textAlign: "left",
   position: "absolute",
 },
 icon: {
   height: "100%",
   marginLeft: -25,
   width: "100%",
 },
 vector: {
   top: 0,
 },
 iconAdd1: {
   marginLeft: -25,
   top: 0,
 },
 iconAdd: {
   top: 25,
   marginLeft: -25,
 },
 image123x1Icon: {
   top: 389,
   width: 99,
   height: 98,
 },
 name: {
     alignSelf: "center",
     marginTop: 105,
     marginLeft:25
   // top: 496,
   // fontSize: FontSize.size_lg,
   // width:103,
   // height: 18,
   // bottom:200
 },
 home: {
   backgroundColor: Color.turquoise_100,
   flex:1,
   height: 844,
   overflow: "hidden",
   width: "100%",
 },
});
export default Home;