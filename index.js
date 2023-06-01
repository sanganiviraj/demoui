/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screen/home';

import {name as appName} from './app.json';
import Product_detail from './src/screen/product_detail';


AppRegistry.registerComponent(appName, () => Home);
