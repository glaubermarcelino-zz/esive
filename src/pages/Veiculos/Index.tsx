import React, { useState } from 'react';
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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';

const Veiculos = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
   const navigation = useNavigation();

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
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/seusdocumentos.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Seu Documento</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/seuveiculo.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Seu Veículo - Pesquisa e Certidões</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('VistoriaVeicular')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/vistoriaveicular.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Vistoria Veicular - ECV Digital</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/transferencia.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Transferência de Veiculo e Mudança de Endereço</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/registroveiculo.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Registro de Veículo 0km</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/compravenda.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Compra e venda de Veículo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/veiculofinanciado.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Veiculo Financiado ou Quitado</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5
                  }}>
                  <Image
                    source={require('../../assets/icons/veiculodanificado.png')}
                    style={{ height: 56, width: 56 }}
                  />
                  <Text style={[styles.itemTitle, { textAlign: 'center' }]}>Veículo Danificado ou recuperado</Text>
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
  welcome: { color: '#305F95', fontSize: 16, margin: 10, fontWeight: 'bold' },
  instructions: {},
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#06ACFF',
    height: 66,
    width: 337,
    borderRadius: 30,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#06ACFF',
    shadowOffset: { width: 1, height: 1 },
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

export default Veiculos;
