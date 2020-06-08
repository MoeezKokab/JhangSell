
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../Color/Color'

const Setting =(props)=>{
  return (
    <View style={styles.container}>
      <Text>setting!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Setting
