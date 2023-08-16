import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../contextApi/useAuth';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import MainScreen from '../screens/Main';
import DetailScreen from '../screens/Detail';
import PariteScreen from '../screens/Parite';
import CalcScreen from '../screens/Calc';
import AboutScreen from '../screens/About';
import SettingsScreen from '../screens/Settings';
import ContactScreen from '../screens/Contact';
import UpdateScreen from '../screens/UpdateUser'
import { AboutIcon, CalcIcon, ContactIcon, HomeIcon, SettingIcon } from '../constants/icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function Home() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown : false, 
            tabBarShowLabel : false,
            tabBarActiveBackgroundColor: '#ddd',
            tabBarActiveTintColor:'#6592C9',
            tabBarInactiveTintColor: '#000'
            }}
        initialRouteName='Home'
        >
            <Tab.Screen name="Calc" component={CalcScreen} options={{ tabBarIcon: CalcIcon }} />
            <Tab.Screen name="About" component={AboutScreen} options={{ tabBarIcon:  AboutIcon }} />
            <Tab.Screen name="Home" component={MainScreen} options={{ tabBarIcon:  HomeIcon }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: SettingIcon }} />
            <Tab.Screen name="Contact" component={ContactScreen} options={{ tabBarIcon: ContactIcon }} />
        </Tab.Navigator>
    );
}



const RootNavigation = () => {
    const { isAuth, authControl } = useContext(useAuth);

    useEffect(() => {
        authControl();
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown : false }}>
            {
                !isAuth && (
                    <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )
            }
                <Stack.Group>
                    <Stack.Screen name="Main" component={Home}/>
                    <Stack.Screen name="Detail" component={DetailScreen} />
                    <Stack.Screen name="Parite" component={PariteScreen} />
                    <Stack.Screen name="UpdateUser" component={UpdateScreen} />
                </Stack.Group>
  

            </Stack.Navigator>
        </NavigationContainer>
    
    )
}

export default RootNavigation