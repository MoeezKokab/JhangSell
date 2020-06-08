import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Color from '../Color/Color'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';











const Login = (props) => {





  const [Data, SetData] = useState([{ id: 'moeez', password: 'moeez' }, { id: 'moeez', password: 'Moeez' }])

  const AddData = (id, password) => {
    if (!Data.find(Element => Element.id === id)) {
      props.navigation.goBack()
      SetData(preItem => {
        return [{ id, password }, ...preItem]

      }
      )


    }
    else { Alert.alert('try other id') }






  }

  // checking enter login id and password  

  const LoginCheck = () => {
    if (Data.find(Element => Element.id === ID && Element.password === password)) {


      return props.route.params.setLoginScreen(false)
    }
    Alert.alert('Enter invalid password or id')

  }
  const [ID, setID] = useState('')
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>

<View style={{marginTop:30}}> 
      <Input placeholder="User ID" secureTextEntry={false}
        label='ID'
        value={ID}
        onChangeText={text => setID(text)}
        
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        } />
        </View>

      <Input placeholder="Password" secureTextEntry={true}
        label='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='black'
          />
        } />

      <View style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        marginTop:"5%"
      }}>
        
        <Button icon="login" mode="text" theme={{colors:{primary:Color.button}}} onPress={() => LoginCheck()}>
          Login
  </Button>
        <Button icon="login" mode="text"  theme={{colors:{primary:Color.button}}} onPress={() => props.navigation.navigate('Signup', { AddData: AddData })} style={{ marginTop: -9, marginLeft: 70 }}>
          SignUp
  </Button>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,



  },

});






export default Login;