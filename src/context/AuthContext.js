import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef';

// Reducer function: This function is only called by 
// React directly as soon as dispatch funtion gets called
const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'add_error':
      return { ...state, errorMessage: payload }
    case 'signup':
      // return { ...state, token: payload }
      return { errorMessage: '', token: payload }
    default:
      return state;
  }
}


// Three different action functions, three different ways to
// change the state
// An action function is called with dispatch (function) that 
// is going return a function
const signup = dispatch => async ({ email, password }) => {
    // make an api request to sign up with emaill and 
    // password provided by the user
    try {
      const response = await trackerApi.post('/signup', { email, password })
      // console.log(response.data);
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signup', payload: response.data.token })

      // Navigatge to main flow
      navigate('TrackList')

    } catch (err) {
      // console.log(err.message);
      // console.log(err.response.data);

      // dispatchn a new action
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
    // if the user is signed up, modify the state, notify
    // them they are authorized

    // if sign up fails, reflect the error message
  }

const signin = dispatch => {
  return ({ email, password }) => {

  }
}

const signout = dispatch => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  // action funtions
  { signup, signin, signout },
  // { isSignedIN: false, errorMessage: '' }
  { token: null, errorMessage: '' }
)