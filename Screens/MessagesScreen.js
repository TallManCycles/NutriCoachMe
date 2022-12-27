import React, { useEffect, useState} from 'react';
import {firebase} from '../config'
 import {
   SafeAreaView,
   StatusBar,
   ScrollView,
   StyleSheet,
   TouchableOpacity,
   Text,
   Image,
   FlatList,
   Button,
   useColorScheme,
   View,
 } from 'react-native';

 
 const MessagesScreen = ({user,navigation}) => {

    const [users, setUsers] = useState([])
  
  const getUsers = async () => {
    try {
        const querySanp = await firebase.firestore().collection('users').where('uid','!=',user.uid).get()
        // const querySanp = await firebase.firestore().collection('users').get()
        const allUsers = querySanp.docs.map(docSnap=>docSnap.data())
        setUsers(allUsers)  
        console.log(allUsers)
    } catch (error) {
      console.log(users)
        console.log(error)
    }
  
}

useEffect(()=>{
  getUsers()
},[])
 
   return (
    
     <SafeAreaView >
       <StatusBar />
       <Text>Test</Text>
       <View>
          <View style={styles.Contain}>
              <FlatList
                  data={users}
                  keyExtractor={(item)=>item.uid}
                  renderItem={({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('Chats', {name: item.name, uid: item.uid})} >
                      <View style={styles.card} >
                          <Image style={styles.userImageST} source={{uri: 'https://placeimg.com/140/140/any'}} />
                        <View style={styles.textArea}>
                      <Text style={styles.nameText} >{item.name}</Text>
                      <Text style={styles.msgContent} >{item.email}</Text>
                      </View>
                      </View>
                      </TouchableOpacity>
                  )}
                  />
          </View>
          </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
     Contain: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
     },
   Container: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   card: {
     width: '100%',
     height: 'auto',
     marginHorizontal: 4,
     marginVertical: 6,
     flexDirection: 'row',
     flexWrap: 'wrap',
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   imageContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   userImage: {
     paddingTop: 15,
     paddingBottom: 15,
   },
   userImageST: {
     width: 50,
     height: 50,
     borderRadius: 25,
   }, 
   textArea: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 5,
     paddingLeft: 10,
     width: 300,
     backgroundColor: 'transparent',
     borderBottomWidth: 1,
     borderBottomColor: '#cccccc',
   },
   userText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   nameText: {
     fontSize: 14,
     fontWeight: '900',
   },
   msgTime: {
     textAlign: 'right',
     fontSize: 11,
     marginTop: -20,
   },
   msgContent: {
     paddingTop: 5,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default MessagesScreen;