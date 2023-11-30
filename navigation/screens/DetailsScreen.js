import * as React from 'react';
import {  SafeAreaView, ScrollView, StyleSheet, View, text} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Calendar
        
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
