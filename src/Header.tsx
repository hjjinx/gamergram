import React from 'react';
import {View, Text} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {Colors, styles} from './Constants/Styles';

export default class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          height: heightPercentageToDP('8'),
          backgroundColor: Colors.MainBackgroundLight,
          position: 'absolute',
          top: 0,
          left: 0,
          width: widthPercentageToDP('100'),
        }}>
        <Text
          style={{
            color: '#f60e47',
            fontSize: heightPercentageToDP('6'),
            textAlign: 'center',
            textShadowColor: '#fff',
            textShadowOffset: {width: 0.5, height: 0.5},
            textShadowRadius: 1,
          }}>
          GamerGram
        </Text>
      </View>
    );
  }
}
