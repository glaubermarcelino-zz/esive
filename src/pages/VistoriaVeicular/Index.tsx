import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';
import dataValidApi from '../../services/DataValidHttp';

const VistoriaVeicular = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  dataValidApi.defaults.headers.authorization = `Bearer ${'token'}`;

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Sistema Offline', 'Sistema indisponível no momento');
  }

  return (
    <>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#23408D"
          barStyle="light-content"
        />
        <Header titulo={'Olá, Adriana Moura'} />
      </View>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                margin: 15,
              }}>
              <TouchableOpacity
                style={[styles.itemTab, {height: 35, width: 206}]}
                onPress={() => handleNavigate()}>
                <View
                  style={{
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5,
                  }}>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Minhas Vistorias
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.itemTab]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Nova Vistoria
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    margin: 5,
                  }}>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Número:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Veículo:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Placa:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Data:
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'center',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                    width: '100%',
                    margin: 5,
                  }}>
                  <Text>Status</Text>
                  <Text>Em Análise</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    margin: 5,
                  }}>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Número:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Veículo:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Placa:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Data:
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    margin: 5,
                  }}>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Número:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Veículo:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Placa:
                  </Text>
                  <Text style={[styles.itemTitle, {textAlign: 'center'}]}>
                    Data:
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  welcome: {color: '#305F95', fontSize: 16, margin: 10, fontWeight: 'bold'},
  instructions: {},
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
  itemTab: {
    height: 35,
    width: 206,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#06ACFF',
    borderRadius: 5,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#06ACFF',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#06ACFF',
    height: 85,
    width: 379,
    borderRadius: 5,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#06ACFF',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#305F95',
  },
  itemTitleSaldoCashBack: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  itemTitleSecond: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#979797',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default VistoriaVeicular;
