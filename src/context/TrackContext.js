import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    // case value:
  
    default:
      return state
  }
}

const fetchTracks = dispatch => () => {}

const createTrack = dispatch => async (name, locations) => {
  console.log(name, locations.length)

  // Make a request to our API
  await trackerApi.post('/tracks', { name, locations })
}


export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
)

