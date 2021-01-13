import React from 'react';
import {View, StyleSheet, Text, Image, AppRegistry, Dimensions} from 'react-native';
interface HeaderProps {
  titulo: string;
}


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: '#fff', fontSize: 16,padding:5}}>
          {props.titulo}
        </Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/user.png')}
        />
      </View>
      <View style={{backgroundColor: '#06ACFF', height: 9}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    backgroundColor: '#23408D',
    height: 60,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'flex-end',
    width: 55,
    height: 53,
  },
});
export default Header;
