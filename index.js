/**
 * @format
 */

import {AppRegistry} from 'react-native';

import Splash from './components/screens/splash';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Splash);