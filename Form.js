import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, TextInput, FlatList } from 'react-native';
import {firebase} from './config'

function Form({navigation}) {
  const toDoRef = firebase.firestore().collection('todo');
  const [todo, setToDo] = useState([]);

  useEffect(() => {
    toDoRef
    .onSnapshot(querySnapShot => {
      const toDos = []
      querySnapShot.forEach((doc) => {
        const {title} = doc.data();
        toDos.push({
          id: doc.id,
          title,
        })
      })
      setToDo(toDos)
      console.log(todo[0])
    })
  }, [])

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

    return (
      <View style={styles.container}>
        <Text>Hello</Text>
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
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });

  export default Form