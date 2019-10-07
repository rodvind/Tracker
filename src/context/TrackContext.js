import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case 'fetch_tracks':
      return payload
    default:
      return state
  }
}

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks')
  dispatch({ type: 'fetch_tracks', payload: response.data })
}

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

