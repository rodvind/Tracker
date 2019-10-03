import React, { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'
import * as Permissions from 'expo-permissions'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  const [permissionStatus, setPermissionStatus] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      // await requestPermissionsAsync()
      const response = await Permissions.askAsync(Permissions.LOCATION)
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback)
      setPermissionStatus(response.status)
      setSubscriber(sub)

      // We neeed to decide when call subscriber.remove() based 
      // on the isFocused flag in TrackCreateScreen
    } catch (e) {
      setErr(e)
    }
  }
  // React will look at the shouldTrack value and
  // is gonna compare that value to its last timne
  // value useEffect hook ran
  // between these two time of this hook running,  
  //if the value of the shouldTrack variable changes, then
  // react is gonna run the function, startWatching, inside 
  // the useEffect hook
  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else {
      // stop watching
      subscriber.remove()
      setSubscriber(null)
    }
    
  }, [shouldTrack])

  // By convention a hook is supposed to return an array
  return [permissionStatus]
}
