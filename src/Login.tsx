import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from './Constants/Styles';

export default class Login extends React.Component {
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
            placeholder="Username / Email"
            placeholderTextColor={Colors.MainBackground}
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
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={Colors.MainBackground}
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
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
              LOGIN
            </Text>
          </View>
        </View>
        <View style={{flex: 10}}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 15}}>
            Signup
          </Text>
        </View>
      </View>
    );
  }
}
