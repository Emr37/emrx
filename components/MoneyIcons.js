import React from 'react';
import { Usd, Eur } from '../constants/icons'


const MoneyIcons = ({ name, size = '36', color = "#fefefe", stroke }) => {

    const list = {
        'USD': <Usd size={size} color={color} stroke={stroke} />,
        'EUR': <Eur size={size} color={color} stroke={stroke} />,

    }

    return list[name];
}

export default MoneyIcons