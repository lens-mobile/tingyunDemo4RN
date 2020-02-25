/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { NBSAppAgent } from 'react-native-tingyunapp'
const tingyunapp = new NBSAppAgent();

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Component,
  Button,
} from 'react-native';

const App: () => React$Node = () =>{
    return(
      <View style={{flex:1,marginTop:50}}>
        <Button title="Click to test tingyun CustomError" 
        onPress={()=>{
          try{
            hello;
          }catch(error){
            tingyunapp.reportError("tingyun test error message",error,{"errorAt":"hello"});
          }
        }}
        />
      </View>
    );
  }
export default App;