import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

const StyledText = styled.Text`
  font-size: 48;
`

const AccountScreen = (params) => {
  return (
    <StyledText>AccountScreen</StyledText>
  )
  // return (
  //   <Text style={{ fontSize: 48 }}>AccountScreen</Text>
  // )
}

const styles = StyleSheet.create({})

export {AccountScreen as default}