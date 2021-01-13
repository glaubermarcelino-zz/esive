/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
// import SideMenu from './src/components/SideMenu/Index';
// import stackNav from './src/components/SideMenu/stacknav';

 import Home from './src/pages/Home/Home';
import { name as appName } from './app.json';

// const drawernav = DrawerNavigator({
//     Item1: {
//         screen: stackNav,
//       }
//     }, {
//       contentComponent: SideMenu,
//       drawerWidth: Dimensions.get('window').width - 120,  
//   });
  
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => drawernav);
