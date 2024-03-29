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
import { useNavigation } from '@react-navigation/native';

import Spinner from 'react-native-loading-spinner-overlay';

const { width, height } = Dimensions.get('window');



export default function MainScreen() {
  const [loading, setLoading] = useState(false);

  const insets = useSafeAreaInsets()
  const { navigate } = useNavigation();
  const [list, setList] = useState([]);

  const getData = async () => {
    setLoading(true);
    const res = await getExchange();

    if (res.success) {
      const newList = res.data.data.map(item => ({
        ...item,
        buying: formatMoney(item.buying),
        sales: formatMoney(item.sales)
      }));
      AsyncStorage.setItem('exchange', JSON.stringify(newList));
      setList(newList);
    }
    else {
      const data = await AsyncStorage.getItem('exchange');
      if (data) {
        setList(JSON.parse(data));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <View style={[styles.container, { marginTop: insets.top + 12 }]}>
      <StatusBar style="auto" />
      <View style={styles.context}>
        <View style={{ position: 'absolute', opacity: 0.3, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <Eur size={width} color="gold" />
        </View>
        {
          loading
            ?
            <Spinner
              visible={true}
              textContent={'Yükleniyor...'}
              textStyle={styles.spinnerTextStyle}
            />
            :
            <>
              <Spinner
                visible={false}
                textContent={'Yükleniyor...'}
                textStyle={styles.spinnerTextStyle}
              />
              <TopExchange eur={list[1]} usd={list[0]} />
              <Parite eur={list[1]} usd={list[0]} />
              <FlatList
                data={list.slice(2)}
                style={{ width: '100%' }}
                renderItem={({ item }) => <Exchange data={item} />}
                keyExtractor={item => item.symbol}
              />
            </>
        }
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
  button: {
    height: 48,
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',

  }
});