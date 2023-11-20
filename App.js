import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

const [doList , setDoList] = useState([
  {listName : "Drink Water" ,key : '1'},
  {listName : "Drawing" ,key : '2'},
  {listName : "Play game" ,key : '3'}

])
  return (
    <View style={styles.container}>


      <View style={styles.content}>


        <View style={styles.list}>
          <FlatList 
            data={doList}
            renderItem={({item})=>
            (
            <Text>{item.listName}</Text>
            )
          }
          />
        </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content: {
    padding : 30,
  },

  list:{
    marginTop : 30,
  },
});
