import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput,} from 'react-native'
import { Button } from 'react-native-paper'
import Logo from '../../assets/KeepControl.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default ({ navigation, route }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const login = async () => {
    const user = await AuthApi.login(email, password)
    console.log(user)
    if (user) {
      navigation.navigate('main', { user })
    } else {
      alert('Usuário ou senha inválido')
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.email}
        placeholder="E-mail"
        placeholderTextColor="#193073"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
          style={styles.senha}
          placeholder="Senha"
          placeholderTextColor="#193073"
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#193073"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <Text style={styles.text}>Esqueceu a senha?</Text>
      <Button
        mode="contained"
        textColor="white"
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate('drawer')}>
        ENTRAR
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14487c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 60,
    width: 170,
    height: 170,
  },

  email: {
    marginBottom: 10,
    width: 300,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
  },

  passwordContainer: {
    width: 300,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  senha: {
    width: 266,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    fontSize: 14,
  },

  icon: {
    marginRight: 10,
    borderWidthBottom: 2,
    borderBottomColor: 'black',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },

  botaoEntrar: {
    backgroundColor: '#3d65d8',
    marginTop: 10,
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
  },

})
