//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import all the basic component we have used

export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    const otherParam = this.props.navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./src/assets/JoaoG.png')} style={{ width: 300, height: 300 }}
        />

        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details !</Text>
      </View>
    );
  }
} 