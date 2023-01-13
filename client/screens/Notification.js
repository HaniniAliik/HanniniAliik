import { View, Switch,StyleSheet } from 'react-native'
import React,{Component, useState} from 'react'







const Notification = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

 
    return (
      <View style={styles.container}>        
        <Switch
          trackColor={{ false: "#767577", true: "#9fd3c7" }}
          thumbColor={isEnabled ? "#9fd3c7" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });
export default Notification