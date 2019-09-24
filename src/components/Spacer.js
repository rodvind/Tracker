import React from 'react'
import { View, StyleSheet } from 'react-native';

import styled from 'styled-components';

const StyledSpacer = styled.View`
  margin: 15px;
`

const Spacer = ({ children }) => {
  // return <View style={styles.spacer}>{children}</View>
  return <StyledSpacer>{children}</StyledSpacer>
}

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
})

export {Spacer as default}