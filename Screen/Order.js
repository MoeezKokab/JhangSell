import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Color from '../Color/Color'

const Order =(props)=>{
  return (
    <View style={styles.container}>
      <Text>Order!</Text>
      <Button title="goto home" onPress={()=> props.navigation.navigate('Home')}/>
      <Feather name="menu" size={24} color="black" onPress={()=>props.navigation.toggleDrawer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:Color.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Order
