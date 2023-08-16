import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contextApi/useAuth'
import { dateFormat } from '../utils/date'
import UserInfo from '../components/UserInfo'
import * as yup from 'yup';
import { useFormik } from 'formik'
import { updateService } from '../service'
import LoginInput from '../components/LoginInput'

const AboutScreen = () => {
  const { navigate } = useNavigation();
  const { logout, user } = useContext(useAuth);


  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View>
          <UserInfo info={user.id} label={"Kullanıcı ID"} />
          <UserInfo info={user.username} label={"Kullanıcı Adı"}/>
          <UserInfo info={user.email} label={"E-Posta Adresi"}/>
          <UserInfo info={user.phone} label={"Telefon Numarası"}/>
          <UserInfo info={user.gender} label={"Cinsiyet"}/>
          <UserInfo info={user.birthday} label={"Doğum Yılı"}/>
        </View>
        <View>
        
        <TouchableOpacity style={styles.button} onPress={() => navigate('UpdateUser')}>
          <Text style={styles.buttonText}>Güncelle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => logout(navigate)}>
          <Text style={styles.buttonText}>Çıkış</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6592C9',
    height: 60,
    borderRadius: 8,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize:20,
    fontWeight:'900'
  }
})