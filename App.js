import React from "react";
import {View, Text, StyleSheet} from "react-native";

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function App(){
  return(

    <View style={styles.container}>
      <Text>Telmo Code</Text>
      <Feather
        name='heart'
        size={30}
        color='#852411'
      />
      <FontAwesome
        name='user'
        size={40}
        color='#009400'
      />
    </View>

  )
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
  }
})