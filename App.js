import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ListTodo from './component/ListTodo';
import Header from './component/Header';


export default function App() {


  return (
    <SafeAreaView>
    <View >

      <Header />
      
      <View style={styles.content}>


        <View style={styles.list}>
          <ListTodo />
        </View>
      
      </View>
    </View>
    </SafeAreaView>
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