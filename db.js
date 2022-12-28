import AsyncStorage from '@react-native-async-storage/async-storage';



const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }


const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      }
    } catch(e) {
        console.log(e)
      return null
    }
  }

  export {storeData, getData}