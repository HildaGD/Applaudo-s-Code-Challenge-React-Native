import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tiny: {
    width: 100,
    height: 150
,
  },
  medium:{
    width: 150,
    height: 250
  },
  logo: {
    width: 66,
    height: 58,
  },
  containerAnime: {
    flex: 1,
    backgroundColor: '#000'
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    margin: 10
  },
  title: {
    fontSize: 32,
  },

  video: {
    flex: 1,
    height: height / 3,
    width: width,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
  labelSubtitle:{
    fontSize: 14,
    color: '#fff',
  },
  title:{
    fontSize: 20,
    color: '#fff',
  }
});

export default styles