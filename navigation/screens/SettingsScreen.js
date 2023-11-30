import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <RectangleBox text="Account"/>
            <RectangleBox text="Notifications"/>
            <RectangleBox text="Apperance"/>
            <RectangleBox text="Privacy & Security"/>
            <RectangleBox text="Help & Support"/>
            <RectangleBox text="About"/>
        </View>
    );
}


const RectangleBox = ({ text, icon }) => {
    return (
        <View style={styles.rectangle}>
            {icon && <Icon name={icon} size={30} color="#black" />}
            {text && <Text style={styles.boxText}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        
    },

    rectangle: {
        width: '100%',
        height: 75,
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        borderColor: '#808080',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxText: {
        fontSize: 14,
        color: 'black',
    },
})