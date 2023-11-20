import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListTodo({item, pressHandler }) {
  return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
        <Text style={styles.list}>{item.listName}</Text>
    </TouchableOpacity>
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