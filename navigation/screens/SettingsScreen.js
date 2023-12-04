import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function SettingsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <RectangleBox text="Account" icon="user" />
        <RectangleBox text="Notifications" icon="bell" />
        <RectangleBox text="Appearance" icon="paint-brush" />
        <RectangleBox text="Privacy & Security" icon="lock" />
        <RectangleBox text="Help & Support" icon="question-circle" />
        <RectangleBox text="About" icon="info-circle" />
      </View>
    );
  }
  
  const RectangleBox = ({ text, icon }) => {
    return (
      <View style={styles.rectangle}>
        {icon && <Icon name={icon} size={18} color="#C7B2D6" style={styles.icon} />}
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
        flexDirection: 'row'
    },

    boxText: {
        fontSize: 14,
        color: 'black',
        
    },

    icon: {
        marginRight: 10, 
      },
})