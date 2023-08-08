import React from 'react'
import { Path, Svg } from 'react-native-svg'

const UserIcon = ({ size, color = 'black' }) => 
    <Svg width={size || "48"} height={size || "48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13.9286 13.4688H10.0714C6.16607 13.4688 3 16.7008 3 20.6875C3 21.4122 3.57576 22 4.28571 22H19.7143C20.4242 22 21 21.4122 21 20.6875C21 16.7008 17.8339 13.4688 13.9286 13.4688ZM4.96835 20.0312C5.28576 17.4432 7.45179 15.4375 10.0714 15.4375H13.9286C16.5466 15.4375 18.7138 17.4452 19.0313 20.0312H4.96835ZM12 11.5C14.8402 11.5 17.1429 9.14939 17.1429 6.25C17.1429 3.35061 14.8402 1 12 1C9.15978 1 6.85714 3.35061 6.85714 6.25C6.85714 9.1498 9.15938 11.5 12 11.5ZM12 2.96875C13.7723 2.96875 15.2143 4.4408 15.2143 6.25C15.2143 8.0592 13.7723 9.53125 12 9.53125C10.2277 9.53125 8.78571 8.05879 8.78571 6.25C8.78571 4.4408 10.2281 2.96875 12 2.96875Z" fill={color}/>
    </Svg>

export default UserIcon;