import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cadastro from './pages/Cadastro/Cadastro';
import Ativacao from './pages/Ativacao/Index';
import Sucesso from './pages/Sucesso/Index';
import Notificacoes from './pages/Notificacoes/Index';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Veiculos from './pages/Veiculos/Index';
import VistoriaVeicular from './pages/VistoriaVeicular/Index';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="screen"
        initialRouteName="Login"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#263F91',
          },
        }}>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="Veiculos" component={Veiculos} />
        <AppStack.Screen name="VistoriaVeicular" component={VistoriaVeicular} />
        <AppStack.Screen name="Ativacao" component={Ativacao} />
        <AppStack.Screen name="Sucesso" component={Sucesso} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
