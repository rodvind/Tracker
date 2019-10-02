import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import styled from 'styled-components';

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const StyledText = styled.Text`
  font-size: 48;
`

const Container = styled.View `
  flex: 1;
  justify-content: center;
  margin-bottom: 250;
`

const SigninScreen = (params) => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <Container>
      <NavigationEvents 
        // Navigate in
        // onWillFocus={() =>{}}
        // onDidFocus={() => {}}
        // Navigate away
        onWillBlur={clearErrorMessage} // === onWillBlur={() => clearErrorMessage()}
        // onDidBlur={() => {}}
      />
      <AuthForm 
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}  // === ({ username, password }) => signin({ username, password })
        submitButtonText="Sign In"
      />
      <NavLink 
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </Container>
  )
}

SigninScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({})

export {SigninScreen as default}