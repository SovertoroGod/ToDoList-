import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';


export default function AddList({submitHandler}) {
    const [text , setText] = useState('');
   
   
    const changeHandler = (val) => {
        setText(val);
    }

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder='Add Todo'
        onChangeText={changeHandler}
      />
      <Button 
        title='Add to list'
        color='purple'
        onPress={() => submitHandler(text)}
      
      />
    </View>
  )
}

const styles = StyleSheet.create(
    {
        input : {
            padding : 5,
            margin : 4,
            borderStyle : "dashed",
            borderColor : 'red',
            borderWidth : 1,
            borderRadius : 10,
            color : 'purple',
        }
    }
)

