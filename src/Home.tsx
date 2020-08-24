import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from './Constants/Styles';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Header></Header>
      <Text>Home!</Text>
    </View>
  );
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Header></Header>
        <Text
          onPress={() => {
            AsyncStorage.removeItem('token');
            this.props.navigation.navigate('Login');
          }}>
          Settings!
        </Text>
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {borderTopWidth: 0},
        activeBackgroundColor: Colors.MainBackground,
        inactiveBackgroundColor: Colors.MainBackgroundLight,
        activeTintColor: Colors.MainText,
        inactiveTintColor: Colors.MainText,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
