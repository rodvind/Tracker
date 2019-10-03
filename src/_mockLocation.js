import * as Location  from 'expo-location'

// Represnets 10 meters in longitude and latitude
const tenMetersWithDegrees = 0.0001

// increment: a counter variable
const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -114.066666 + increment * tenMetersWithDegrees,
      latitude: 51.049999 + increment * tenMetersWithDegrees
    }
  }
}

let counter = 0
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  })
  counter++
}, 1000);