import createDataContext from './createDataContext'

const locationReducer = (state, { type, payload }) => {
  switch (type) {
    // case value:
      
  
    default:
      return state
  }
}

const startRecording = dispatch => () => {}
const stopRecording = dispatch => () => {}
const addLocation = dispatch => () => {}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, location: [], currentLocation: null }
)