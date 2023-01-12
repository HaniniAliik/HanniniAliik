import { TouchableOpacity, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Pressable, View, HStack, Linking  } from "react-native";
import { Color, Border } from "./gameStyles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from 'react-native-vector-icons';
import { useState, useEffect } from "react";
import axios from "axios";
// RN Code
// const Item = ({ game }) => {
//   return <View style={styles.item}>{game.icon}</View>;
// };
const colors = {
  themeColor: "#00BFA6",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};
export default function Games() {
  const navigation = useNavigation();
  const [games, setGames] = useState([])
  useEffect(() => {

    axios
      .get("http://172.20.10.3:8000/api/allGames")

      .then((response) => {
        setGames(response.data);

      })
      .catch((error) => {
        console.log(error);

      })

  }, []);

  return (

    <View style={styles.home}>

      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginVertical: -40,
          marginTop: -10,
          alignSelf: "center",
          bottom: 0,
        }}
      >
        Games

      </Text>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          style={{
            backgroundColor: colors.background, flex: 1
          }}

        >

          <View style={[styles.rowContainer]}>

            {games.map((e, i) => {
              console.log("+++++++", e.image);
              return (
                <View
                  style={[styles.elKaba1, { width: "30%", height: "30%" }]} key={i}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {/* <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image style={[styles.image123x1Icon,styles.groupChild,
                    styles.namePosition
                    ]} resizeMode="cover" source={{ uri: e.image }} />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(e.link), e.id;
                      }}
                    >
                    </TouchableOpacity>
                  </View> */}
                    <Pressable
                      style={{ flexDirection: "column", alignItems: "center" }}
                      
                      onPress={() => Linking.openURL(e.link, { id: e.id })}
                    >
                      <Image
                        style={[styles.image123x1Icon, styles.groupChild, styles.namePosition]}
                        resizeMode="cover"
                        source={{ uri: e.image }}
                      />
                    </Pressable>
                  </View>
                </View>

              );
            })}
          </View>
            <View style={{marginBottom:"100%"}}>
              
            </View>
        </ScrollView>
      </SafeAreaView>

    </View>
  );
};

const styles = {


  elKaba1: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 100,
    paddingTop: 0,
    paddingBottom: -20,
    justifyContent: "space-between",

  },

  rowContainer: {
    paddingTop: 30,

    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"


  },


  namePosition: {
    left: 57,

    position: "relative",
  },

  groupChild: {
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: "#55eeda",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 100,
    top: 0,
  },


  image123x1Icon: {
    top: 389,
    width: 99,
    height: 99,
  },

  home: {
    backgroundColor: Color.turquoise_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },

};
