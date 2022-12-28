import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, TextInput, FlatList } from 'react-native';
import {WebView} from 'react-native-webview';
import {firebase} from '../config'

function Form({navigation}) {
  const toDoRef = firebase.firestore().collection('exercises');
  const [todo, setToDo] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const getDateFromTimestamp = (object) => {
    return object.toDate().toDateString()
    
  }

  useEffect(() => {
    setIsLoading(true)
    toDoRef
    .onSnapshot(querySnapShot => {
      const toDos = []
      querySnapShot.forEach((doc) => {
        const {name,schedule} = doc.data();
        toDos.push({
          id: doc.id,
          name,
          schedule
        })
      })
      setToDo(toDos)
      setIsLoading(false)
      console.log(toDos)
    })
  }, [])

  const Item = ({ name,schedule }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{schedule}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} schedule={getDateFromTimestamp(item.schedule)} />
  );

    return (
      <View style={styles.container}>
          <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      padding: 15,
      justifyContent: 'flex-start',
      alignContent: 'center',
      backgroundColor: '#ffffff'
    }, item: {
      backgroundColor: '#0e7fcf',
      color: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5
    }, title: {
      color: '#ffffff'      
    }
  });

  export default Form