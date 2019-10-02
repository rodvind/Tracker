import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
// import { Text, Input, Button } from 'react-native-elements'
import styled from 'styled-components';

import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'
// import Spacer from '../components/Spacer'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 250;
`

// const Error = styled.Text`
//   font-size: 16;
//   color: red;
//   margin-left: 15;
//   margin-top: 15;
// `

// const Link = styled.Text`
//   color: blue;
// `



const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // useEffect(() => {
  //   tryLocalSignin()
  // }, [])
  // console.log(state);

  return (
    <Container>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        // onSubmit={({ email, password }) => signup({ email, password })}
        // or
        onSubmit={signup}
      />
      <NavLink 
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
      {/* <Spacer>
        <Text h3>Sign Up for Tracker</Text>
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
      {state.errorMessage ? <Error>{state.errorMessage}</Error> : null}
      <Spacer>
        <Button 
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer><Link>Already have an account? Sign in instead</Link></Spacer>
      </TouchableOpacity> */}
    </Container>
  )
  // return (
  //   <View style={styles.container}>
  //     <Spacer>
  //       <Text h3>Sign Up for Tracker</Text>
  //     </Spacer>
  //     <Input label="Email" />
  //     <Spacer />
  //     <Input label="Password" />
  //     <Spacer>
  //       <Button title="Sign Up" />
  //     </Spacer>
  //   </View>
  // )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}
// SignupScreen.navigationOptions = {
//   header: null
// }

// const styles = StyleSheet.create({
//   container: {
//     // borderColor: 'red',
//     // borderWidth: 10,
//     flex: 1,
//     justifyContent: 'center',
//     marginBottom: 250
//   }
// })

export {SignupScreen as default}