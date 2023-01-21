import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput , StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AsyncStorage } from 'react-native';

const ParentProfile = ({ name, email, phone, photo }) => {
    const [profileImage, setProfileImage] = useState(photo);
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newPhone, setNewPhone] = useState(phone);

    const handleSelectImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(profileImage);
            console.log(result);
            setProfileImage({uri: result.assets[0].uri});

            if (!result.canceled) {
                
                setProfileImage({uri: result.assets[0].uri});
                await AsyncStorage.setItem('selectedImage', result.assets[0].uri);

            }
            if (!result.canceled && result.localUri) {
                setProfileImage({uri: result.assets[0].uri});
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const retrieveImage = async () => {
            try {
                const selectedImage = await AsyncStorage.getItem('selectedImage');
                if (selectedImage) {
                    setProfileImage({uri: selectedImage});
                }
            } catch (error) {
                console.log(error);
            }
        }
        retrieveImage();
    }, []);

    const handleEdit = () => {
        setEditing(!editing);
    }

    const handleSave = async () => {
        setNewName(newName);
        setNewEmail(newEmail);
        setNewPhone(newPhone);
        setEditing(!editing);
        try {
            await AsyncStorage.setItem('name', newName);
            await AsyncStorage.setItem('email', newEmail);
            await AsyncStorage.setItem('phone', newPhone);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        const retrieveData = async () => {
            try {
                const name = await AsyncStorage.getItem('name');
                const email = await AsyncStorage.getItem('email');
                const phone = await AsyncStorage.getItem('phone');
                if (name) {
                    setNewName(name);
                }
                if (email) {
                    setNewEmail(email);
                }
                if (phone) {
                    setNewPhone(phone);
                }
            } catch (error) {
                console.log(error);
            }
        }
        retrieveData();
    }, []);
    
    

    return (
        <View style={styles.background}>
            
            <TouchableOpacity onPress={handleSelectImage}>
                <Image source={profileImage} style={styles.image} />
            </TouchableOpacity>
            { editing ? (
                <View>
                    <TextInput
                        style={styles.input}
                        value={newName}
                        onChangeText={setNewName}
                    />
                    <TextInput
                        style={styles.input}
                        value={newEmail}
                        onChangeText={setNewEmail}
                    />
                    <TextInput
                        style={styles.input}
                        value={newPhone}
                        onChangeText={setNewPhone}
                    />
                </View>
            ) : (
                <View>
                   <View style={styles.row}>
    <MaterialIcons name="account-circle" size={24} color="black" />
    <Text style={styles.text}>{newName}</Text>
</View>
                    <View style={styles.row}>
                        <MaterialIcons name="email" size={24} color="black" />
                        <Text style={styles.text}>{newEmail}</Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialIcons name="phone" size={24} color="black" />
                        <Text style={styles.text}>{newPhone}</Text>
                    </View>
                </View>
            )}
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
            { editing ? (
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text>Save</Text>
                </TouchableOpacity>
            ) : null }
        </View>
    );
};
const styles = StyleSheet.create({
    background: {
        backgroundColor:"rgba(0, 191, 166, 0.15)"  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"rgba(0, 191, 166, 0.15)",
        padding: 20,
        
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginBottom: 30,
        top: 10,
        right: -5,
        
    },
    
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10
        
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        left: 150,
        top: 30
        
    },
    text: {
        marginLeft: 10,
        
    },
    
    editButton: {
        position: 'absolute',
        bottom: 290,
        right: 1,
        borderRadius: 90,
        backgroundColor: 'grey'
    },
    saveButton: {
        position: 'absolute',
        bottom: -10,
        borderRadius: 20,
        height: 20,
        width: 50,
        backgroundColor: 'green',
        alignItems: 'center'
        
    },
});

export default ParentProfile;
