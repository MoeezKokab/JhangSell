import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Home from './Home';
import Setting from './Setting';
import AddNewOrder from './AddNewOrder'
import Order from './Order';
import Color from '../Color/Color';
import Login from './Login';
import SignUp from './Signup'
import Write from './Write'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';



const Navigator = (props) => {
  const [loginScreen, setLoginScreen] = useState(true)
  const SetLoginScreen = (input) => {
    setLoginScreen(input)
  }
  console.log(loginScreen)

  // this is for Stack.Navigator
  const HomeStack = createStackNavigator();
  const OrderStack = createStackNavigator();
  const SettingStack = createStackNavigator();
  const LoginStack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const Tab = createBottomTabNavigator();




  const HomeStackScreen = (props) => (

    <HomeStack.Navigator screenOptions={myOption}>
      <HomeStack.Screen name="Home" component={Home} options={{
        headerLeft: () => (
          <Feather name="menu" size={25} color="black" onPress={() => props.navigation.toggleDrawer()} />
        )
      }} />

      <HomeStack.Screen name="New order" component={AddNewOrder} />
      <HomeStack.Screen name="Write your order" component={Write} />
    </HomeStack.Navigator>


  )

  const OrderStackScreen = (props) => (

    <OrderStack.Navigator screenOptions={myOption}>

      <OrderStack.Screen name="Order" component={Order} options={{
        headerLeft: () => (
          <Feather name="menu" size={25} color="black" onPress={() => props.navigation.toggleDrawer()} />
        )
      }} />

    </OrderStack.Navigator>


  )

  const SettingStackScreen = (props) => (

    <SettingStack.Navigator screenOptions={myOption}>

      <SettingStack.Screen name="setting" component={Setting} options={{
        headerLeft: () => (
          <Feather name="menu" size={25} color="black" onPress={() => props.navigation.toggleDrawer()} />
        )
      }} />
    </SettingStack.Navigator>


  )

  const BottomTab = () => (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: Color.primary,

    }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="order" component={OrderStackScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Settings" component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
const GetLoginScreen = () => {
  return loginScreen
}
if(loginScreen){

  return (
    
 
    < NavigationContainer  >
    <LoginStack.Navigator headerMode='screen' screenOptions={myOption}>
      <LoginStack.Screen name="Login" component={Login} initialParams={{setLoginScreen:SetLoginScreen}} />
      
      <LoginStack.Screen name="Signup" component={SignUp} />
    </LoginStack.Navigator>
  
   </NavigationContainer> 
  
  
      

  );


}

 else {
  return (


    < NavigationContainer  >
          <Tab.Navigator tabBarOptions={{
      activeTintColor: Color.primary,

    }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="order" component={OrderStackScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Settings" component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
    </NavigationContainer>




  );


}}
const myOption = {
  headerStyle: {
    backgroundColor: Color.primary,

  },
  headerTintColor: Color.title, // title color
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20
  }

}
export default Navigator