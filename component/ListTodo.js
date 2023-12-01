import { TouchableOpacity, Text, StyleSheet,FlatList, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AddList from './AddList';

export default function ListTodo() {
  const [doList , setDoList] = useState([
    {listName : "Drink Water" ,key : '1'},
    {listName : "Drawing" ,key : '2'},
    {listName : "Play game" ,key : '3'}
  
  ]);
  
  
  const pressHandler = (key) => {
    setDoList((list) => {
      return list.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setDoList((prevtodo) => {
      return [
        {listName: text, key : Math.random().toString()},
        ...prevtodo
      ]
    })
  }



  return (
    <View >
    <AddList submitHandler={submitHandler}/>
    <View>
    <FlatList 
            data={doList}
            renderItem={({item})=>
            (
            <TouchableOpacity onPress={()=> pressHandler(item.key)}>
              <Text style={styles.list}>{item.listName}</Text>
            </TouchableOpacity>
            )
          }
          />
        </View>
   </View>
    
  )
}

const styles = StyleSheet.create(
    {
        list: {
            padding : 5,
            margin : 4,
            
        borderWidth : 1,
         borderRadius : 10,
         borderColor : "red",
         color : "red",
        }
    }
)