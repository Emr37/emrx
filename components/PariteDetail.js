import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { formatMoney } from '../utils/money'

const PariteDetail = ({ data, num, setNum, parity, setParity, setBuyToTurkish, setSellToTurkish}) => {
let par = (parity/data.sales).toFixed(0);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={{ uri: data.icon }} />
            </View>
            <View style={styles.title}>
                <Text style={styles.symbol}>{data.symbol}</Text>
            </View>
            <View style={styles.exchange}>
                <Text style={styles.text}>Alış</Text>
                <Text style={styles.price}>{data.buying}</Text>
            </View>
            <View style={styles.exchange}>
                <Text style={styles.text}>Satış</Text>
                <Text style={styles.price}>{data.sales}</Text>
            </View>
            <View style={styles.exchange}>
                <Text style={styles.text}>Parite</Text>
                <TextInput
                    style={styles.price}
                    value={par == 0 ? '' : String(par)}
                    onChangeText={(e) => {
                        setParity(e*data.sales);
                        setBuyToTurkish(e*data.buying);
                        setSellToTurkish(e*data.sales);

                        setNum(e);
                    }}
                    
                    onPressIn={() => setParity('')}
                    
                    keyboardType='number-pad'
                    
                    
                    
                />
            </View>
        </View>
    )
}

export default PariteDetail;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 8,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        paddingVertical: 8,

    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },

    icon: {
        width: 48,
        height: 48,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
    },
    symbol: {
        fontSize: 21,
        fontWeight: '700',
    },
    exchange: {
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 'auto',
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 1,
        alignItems:'center',
        justifyContent:'space-between'

    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        height: 18
    }
});