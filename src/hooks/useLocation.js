import React, { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'
import * as Permissions from 'expo-permissions'

export default callback => {
  const [err, setErr] = useState(null)
  const [permissionStatus, setPermissionStatus] = useState(null)

  const startWatching = async () => {
    try {
      // await requestPermissionsAsync()
      const response = await Permissions.askAsync(Permissions.LOCATION)
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback)
      setPermissionStatus(response.status)
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  // By convention a hook is supposed to return an array
  return [permissionStatus]
}
