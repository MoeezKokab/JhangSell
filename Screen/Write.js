
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button } from 'react-native';
import {  } from 'react-native-paper';
import Color from '../Color/Color'

const Setting =(props)=>{
    
        const [enteredGoal,setEnteredGoal]= useState('');
        const [courseGoal, setCoursegoal] = useState(['nnnn','mmmm']);
      
        const goalInput=(enteredText)=>{
          setEnteredGoal(enteredText);
        }; 
        const addGoal =()=>{
          console.log(enteredGoal);
          setCoursegoal(currentGoal => [...currentGoal,enteredGoal])
          //setCoursegoal(currentGoal => [...courseGoal,enteredGoal]);
        };
      
        return (
          
          <View  style ={ styles.screen}>
            <View style ={ styles.inputContainer}>
              <TextInput placeholder = 'Goal' 
                style ={styles.input} onChangeText={goalInput} value ={enteredGoal} />
              <Button title ='ADD' onPress={addGoal} />
            </View>
            <View>
        {courseGoal.map((goal)=><Text>{goal}</Text>)} 
            </View>
      
            
          </View>
         
         
        );
      }
       const styles = StyleSheet.create({
         screen:{
             flex:1,
           padding:10,
           backgroundColor:Color.background

         },
         inputContainer:{
          flexDirection : "row" ,
         justifyContent : 'space-between' ,
         alignItems : 'center'
      
         },
         input:{
          width : '80%',
          borderWidth: 1 ,
          borderColor: 'black' ,
          padding : 10
      
         }
      
       })
export default Setting
