import React, { Component } from 'react';
import { Button, Platform, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Text, View, ScrollView } from 'react-native';
import { Header, Icon, Card, Image } from 'react-native-elements';

export default class ronaldinho extends Component {

  constructor() {
    super();
    this.state = { equipes: '', tag: '', loading: false, disabled: false }
  }

  saveData = () => {
    this.setState({ loading: true, disabled: true }, () => {
      fetch('https://www.meucblol.com/api/tag/',
        {
          method: 'POST',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              equipes: this.state.equipes,
              tag: this.state.tag
            })

        }).then((response) => response.json()).then((responseJson) => {
          alert(responseJson);
          this.setState({ loading: false, disabled: false });
        }).catch((error) => {
          console.error(error);
          this.setState({ loading: false, disabled: false });
        });
    });
  }


  render() {
    return (
      <ScrollView>

        <Card>
          <TextInput underlineColorAndroid="transparent" placeholder="Your First Name" style={styles.textInput} onChangeText={(text) => this.setState({ equipes: text })} />

          <TextInput underlineColorAndroid="transparent" placeholder="Your Last Name" style={styles.textInput} onChangeText={(text) => this.setState({ tag: text })} />

          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            onPress={this.saveData}
            title='Login' />


          {
            (this.state.loading)
              ?
              (<ActivityIndicator size="large" />)
              :
              null
          }

<Text>{"\n\n"}</Text>


          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            title='KKK Parametros mano' />
        </Card>

        <Text>{"\n\n"}</Text>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      paddingHorizontal: 25,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    textInput:
    {
      height: 40,
      borderWidth: 1,
      borderColor: 'grey',
      marginVertical: 5,
      alignSelf: 'stretch',
      padding: 8,
      fontSize: 16
    },

    Btn:
    {
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignSelf: 'stretch',
      padding: 10,
      marginTop: 10,
      marginBottom: 25
    },

    btnText:
    {
      textAlign: 'center',
      color: 'white',
      fontSize: 16
    }
  });