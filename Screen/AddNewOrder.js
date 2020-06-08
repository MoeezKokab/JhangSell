
import React, { useState } from 'react';
import { StyleSheet, Text, View   ,Modal} from 'react-native';

import { Button } from 'react-native-paper';
import Color from '../Color/Color'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Setting =(props)=>{

  const [model, setModel]=useState(false)



  const PickPhotoFromGalary = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted) {
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        })
         console.log(data)
      
      
    }
    else {
        Alert.alert('Give permission')
    }
}
const PickPhotoFromCamera = async () => {
  const { granted } = await Permissions.askAsync(Permissions.CAMERA)
  if (granted) {
      let data = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.5
      })
      console.log(data)
    
      
  }
  else {
      Alert.alert('give permission')
  }
}   

  
  return (
    <View style={styles.container}>
      <Text>new order</Text>
      <Button title="got home" onPress={()=> props.navigation.navigate('Home')}/>
      <Button icon="tooltip-edit"   theme={{colors:{primary:Color.button}}} mode="contained" onPress={()=> props.navigation.navigate('Write your order')}>
                    write 
             </Button>
      <Button icon="check"   theme={{colors:{primary:Color.button}}} mode="contained" onPress={() => setModel(true)}>
                    upload image
             </Button>
             
    

<Modal
animationType='slide'
visible={model}
transparent={true}

onRequestClose={() => setModel(false)} // for press back button

>
<View style={styles.viewModal}>
    <View style={styles.viewButtonModal}>
        <Button icon="camera" mode="contained"  theme={{colors:{primary:Color.button}}} onPress={PickPhotoFromCamera}>
            camera
     </Button>

        <Button icon="image-area" mode="contained"  theme={{colors:{primary:Color.button}}}  onPress={ PickPhotoFromGalary}>
            Gallery
    </Button>
    </View>
    <Button icon="cancel"  theme={{colors:{primary:Color.button}}} onPress={() => setModel(false)}>
        close
 </Button>
    {/* hide Modal */}
</View>


</Modal>
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
  viewModal: { // show popup in bottom
      width: '100%',
      position: 'absolute',
      bottom: 2,
      paddingBottom: 10,
      backgroundColor: 'white',

      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 20,

  },
  viewButtonModal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
  },
});

export default Setting
