import React from 'react'; // eslint-disable-line no-unused-vars
import {
  Platform,
  DrawerLayoutAndroid,
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

if (Platform.OS === 'android') {
  module.exports = DrawerLayoutAndroid;
} else {
  module.exports = DrawerLayout;
}
