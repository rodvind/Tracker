import React, { useEffect, useState }from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import * as Permissions from 'expo-permissions'

import Map from '../components/Map'
import '../_mockLocation'

const TrackCreateScreen = (params) => {
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
      }, location => console.log(location))
      setPermissionStatus(response.status)
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {/* {err ? <Text>Please enable location services</Text> : null} */}
      {permissionStatus === 'denied' ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export {TrackCreateScreen as default}