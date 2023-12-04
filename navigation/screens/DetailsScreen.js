import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function DetailsScreen({ navigation }) {
  const handlePress = () => {
    // Handle button press
    console.log('See more Pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>workout history </Text>
      </View>


      <View style={styles.rectangle}>
        <Text style={styles.rectangleTextTop}>Legs </Text>
        <Text style={styles.rectangleTextDate}>YY-MM-DD</Text>
        <Pressable
          style={styles.rectangleTextMiddleButton}
          onPress={handlePress}
        >
          <Text style={styles.rectangleTextMiddle}>See full workout</Text>
        </Pressable>
      </View>

      <View style={styles.rectangle}>    
        <Pressable
            style={styles.secondrectangleButton}
            onPress={handlePress}
            >
            <Text style={styles.secondRectangleText}>See full workout previous history</Text>
        </Pressable>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  calendarContainer: {
    marginBottom: 100,
  },
  textContainer: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 8,
  },

  text1: {
    fontSize: 20,
    color: 'black',
  },

  rectangle: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    padding: 2.5,
    width: '90%',
    height: 125,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#808080',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center', 
    marginBottom: 20,
  },

  secondRectangle: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    padding: 2.5,
    width: '90%',
    height: 125,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#808080',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },

  rectangleTextTop: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  rectangleTextDate: {
    fontSize: 11,
    color: 'gray',
    marginBottom: 5,
  },
  rectangleTextMiddleButton: {
    alignSelf: 'center',
    padding: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  secondrectangleButton: {
    alignSelf: 'center',
    padding: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 50,
  },

  rectangleTextMiddle: {
    fontSize: 16,
    color: 'black',
  },
});