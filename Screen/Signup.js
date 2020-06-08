import React, { useState } from 'react';
import { StyleSheet, Text, View , Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Color from '../Color/Color'


const SignUp = (props) => {

  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')

  const Add =()=>{
    if(ID && password && number && mail){
     props.route.params.AddData(ID,password)
    }
    else
    {Alert.alert('you miss something')}
    Alert.alert('Account successfully created')
     
   
  }









  return (
    <View style={styles.container}>

<View style={{paddingTop:10}}>
      <TextInput
      style={{backgroundColor:Color.background}}
      theme={theme}
        label='ID'
        value={ID}
        onChangeText={text => setID(text)}
      />
      </View>
      <View style={{paddingTop:10}}>
      <TextInput
      theme={theme}
      style={{backgroundColor:Color.background}}
        label='password'
        value={password}

        onChangeText={text => setPassword(text)}
      />
      </View>
      <View style={{paddingTop:10}}>
      <TextInput
      style={{backgroundColor:Color.background}}
      theme={theme}
        label='number'
        value={number}
        keyboardType="number-pad"
    
        onChangeText={text => setNumber(text)}
      />
      </View>
      <View style={{paddingTop:10}}>
      <TextInput
      theme={theme}
      style={{backgroundColor:Color.background}}
        label='mail'
        value={mail}
        onChangeText={text => setMail(text)}
      />
      </View>
      <Button style={{marginTop:30}} icon="content-save" theme={theme} mode="text" onPress={()=> Add()}>
      Save
  </Button>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    
  },
});

const theme={colors:{primary:Color.button}}

export default SignUp