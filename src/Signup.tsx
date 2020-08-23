import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';

import {Colors, styles} from './Constants/Styles';

export default class Login extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    loading: false,
  };
  signup = () => {
    this.setState({loading: true}, () => {
      axios
        .post('/api/users/signup', this.state)
        .then((res) => {
          Alert.alert('Signed up', 'Please login to access your account');
          this.setState({loading: false});
        })
        .catch((err) => {
          if (err.response) {
            Alert.alert('Error', err.response.data.message);
          } else Alert.alert('Error', 'There was an error.');
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
            onChangeText={(t) => this.setState({username: t})}
            placeholder="Username"
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
            name="email"
            color="#fff"
            size={25}
            style={{marginTop: hp('2.5'), paddingHorizontal: wp('4')}}></Icon>
          <TextInput
            autoCapitalize="none"
            onChangeText={(t) => this.setState({email: t})}
            placeholder="Email"
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
            marginBottom: 30,
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

        <View style={{flex: 10}}>
          <TouchableOpacity onPress={this.signup}>
            <View
              style={{
                backgroundColor: '#f60e47',
                padding: 20,
                borderRadius: 20,
                marginHorizontal: wp('10'),
              }}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
                SIGNUP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 10}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
              Login
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
