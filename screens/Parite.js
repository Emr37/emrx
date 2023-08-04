import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getExchange } from '../service';
import { StatusBar } from 'expo-status-bar';
import BackIcon from '../constants/icons/back';
import { formatMoney } from '../utils/money';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PariteDetail from '../components/PariteDetail';


const PariteScreen = () => {
  const {navigate} = useNavigation();
  const [list, setList] = useState([]);
  const [parity, setParity] = useState('');
  const [buyToTurkish, setBuyToTurkish]= useState(0);
  const [sellToTurkish, setSellToTurkish]= useState(0);

  const [num, setNum] = useState(0);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.back} onPress={() => navigate('Main')}>
            <BackIcon size="32" />
          </TouchableOpacity>

          <Text>Alış</Text>
          <Text>{formatMoney(buyToTurkish)} TL</Text>
          <Text>Satış</Text>
          <Text>{formatMoney(sellToTurkish)} TL</Text>

        </View>
        <View style={styles.exchangeContianer}>
                 
          <FlatList
            data={list}
            style={{ width: '100%' }}
            renderItem={({ item }) => <PariteDetail data={item} parity={parity} setParity={setParity} num={num} setNum={setNum} setBuyToTurkish={setBuyToTurkish} setSellToTurkish={setSellToTurkish} />} /* Burada lifting state up uygulandı. */
            keyExtractor={item => item.symbol}
          />
            
            
          </View>
      </View>
    </SafeAreaView>
  )
}

export default PariteScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    width: 48,
    height: 48,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '300'
  },
  imageContianer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  flag: {
    width: 32,
    height: 32,
  },
  exchangeContianer: {
    flex: 1,
    padding: 16
  },
  exchage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 8
  },
  lastText: {
    textAlign: 'right',
    paddingRight: 8
  },

  exchageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: '#222',
    borderRadius: 4
  },
  headerText: {
    paddingLeft: 8,
    fontSize: 16,
    flex: 1,
    color: '#fff',
    fontWeight: '600',
    paddingRight: 8
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});




