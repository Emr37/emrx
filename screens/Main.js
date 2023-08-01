import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Exchange from '../components/Exchange';
import Eur from '../constants/icons/eur';

import TopExchange from '../components/TopExchange';
import { useEffect, useState } from 'react';
import { getExchange } from '../service';
import Parite from '../components/Parite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatMoney } from '../utils/money';
import { AboutIcon, HomeIcon, SettingIcon, ContactIcon, CalcIcon } from '../constants/icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  const insets = useSafeAreaInsets()
  const { navigate } = useNavigation();
  const [list, setList] = useState([]);

  const getData = async () => {
    const res = await getExchange();

    if(res.data.length > 0) {
      const newList = res.data.map(item => ({
        ...item,
        buying: formatMoney(item.buying),
        sales: formatMoney(item.sales)
      }));
      AsyncStorage.setItem('exchange', JSON.stringify(newList));
      setList(newList);
    }
    else {
      const data = await AsyncStorage.getItem('exchange');
      if(data) {
        setList(JSON.parse(data));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (

      <View style={[styles.container, { marginTop: insets.top + 12}]}>
        <StatusBar style="auto" />
        <View style={styles.context}>
          <View style={{ position: 'absolute', opacity: 0.3, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Eur size={width} color="gold"/>
          </View>
          {
            list.length === 0 ? <Text>Yükleniyor...</Text> : 
            <>
          <TopExchange eur={list[1]} usd={list[0]}  />
          <Parite eur={list[1]} usd={list[0]}/>
          <FlatList
            data={list.slice(2)}
            style={{ width: '100%' }}
            renderItem={({ item }) => <Exchange data={item} />}
            keyExtractor={item => item.symbol}
          />
          </>
          }
        </View>
        <View style={[styles.footerContainer, { paddingBottom: insets.bottom, height: 52 + insets.bottom}]}>
          <TouchableOpacity onPress={() => navigate('Settings')}>
            <View style={styles.button}>
              <SettingIcon size="32"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('About')}>
            <View style={styles.button}>
              <AboutIcon size="32"/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Main')}>
            <View style={styles.button}>
              <HomeIcon size="48"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Contact')}>
            <View style={styles.button}>
              <ContactIcon size="32"/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Calc')}>
            <View style={styles.button}>
              <CalcIcon size="32"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: 4,
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  button: {
    height: 48,
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});