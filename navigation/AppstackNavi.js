import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Login from '../components/Login';

const Stack = createNativeStackNavigator();
const AppStackNavi = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Stack.Navigator>
      {isLoggedIn ? null : (
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          children={({navigation}) => (
            <Login
              navigation={navigation}
              setisLoggedIn={setisLoggedIn}
              setId={setId}
              setPassword={setPassword}
            />
          )}
        />
      )}
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        children={({navigation}) => (
          <HomeScreen navigation={navigation} id={id} password={password} />
        )}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavi;
