import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';

import {Colors, styles} from './Constants/Styles';
import {} from 'react-native-gesture-handler';

export default class Login extends React.Component {
  state = {
    usernameOrEmail: '',
    password: '',
    loading: true,
  };

  async componentDidMount() {
    await AsyncStorage.removeItem('token');
    if (await AsyncStorage.getItem('token')) {
      this.props.navigation.navigate('Home');
    }
    this.setState({loading: false});
  }

  login = () => {
    this.setState({loading: true}, () => {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const payload = {
        password: this.state.password,
      };
      const usernameOrEmail = this.state.usernameOrEmail;
      if (usernameOrEmail.match(emailReg)) {
        payload.email = usernameOrEmail;
      } else payload.username = usernameOrEmail;
      axios
        .post('/api/users/login', payload)
        .then(async (res) => {
          if (res.data.message === 'success') {
            await AsyncStorage.setItem('token', res.data.token);
            this.props.navigation.navigate('Home');
          }
          this.setState({loading: false});
          console.log(res);
        })
        .catch((err) => {
          if (err.response) {
            Alert.alert('Error', err.response.data.message);
          } else Alert.alert('There was an error.');
          console.log(err);
          this.setState({loading: false});
        });
    });
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.MainBackground}}>
        <View style={{flex: 40}}>
          <Text
            style={{
              color: '#f60e47',
              textAlign: 'center',
              fontSize: 60,
              marginTop: hp(20),
              textShadowColor: '#fff',
              textShadowOffset: {width: 0.5, height: 0.5},
              textShadowRadius: 1,
            }}>
            GamerGram
          </Text>
        </View>

        <View
          style={{
            flex: 7,
            flexDirection: 'row',
            backgroundColor: '#373752',
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 10,
          }}>
          <Icon
            name="user"
            color="#fff"
            size={25}
            style={{marginTop: hp('2.5'), paddingHorizontal: wp('4')}}></Icon>
          <TextInput
            autoCapitalize="none"
            onChangeText={(t) => this.setState({usernameOrEmail: t})}
            placeholder="Username / Email"
            placeholderTextColor={'#877'}
            style={{
              flex: 1,
              padding: 0,
              margin: 0,
              fontSize: hp('2'),
              color: '#fff',
            }}></TextInput>
        </View>

        <View
          style={{
            flex: 7,
            flexDirection: 'row',
            backgroundColor: '#373752',
            marginHorizontal: 10,
            borderRadius: 15,
            marginVertical: 10,
          }}>
          <Icon
            name="key"
            color="#fff"
            size={25}
            style={{marginTop: hp('2.5'), paddingHorizontal: wp('4')}}></Icon>
          <TextInput
            autoCapitalize="none"
            onChangeText={(t) => this.setState({password: t})}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'#877'}
            style={{
              flex: 1,
              padding: 0,
              margin: 0,
              fontSize: hp('2'),
              color: Colors.MainText,
            }}></TextInput>
        </View>

        <View
          style={{
            flex: 7,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', color: '#8a8aa1', fontSize: 15}}>
            Forgot Password?
          </Text>
        </View>
        <View style={{flex: 10}}>
          <View
            style={{
              backgroundColor: '#f60e47',
              padding: 20,
              borderRadius: 20,
              marginHorizontal: wp('10'),
            }}>
            <TouchableOpacity onPress={this.login}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 10}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={Colors.backgroundSec} />
          </View>
        )}
      </View>
    );
  }
}
