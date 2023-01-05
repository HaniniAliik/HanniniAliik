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
import GlobalStyles from "../GlobalStyles";

const FrameScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.doneParent, styles.parentLayout]}>
      <Pressable
        style={styles.done}
        onPress={() => navigation.navigate("Frame1")}
      >
        <Text style={styles.done1}>done</Text>
      </Pressable>
      <View style={[styles.phoneParent, styles.parentLayout]}>
        <Text style={[styles.phone, styles.ageTypo, styles.ageTypo1]}>
          Phone
        </Text>
        <Text style={[styles.age, styles.ageTypo, styles.ageTypo1]}>Age</Text>
        <Text style={[styles.gender, styles.ageTypo, styles.ageTypo1]}>
          Gender
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Frame1")}
        >
          <View style={styles.buttonChild} />
          <Text style={[styles.done2, styles.ageTypo]}>done</Text>
        </Pressable>
        <Text style={[styles.hobbies, styles.hobbiesTypo]}>Hobbies</Text>
        <Text style={[styles.educLevel, styles.hobbiesTypo]}>
          <Text style={styles.educLevel1}>Educ level:</Text>
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
          style={[styles.frameItem, styles.frameChildLayout]}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={[
            styles.frameInner,
            styles.frameChildLayout,
            styles.frameChildLayout1,
          ]}
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
        <Pressable
          style={styles.iconChevronLeft}
          onPress={() => navigation.navigate("Frame1")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-icon-chevron-left.png")}
          />
        </Pressable>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Pressable style={styles.iconEdit} onPress={() => {}}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-icon-edit2.png")}
          />
        </Pressable>
        <Image
          style={styles.frameChild3}
          resizeMode="cover"
          source={require("../assets/ellipse-44.png")}
        />
        <View style={[styles.lineView, styles.lineViewBorder]} />
        <View style={[styles.frameChild4, styles.lineViewBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    overflow: "hidden",
    height: 844,
  },
  ageTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.ruda,
    position: "absolute",
  },
  ageTypo1: {
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 21,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.ruda,
  },
  hobbiesTypo: {
    color: GlobalStyles.Color.gray,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.ruda,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 21,
    position: "absolute",
  },
  frameChildLayout: {
    textAlign: "center",
    height: 29,
    width: 163,
    backgroundColor: GlobalStyles.Color.turquoise_200,
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  frameChildLayout1: {
    left: 121,
    height: 29,
    width: 163,
    backgroundColor: GlobalStyles.Color.turquoise_200,
    borderRadius: GlobalStyles.Border.br_md,
  },
  lineViewBorder: {
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  done1: {
    height: "3.48%",
    width: "28.1%",
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontFamily: GlobalStyles.FontFamily.rubikOne,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    color: GlobalStyles.Color.white,
  },
  done: {
    left: "36.38%",
    top: "86.09%",
    position: "absolute",
  },
  phone: {
    top: 278,
  },
  age: {
    top: 351,
  },
  gender: {
    top: 426,
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: GlobalStyles.Color.turquoise_100,
    borderColor: "#00bfa6",
    borderWidth: 2,
    borderStyle: "solid",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  done2: {
    height: "60.81%",
    width: "28.04%",
    top: "20.8%",
    left: "35.8%",
    fontSize: 20,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.ruda,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    color: GlobalStyles.Color.white,
  },
  button: {
    top: 681,
    left: 108,
    borderRadius: 40,
    width: 193,
    height: 43,
    transform: [
      {
        rotate: "0.12deg",
      },
    ],
    position: "absolute",
  },
  hobbies: {
    top: 582,
  },
  educLevel1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  educLevel: {
    top: 498,
  },
  name: {
    top: 205,
  },
  frameChild: {
    top: 198,
  },
  frameItem: {
    top: 578,
    left: 113,
  },
  frameInner: {
    top: 494,
  },
  rectangleTextinput: {
    top: 419,
  },
  frameChild1: {
    top: 271,
  },
  frameChild2: {
    top: 344,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconChevronLeft: {
    left: "2.56%",
    top: "1.9%",
    right: "91.73%",
    bottom: "94.5%",
    width: "5.71%",
    height: "3.61%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 119,
    left: 234,
    width: 25,
    height: 25,
    position: "absolute",
  },
  iconEdit: {
    left: "61.28%",
    top: "14.57%",
    right: "34.62%",
    bottom: "83.41%",
    width: "4.1%",
    height: "2.01%",
    position: "absolute",
  },
  frameChild3: {
    top: 48,
    left: 155,
    width: 100,
    height: 100,
    position: "absolute",
  },
  lineView: {
    top: 97,
    left: 174,
    borderTopWidth: 3,
    width: 63,
    height: 3,
  },
  frameChild4: {
    top: 67,
    left: 204,
    borderRightWidth: 3,
    width: 3,
    height: 63,
  },
  phoneParent: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  doneParent: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default FrameScreen2;
