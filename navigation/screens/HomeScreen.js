import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredRectangleData, setFilteredRectangleData] = React.useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);

    const filteredData = rectangleData.filter((data) => {
      return (
        data.title.toLowerCase().includes(text.toLowerCase()) ||
        data.text1.toLowerCase().includes(text.toLowerCase()) ||
        data.text2.toLowerCase().includes(text.toLowerCase())
      );
    });

    setFilteredRectangleData(filteredData);
  };

  const initialRectangleData = [
    { title: "Upper / Lower", text1: "By lorem", text2: "Level: ispum" },
    { title: "PPL", text1: "By dolor", text2: "Level: amet" },
    { title: "Full Body", text1: "By elit", text2: "Level: posem" }
  ];

  const rectangleData = [
    ...initialRectangleData,
    ...initialRectangleData,
    ...initialRectangleData,
    ...initialRectangleData,
    ...initialRectangleData,
    ...initialRectangleData,
    ...initialRectangleData,
  ];

  const renderRectangleBoxes = () => {
    const dataToRender = searchQuery.length > 0 ? filteredRectangleData : rectangleData;

    return dataToRender.map((data, index) => (
      <RectangleBox key={index} data={data} />
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            onChangeText={handleSearch}
          />
        </View>

        {/* Series of RectangleBoxes */}
        {renderRectangleBoxes()}
      </View>
    </ScrollView>
  );
}

const RectangleBox = ({ data }) => {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.boxText}>{data.title}</Text>
      <Text style={[styles.text1, { marginBottom: 5 }]}>{data.text1}</Text>
      <Text style={styles.text2}>{data.text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  rectangle: {
    width: '80%', 
    height: 75,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#808080',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  boxText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text1: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 14,
    color: '#642B8C',
    fontStyle: 'italic',
    borderColor: 'rgba(199, 178, 214, 0.2)', 
    backgroundColor: 'rgba(199, 178, 214, 0.2)',
    borderWidth: 0.5,
    borderRadius: 3,
  },
});