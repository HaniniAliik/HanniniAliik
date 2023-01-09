import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const FrameScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.parentLayout]}>
      <View style={[styles.phoneParent, styles.parentLayout]}>
        <Text style={[styles.phone, styles.ageTypo]}>Phone</Text>
        <Text style={[styles.age, styles.ageTypo]}>Age</Text>
        <Text style={[styles.gender, styles.ageTypo]}>Gender</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-220.png")}
        />
        <Text style={[styles.hobbies, styles.hobbiesTypo]}>Hobbies</Text>
        <Text style={[styles.educLevel, styles.hobbiesTypo]}>
          <Text style={styles.educLevel1}>Educ level:</Text>
        </Text>
        <Text style={[styles.name, styles.ageTypo]}>Name</Text>
        <TextInput
          style={[styles.frameItem, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.frameInner, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.rectangleTextinput, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.frameChild1, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.frameChild2, styles.frameChildLayout]}
          keyboardType="number-pad"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.frameChild3, styles.frameChildLayout]}
          keyboardType="number-pad"
          autoCapitalize="words"
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Frame1")}
        />
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Pressable
          style={[styles.saveChanges, styles.deletePosition]}
          onPress={() => navigation.navigate("Frame1")}
        >
          <Text style={[styles.saveChanges1, styles.delete1Typo]}>
            save changes
          </Text>
        </Pressable>
        <Pressable
          style={[styles.delete, styles.deletePosition]}
          onPress={() => navigation.navigate("Frame1")}
        >
          <Text style={[styles.delete1, styles.delete1Typo]}>delete</Text>
        </Pressable>
        <Pressable style={styles.iconEdit} onPress={() => {}}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-icon-edit1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 844,
    overflow: "hidden",
  },
  ageTypo: {
    textAlign: "left",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.ruda,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 13,
    position: "absolute",
  },
  hobbiesTypo: {
    color: GlobalStyles.Color.gray,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.ruda,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 13,
    position: "absolute",
  },
  frameChildLayout: {
    textAlign: "center",
    height: 29,
    width: 163,
    backgroundColor: GlobalStyles.Color.turquoise_200,
    borderRadius: GlobalStyles.Border.br_md,
    left: 125,
    position: "absolute",
  },
  rectangleLayout: {
    height: 37,
    borderRadius: GlobalStyles.Border.br_sm,
    top: 681,
    position: "absolute",
  },
  deletePosition: {
    top: 688,
    position: "absolute",
  },
  delete1Typo: {
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.rubikOne,
    textTransform: "uppercase",
    letterSpacing: 0.4,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  phone: {
    top: 262,
  },
  age: {
    top: 342,
  },
  gender: {
    top: 422,
  },
  frameChild: {
    top: 36,
    left: 157,
    borderRadius: 50,
    width: 100,
    height: 100,
    position: "absolute",
  },
  hobbies: {
    top: 597,
  },
  educLevel1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  educLevel: {
    top: 505,
  },
  name: {
    top: 184,
  },
  frameItem: {
    top: 177,
  },
  frameInner: {
    top: 587,
  },
  rectangleTextinput: {
    top: 501,
  },
  frameChild1: {
    top: 415,
  },
  frameChild2: {
    top: 335,
  },
  frameChild3: {
    top: 255,
  },
  ellipseIcon: {
    top: 111,
    left: 232,
    width: 25,
    height: 25,
    position: "absolute",
  },
  rectanglePressable: {
    left: 43,
    backgroundColor: GlobalStyles.Color.turquoise_100,
    width: 135,
  },
  rectangleView: {
    left: 229,
    backgroundColor: "#ff0000",
    width: 111,
  },
  saveChanges1: {
    width: 93,
  },
  saveChanges: {
    left: 64,
  },
  delete1: {
    width: 102,
  },
  delete: {
    left: 234,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconEdit: {
    left: "61.03%",
    top: "13.86%",
    right: "35.64%",
    bottom: "84.7%",
    width: "3.33%",
    height: "1.44%",
    position: "absolute",
  },
  phoneParent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default FrameScreen1;
