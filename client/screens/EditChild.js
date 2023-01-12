import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../HomeStyles";

const EditChild = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.editChild, styles.editChildLayout]}>
      <Pressable
        style={styles.done}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.done1}>done</Text>
      </Pressable>
      <View style={[styles.phoneParent, styles.editChildLayout]}>
        <Text style={[styles.phone, styles.ageTypo, styles.ageTypo1]}>
          Phone
        </Text>
        <Text style={[styles.age, styles.ageTypo, styles.ageTypo1]}>Age</Text>
        <Text style={[styles.gender, styles.ageTypo, styles.ageTypo1]}>
          Gender
        </Text>
        <Pressable
          style={[styles.button, styles.buttonLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.buttonChild, styles.buttonPosition]} />
          <Text
            style={[styles.saveChanges, styles.back1Typo, styles.deleteLayout]}
          >
            Save changes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.buttonItem, styles.buttonPosition]} />
          <Text style={[styles.delete, styles.back1Typo, styles.deleteLayout]}>
            Delete
          </Text>
        </Pressable>
        <Text style={[styles.hobbies, styles.hobbiesTypo]}>Hobbies</Text>
        <Text style={[styles.educLevel, styles.hobbiesTypo]}>
          <Text style={styles.educLevel1}>Educ level</Text>
        </Text>
        <Text style={[styles.name, styles.ageTypo, styles.ageTypo1]}>Name</Text>
        <TextInput
          style={[
            styles.frameChild,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[
            styles.frameItem,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.frameInner, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[
            styles.rectangleTextinput,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[
            styles.frameChild1,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="number-pad"
          autoCapitalize="words"
        />
        <TextInput
          style={[
            styles.frameChild2,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
          keyboardType="number-pad"
          autoCapitalize="words"
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-44.png")}
        />
        <Text style={[styles.addPicture, styles.ageTypo]}>Add picture</Text>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editChildLayout: {
    overflow: "hidden",
    height: 844,
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
  buttonLayout: {
    height: 41,
    width: 131,
    borderRadius: Border.br_lg,
    top: 698,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    position: "absolute",
  },
  buttonPosition: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  back1Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.rubikOne,
  },
  deleteLayout: {
    height: "46.77%",
    fontSize: FontSize.size_xl,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    color: Color.white,
    position: "absolute",
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
    color: Color.white,
    fontFamily: FontFamily.rubikOne,
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
    backgroundColor: Color.turquoise_200,
    borderColor: "#00d3b8",
  },
  saveChanges: {
    width: "112.49%",
    top: "26.66%",
    left: "4.46%",
  },
  button: {
    left: 194,
  },
  buttonItem: {
    backgroundColor: "#d30000",
    borderColor: "#d30000",
  },
  delete: {
    width: "50.03%",
    top: "26.79%",
    left: "29.01%",
  },
  button1: {
    left: 43,
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
  ellipseIcon: {
    top: 33,
    left: 135,
    width: 120,
    height: 120,
    position: "absolute",
  },
  addPicture: {
    top: 86,
    left: 153,
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
    left: 10,
    top: 47,
    position: "absolute",
  },
  phoneParent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  editChild: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default EditChild;
