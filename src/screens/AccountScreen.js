import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'



const StyledText = styled.Text`
  font-size: 48;
`

const AccountScreen = (params) => {
  const { signout } = useContext(AuthContext)

  return <SafeAreaView forceInset={{ top: 'always' }}>
    <StyledText>AccountScreen</StyledText>
    <Spacer>
      <Button title="Sign Out" onPress={signout} />
    </Spacer>
  </SafeAreaView>
  // return (
  //   <Text style={{ fontSize: 48 }}>AccountScreen</Text>
  // )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({})

export {AccountScreen as default}