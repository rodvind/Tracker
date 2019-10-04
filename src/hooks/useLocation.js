import React, { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'
import * as Permissions from 'expo-permissions'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  const [permissionStatus, setPermissionStatus] = useState(null)
  // const [subscriber, setSubscriber] = useState(null)
  // A better way to define and use subscriber, as it is local to
  // useLocation hook, is to define it locally inside our useEffect

  // const startWatching = async () => {
  //   try {
  //     // await requestPermissionsAsync()
  //     const response = await Permissions.askAsync(Permissions.LOCATION)
  //     const sub = await watchPositionAsync({
  //       accuracy: Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     }, callback)
  //     setPermissionStatus(response.status)
  //     setSubscriber(sub)

  //     // We neeed to decide when call subscriber.remove() based 
  //     // on the isFocused flag in TrackCreateScreen
  //   } catch (e) {
  //     setErr(e)
  //   }
  // }
  // React will look at the shouldTrack value and
  // is gonna compare that value to its last timne
  // value useEffect hook ran
  // between these two time of this hook running,  
  //if the value of the shouldTrack variable changes, then
  // react is gonna run the function, startWatching, inside 
  // the useEffect hook
  // ALL HELPER FUNCTIONS USING A PROP OR A STATE SHOULD
  // BE DEFINED INSIDE THE useEffect which makes it easy
  // for us to monitor those props/state and add them to 
  // the array (second argument in useEffect)
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        // await requestPermissionsAsync()
        const response = await Permissions.askAsync(Permissions.LOCATION)
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, callback)
        setPermissionStatus(response.status)
        // setSubscriber(sub)

        // We neeed to decide when call subscriber.remove() based 
        // on the isFocused flag in TrackCreateScreen
      } catch (e) {
        setErr(e)
      }
    }
    if (shouldTrack) {
      startWatching()
    } else {
      if (subscriber) {
        // stop watching
        subscriber.remove()
      }
      
      // setSubscriber(null)
      subscriber = null
    }
    
    // clean up
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }

  }, [shouldTrack, callback])

  // By convention a hook is supposed to return an array
  return [permissionStatus]
}
