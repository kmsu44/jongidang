import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import List from '../src/List';
import Home from '../src/Home';
import Reservation from '../src/Reservation';
import {height, width, scale} from '../config/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Booking from '../components/Booking';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainStack = props => {
  return (
    <Stack.Navigator initialRouteName="FirstView">
      <Stack.Screen
        name="List"
        options={{headerShown: false}}
        children={() => (
          <List
            id={props.id}
            password={props.password}
            navigation={props.navigation}
          />
        )}
      />
      <Stack.Screen
        name="Booking"
        options={{
          title: '스터디룸 예약',
          headerLeft: navigation => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                props.navigation.navigate('List');
              }}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'#1C1B1F'}
                size={30 * scale}
              />
            </TouchableOpacity>
          ),
        }}
        component={Booking}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = props => {
  return (
    <Tab.Navigator
      style={styles.container}
      screenOptions={() => ({
        tabBarStyle: {
          height: height * 87,
          alignContent: 'center',
          paddingBottom: height * 33,
          borderTopColor: '#b4b4b4',
        },
      })}>
      <Tab.Group>
        <Tab.Screen
          name="MainStack"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => {
              color = focused ? '#b71a30' : '#b71a3099';
              return (
                <MaterialCommunityIcons
                  name="school"
                  color={color}
                  size={30 * scale}
                />
              );
            },
          }}
          children={() => (
            <MainStack
              id={props.id}
              password={props.password}
              navigation={props.navigation}
            />
          )}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,

            tabBarIcon: ({focused, color}) => {
              color = focused ? '#b71a30' : '#b71a3099';
              return (
                <MaterialCommunityIcons
                  name="home-variant"
                  color={color}
                  size={30 * scale}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Reservation"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarIcon: ({focused, color}) => {
              color = focused ? '#b71a30' : '#b71a3099';
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={30 * scale}
                />
              );
            },
          }}
          children={() => (
            <Reservation id={props.id} password={props.password} />
          )}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 10 * width,
  },
});

export default HomeScreen;
