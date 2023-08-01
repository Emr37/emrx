import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

const PariteDetail = ({ data, num, setNum }) => {

    const newList = { ...data, exchange: num };


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
                <Text style={styles.text}>{newList.exchange}</Text>
                <TextInput
                    value={num}
                    onChangeText={(e) => setNum(e)}
                    placeholder={newList.exchange}
                    keyboardType={'number-pad'}
                    type='number'

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
        marginBottom: 4,
    },
    name: {
        fontSize: 12,
    },
    exchange: {
        marginHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 72
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: '300',
    }
});