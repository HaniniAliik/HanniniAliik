import {StyleSheet, View, TouchableOpacity,Text} from 'react-native'
import React, {useEffect, useState, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import {firebase} from "../config/firebase";
import { AntDesign } from '@expo/vector-icons';

const Notification =   () => {
    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
        navigation.navigate("Login")
      };
      useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={24}  style={{marginRight: 10,color:"#0E7E80"}}/>
            </TouchableOpacity>
          )
          
        });
      }, [navigation]);
      const navigation = useNavigation();
    const [favoriteTeams, setFavoriteTeams] = useState([]);
    const setStorage = async (team) => {
        let teams ;
        try {
            let storedTeams = await AsyncStorage.getItem('notifications');
            if (storedTeams !== null) {
                teams = storedTeams;
            }
            await AsyncStorage.setItem('notifications', JSON.stringify(teams));
        } catch (error) {
            //error
        }
    };

    const getStorage = async () => {
        let firstChanges1 = []
        let filtered = []
        firebase.firestore()
            .collection("tasks").orderBy("stamp", "desc")
            .onSnapshot(
                {
                    next: (QuerySnapshot) => {
                        const data = [];
                        QuerySnapshot.docChanges().forEach(value => {
                                let doc = value.doc.data()
                                data.push({...doc, type: value.type}
                                )
                            }
                        )

                        if (firstChanges1.length === 0) {
                            firstChanges1 = data;
                        } else {
                            filtered = data.filter(value =>
                                !firstChanges1.find(value1 => JSON.stringify({type:value.type, task: value.task}) === JSON.stringify({type:value1.type, task: value1.task}))
                            )
                            firstChanges1 = data;
                            if (filtered.length>0) {
                                setFavoriteTeams(prevState =>{
                                    let tt=[]
                                    tt = prevState.filter(value =>
                                        !filtered.find(value1 => JSON.stringify({type:value.type, task: value.task}) === JSON.stringify({type:value1.type, task: value1.task}))
                                    )
                                    return [...prevState,...filtered];
                                } )
                            }
                        }
                    }
                }
            );

    }

    useEffect(() => {
        getStorage()
    }, [favoriteTeams, setFavoriteTeams])
    return (
        <View>
            {favoriteTeams.length > 0?
                favoriteTeams.map((item) => {
                    return (<Text>Task {item.type} : {item.task}</Text>) })
            :  null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
export default Notification