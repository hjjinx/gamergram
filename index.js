import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.18.2:8080/';

AppRegistry.registerComponent(appName, () => App);
