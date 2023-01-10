import React, { useState } from "react";
 import { View } from "react-native";

 import BackgroundAnimation from "./Backround";
 import TabNavigator from "./TabNavigator";
//import Header from "../shared/header";

export default function Child() {

  
 
  return (
   

<View >
  {/* invoke the bachround image */}
  <View>
  <TabNavigator/>
  </View>
  <View>
    <BackgroundAnimation></BackgroundAnimation>  
    </View>
  
  </View>
 
);
    }
