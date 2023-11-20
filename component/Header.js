import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container:{
            height : 60,
            backgroundColor : "red",
        },
        text : {
            color : "#fff",
            textAlign : "center",
            fontSize : 20,
            paddingTop : 15,
            fontWeight : 'bold',
            
        }
    }
)