import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Pressable, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

  // RN Code
  const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>;
  };
  
  export default function Games() {
    const navigation = useNavigation();
    return (
      <View style={styles.app}>
       
        <FlatList
          data={itemData}
          numColumns={4}
          renderItem={Item}
          keyExtractor={(item) => item.alt}
        />
       
      </View>
    );
  }
  
  
  // Sample Data
  const itemData = [
    {
      icon: (
        <Pressable
          
        onPress={() => navigation.navigate("UpdateChild")}
      >
        <Image
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      )
    },
    {
      icon: (
        <Pressable
          
        onPress={() => navigation.navigate("UpdateChild")}
      >
        <Image
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      )
    },
    {
        icon: (
          <Pressable
            
          onPress={() => navigation.navigate("UpdateChild")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        )
      },
      {
        icon: (
          <Pressable
            
          onPress={() => navigation.navigate("UpdateChild")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        )
      },
      {
        icon: (
          <Pressable
            
          onPress={() => navigation.navigate("UpdateChild")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        )
      },
      {
        icon: (
          <Pressable
            
          onPress={() => navigation.navigate("UpdateChild")}
        >
          <Image
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        )
      },
   
  ]

  
const styles = {
    app: {
      flex: 4, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: "100%",
      top:90
    },
    item: {
      flex: 1,
      maxWidth: "25%", // 100% devided by the number of rows you want
      alignItems: "center",
      
      // my visual styles; not important for the grid
      padding: 10,
      backgroundColor: "rgba(249, 180, 45, 0.25)",
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  };
  