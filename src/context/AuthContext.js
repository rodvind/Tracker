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
    case 'signin':
      // return { ...state, token: payload }
      return { errorMessage: '', token: payload }
    case 'clear_error_message':
      return { ...state, errorMessage: ''}
    case 'signout':
      return { token: null, errorMessage: '' }
    
    // both signin and signup are the same code so we use only one signin case instead
    // for both of thenm  
    // case 'signup':
    //   return { errorMessage: '', token: payload }

    default:
      return state;
  }
}

// Check if the token is available in the AsyncStorage
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

// clear error message
const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
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
      dispatch({ type: 'signin', payload: response.data.token })
      // dispatch({ type: 'signup', payload: response.data.token })

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

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in process'
    })
  }
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}


export const { Provider, Context } = createDataContext(
  authReducer,
  // action funtions
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  // { isSignedIN: false, errorMessage: '' }
  { token: null, errorMessage: '' }
)