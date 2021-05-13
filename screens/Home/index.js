import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

import SearchArea from '../../components/SearchArea';
import ListAllCities from '../../components/ListAllCities'

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.screenTitle} > Search </Text>
      <SearchArea navigation={navigation} />
      <ListAllCities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 43,
  },
  screenTitle: {
    fontSize: 22,
    paddingVertical: 10,
    paddingLeft: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#DBDBDB'
  }
})

export default Home;