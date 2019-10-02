import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import styled from 'styled-components';

import Spacer from './Spacer'

const Error = styled.Text `
  font-size: 16;
  color: red;
  margin-left: 15;
  margin-top: 15;
`

// onSubmit is the function`that gets called anytime the user
// press the button
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
          <Text h3>{headerText}</Text>
        </Spacer>
        <Input 
          label="Email" 
          value={email}
          onChangeText={setEmail} // is === {newEmail => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input 
          secureTextEntry
          label="Password" 
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errorMessage ? <Error>{errorMessage}</Error> : null}
        <Spacer>
          <Button 
            title={submitButtonText}
            onPress={() => onSubmit({ email, password })}
          />
        </Spacer>
    </>
  )
}

export default AuthForm
