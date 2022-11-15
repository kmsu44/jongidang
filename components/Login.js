import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {height, width, scale} from '../config/globalStyles';
import axios from 'axios';
const Login = props => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const login = async (id, password) => {
    console.log('요청');
    try {
      const response = await axios.get(
        `http://52.79.223.149/login/${id}/${password}`,
      );
      console.log(response.data);
      if (response.data.result === '1') {
        console.log('로그인');
        props.setId(id);
        props.setPassword(password);
        props.setisLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      // navigation.navigate('HomeScreen');
      console.log('끝');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('.././assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.info}>
        세종대학교 포털사이트 계정을 입력하시면 됩니다.
      </Text>
      <TextInput
        value={id}
        style={styles.input}
        placeholder={'ID'}
        onChangeText={id => {
          setId(id);
          if (id.length >= 8) {
            this.passwordInput.focus();
          }
        }}
        maxLength={8}
        keyboardType="number-pad"
        bulrOnSubmit={false}></TextInput>

      <TextInput
        value={password}
        style={styles.input}
        placeholder={'Password'}
        keyboardType="default"
        returnKeyType={'default'}
        secureTextEntry={true}
        ref={input => {
          this.passwordInput = input;
        }}
        onChangeText={password => {
          setPassword(password);
        }}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => login(id, password)}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
          Log In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 237 * width,
    height: 235 * height,
  },
  info: {
    color: '#375066',
    fontWeight: '500',
    marginTop: 20 * height,
  },
  input: {
    width: 319 * width,
    height: 48 * height,
    backgroundColor: '#ffeaea',
    borderRadius: 10 * scale,
    marginTop: 10 * width,
    padding: 13 * scale,
    color: '#375066',
  },
  btn: {
    width: 319 * width,
    height: 54 * height,
    backgroundColor: '#cd2719',
    borderRadius: 16,
    marginTop: 20 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
