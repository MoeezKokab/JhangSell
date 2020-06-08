
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Screen/Navigator';
import {FAB} from 'react-native-paper';

import AddNewOrder from './Screen/AddNewOrder'




const App =(props)=>{
  return (
    <View style={styles.container}>
   <Navigator></Navigator>
  

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  
  
});

export default App
