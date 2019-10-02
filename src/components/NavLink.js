import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

// All the different components/screen inside the app (App.js includes all the screen)
// that are rendered directly by the react-navigation, will be given a props object
// that includes that navigation prop and that's why all of our dfifferent screens
// are always able to reach to their props objects and get access to that navigator
// If we ever have a child component, like a reusable component that is displayed
// with on of those screens, that needs to access that navigator, we could either
// pass props from the screen component down to this reusable component or alternately
// we can wrap the usable component with the "withNavigation" function
// withNavigation is gonna make sure that our reusable component has direct access
// to that navigation prop and so be able to call the navigate function
import { withNavigation } from 'react-navigation'

import Spacer from './Spacer'

const Link = styled.Text `
  color: blue;
`

const NavLink = ({ navigation, text, routeName }) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer><Link>{text}</Link></Spacer>
    </TouchableOpacity>
  )
  
}

// Wrapping our component with withNavigation function gives it the
// access to the navigation prop
export default withNavigation(NavLink)
