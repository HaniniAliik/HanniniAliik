
import * as React from "react";
import { FontFamily, FontSize } from "../../HomeStyles";
import { Image,Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { Color } from "../../HomeStyles";
import { FontAwesome5 } from 'react-native-vector-icons';
import { useNavigation } from "@react-navigation/core";

const ExistChild = (props) => {
  const navigation = useNavigation();
  const { editMode, onPress } = props;
  
  return ( 
 <View style={{ flexDirection: "row", alignItems: "center" }}>
  <View style={{ flexDirection: "column", alignItems: "center" }}>
    {/* <Image style={[styles.image123x1Icon, styles.namePosition,]} resizeMode="cover" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }} /> */}
    <Image 
  style={[
    styles.image123x1Icon, 
    styles.namePosition,
    { opacity: props.editMode ? 0.5 : 1 }
  ]} 
  resizeMode="cover" 
  source={{ uri: "https://cdn.dribbble.com/users/948184/screenshots/4270844/38_octopus2_db.gif" }} 
/>
  
         {props.editMode && 
  
      <FontAwesome5 name="pen" size={24} color="#fff" style={{ position: "absolute",
       top: "31%",
        left: "43%"
       }}
       onPress={() => navigation.navigate("EditChild")}/>
    }
  
    <Text style={[styles.name, styles.namePosition, styles.nameTypo]}>
      {props.name} 
    </Text>
  </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    alignItems: "center",
  },
  image123x1Icon: {
    width: 99,
    height: 98,
  },
  name: {
    marginTop:10,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    width: 103,
    height: 18,
  },
  nameTypo: {
    fontFamily: FontFamily.ruda,
    fontWeight: "700",
    color: Color.white,
  }
});



export default ExistChild;