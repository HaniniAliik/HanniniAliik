import React,{useEffect,useState} from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../HomeStyles";
import ImagePicker from 'react-native-image-picker';
import axios from "axios";



const NewChild = () => {
  const navigation = useNavigation();
  const [name,setName]=useState("");
  const [phone,setPhone]=useState(0);
  const [age,setAge]=useState(0);
  const [gendre,setGendre]=useState("");
  const [educationLevel,setEducationLevel]=useState("");
   const [hobbies,setHobbies]=useState("");
 const [image,setImage]=useState("");
 
  const chooseImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
  
    
  
        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  const childAdded =() => {

    axios
      .post("http://192.168.1.192:8000/api/children",{
name:name,
phone:phone,
age:age,
gendre:gendre,
educationLevel:educationLevel,
hobbies:hobbies,
password:"1111",
timetable:"image1.png"
      })

      .then((response) => {
        setGames(response.data);

      })
      .catch((error) => {
        console.log(error);

      })

  };

  return (
    <View style={[styles.newChild, styles.newChildLayout]}>
      <Pressable
        style={styles.done}
        onPress={() => {childAdded()
          navigation.navigate("Home")}}
      >
        <Text style={[styles.done1, styles.doneClr] }>done</Text>
      </Pressable >
      <View style={[styles.phoneParent, styles.newChildLayout]}>
        <Text style={[styles.phone, styles.ageTypo, styles.ageTypo1]}>
          Phone
        </Text>
        <Text style={[styles.age, styles.ageTypo, styles.ageTypo1]}>Age</Text>
        <Text style={[styles.gender, styles.ageTypo, styles.ageTypo1]}>
          Gender
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.buttonChild, styles.iconLayout]} />
          <Text style={[styles.done2, styles.done2Typo, styles.doneClr]}>
            Done
          </Text>
        </Pressable>
        <Text style={[styles.hobbies, styles.hobbiesTypo]}>Hobbies</Text>
        <Text style={[styles.educLevel, styles.hobbiesTypo]}>
          <Text style={styles.educLevel1}>Educ level</Text>
        </Text>
        <Text style={[styles.name, styles.ageTypo, styles.ageTypo1]}>Name</Text>
        <TextInput
        placeholder="Enter your Name"
          style={[
            styles.frameChild,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="default"
          autoCapitalize="words"
          onChangeText={(text)=>{setName(text)}}
        />
        <TextInput
          style={[ 
            styles.frameItem,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
         placeholder= "Enter your hobbies"
          keyboardType="default"
          autoCapitalize="words"
          onChangeText={(text) => setHobbies(text)}
        /> 
         <TextInput educlevel
         placeholder="Enter your eduction level"
          style={[styles.frameInner, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
          onChangeText={(text)=>{setEducationLevel(text)}}

        />
         <TextInput
          style={[
            styles.rectangleTextinput,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="default"
          autoCapitalize="words"
          placeholder="Enter your Gender"
          onChangeText={(text)=>{setGendre(text)}}
        /> 
         <TextInput
        placeholder="Enter your phone "
          style={[
            styles.frameChild1,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="number-pad"
          autoCapitalize="words"
          onChangeText={(text)=>{setPhone(parseInt(text))}}
        />
        <TextInput
        placeholder="Enter your Age"
          style={[
            styles.frameChild2,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="number-pad"
          autoCapitalize="words"
          onChangeText={(text)=>setAge(parseInt(text))}
        />
        <TouchableOpacity
          style={styles.wrapper}
          activeOpacity={0.2}
          onPress={chooseImage}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-44.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.addPicture, styles.ageTypo]}>Add picture</Text>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={[styles.back1, styles.done2Typo]}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newChildLayout: {
    overflow: "hidden",
    height: 844,
  },
  doneClr: {
    color: Color.white,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
  },
  ageTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ageTypo1: {
    color: Color.black,
    fontFamily: FontFamily.ruda,
    left: 21,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  done2Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.rubikOne,
  },
  hobbiesTypo: {
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.ruda,
    fontSize: FontSize.size_base,
    left: 21,
    position: "absolute",
  },
  frameChildLayout: {
    textAlign: "center",
    height: 29,
    width: 205,
    backgroundColor: Color.turquoise_100,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  frameChildLayout1: {
    left: 107,
    height: 29,
    width: 205,
    backgroundColor: Color.turquoise_100,
    borderRadius: Border.br_md,
  },
  done1: {
    height: "3.48%",
    width: "28.1%",
    fontSize: FontSize.size_lg,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    fontFamily: FontFamily.rubikOne,
    color: Color.white,
  },
  done: {
    left: "36.38%",
    top: "86.09%",
    position: "absolute",
  },
  phone: {
    top: 285,
  },
  age: {
    top: 366,
  },
  gender: {
    top: 450,
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.turquoise_200,
    borderStyle: "solid",
    borderColor: "#00d3b8",
    borderWidth: 2,
    position: "absolute",
  },
  done2: {
    height: "46.77%",
    width: "19.08%",
    top: "26.87%",
    left: "40.43%",
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    position: "absolute",
  },
  button: {
    top: 698,
    left: 95,
    borderRadius: Border.br_lg,
    width: 230,
    height: 41,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    position: "absolute",
  },
  hobbies: {
    top: 621,
  },
  educLevel1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  educLevel: {
    top: 534,
    width: 56,
    height: 17,
  },
  name: {
    top: 198,
  },
  frameChild: {
    top: 194,
  },
  frameItem: {
    top: 614,
  },
  frameInner: {
    top: 530,
    left: 108,
  },
  rectangleTextinput: {
    top: 446,
  },
  frameChild1: {
    top: 278,
  },
  frameChild2: {
    top: 362,
  },
  wrapper: {
    left: 135,
    top: 57,
    width: 120,
    height: 120,
    position: "absolute",
  },
  addPicture: {
    top: 110,
    left: 159,
    width: 84,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.rubikOne,
  },
  back1: {
    color: Color.turquoise_100,
    width: 51,
    height: 21,
  },
  back: {
    left: 6,
    top: 47,
    position: "absolute",
  },
  phoneParent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  newChild: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default NewChild;
