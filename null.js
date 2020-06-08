import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Order from './Screen/Order';
import Color from './Color/Color';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const App = () => {
  const homeStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  // const homeStackScreen =(props)=>(
  //   <homeStack.Navigator  screenOptions={myOption}>
  //       <homeStack.Screen name="Home" component={Home}  options={{
  //         headerLeft:()=>(
  //           <Feather name="menu" size={25} color="black"  onPress={()=>props.navigation.toggleDrawer()} />
  //         )
  //       }}
  //       />
  //       <homeStack.Screen name="setting" component={Setting} options={{
  //         headerLeft:()=>(
  //           <Feather name="menu" size={25} color="black"  onPress={()=>props.navigation.toggleDrawer()} />
  //         )
  //       }} />
  //       <homeStack.Screen name="Order" component={Order} />
        
  //     </homeStack.Navigator>

  // );
  // const settingStackScreen =(props)=>(
  //   <homeStack.Navigator  screenOptions={myOption}>
       
  //       <homeStack.Screen name="setting" component={Setting} />
  //     </homeStack.Navigator>

  // );
  return (
    <NavigationContainer  >
      {/* <Stack.Navigator  screenOptions={myOption}>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator> */}


       {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeStackScreen} />
        <Drawer.Screen name="Notifications" component={Order} />
      </Drawer.Navigator> */}

<Tab.Navigator  tabBarOptions={{
        activeTintColor: Color.primary,
      }}>
      <Tab.Screen name="Home" component={Home} 
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color } size={size} />
          ),
        }}
        />
      
      <Tab.Screen name="order" component={Order}
      options={{
        tabBarLabel: 'Order',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Settings" component={Setting}  
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="settings" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
    </NavigationContainer>

  );


}
const myOption={
  headerStyle: {
    backgroundColor: Color.primary,

  },
  headerTintColor: Color.title, // title color
  headerTitleStyle:{
    fontWeight:"bold",
    fontSize:20
  }

}
export default App
