import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

import SearchArea from '../../components/SearchArea';
import ListAllCities from '../../components/ListAllCities'

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.screenTitle} > Search </Text>
      <SearchArea />
      <ListAllCities />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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