import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {FAB} from 'react-native-paper';
import Color from '../Color/Color'

const Home =(props)=>{
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button title="goto settng" onPress={()=> props.navigation.navigate('setting')}/>
      <Button title="goto order" onPress={()=> props.navigation.navigate('Order')}/>
      <Feather name="menu" size={24} color="black" onPress={()=>props.navigation.toggleDrawer() }/>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        theme={{colors:{accent:'skyblue'}}}
        onPress={ ()=>props.navigation.navigate('New order') }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.background,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
  },
});

export default Home
