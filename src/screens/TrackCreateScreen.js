import React, { useContext, useCallback }from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Text } from 'react-native-elements'
// import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
// import * as Permissions from 'expo-permissions'

import Map from '../components/Map'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const callback = useCallback(
    location => {
      console.log('Inside', state.recording)
      addLocation(location, state.recording)
    },
    [state.recording],
  )
  console.log('Outside', state.recording)
  // const { addLocation } = useContext(LocationContext)
  const [permissionStatus] = useLocation(isFocused, callback)
  // const [permissionStatus] = useLocation(isFocused, location => {
  //   console.log('Inside', state.recording)
  //   addLocation(location, state.recording)
  // })

  // const [permissionStatus] = useLocation(isFocused, addLocation)
  // Or
  // const [permissionStatus] = useLocation(location => addLocation(location))

  // console.log(isFocused)

  // const [err, setErr] = useState(null)
  // const [permissionStatus, setPermissionStatus] = useState(null)

  // const startWatching = async () => {
  //   try {
  //     // await requestPermissionsAsync()
  //     const response = await Permissions.askAsync(Permissions.LOCATION)
  //     await watchPositionAsync({
  //       accuracy: Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     }, location => addLocation(location))
  //     setPermissionStatus(response.status)
  //   } catch (e) {
  //     setErr(e)
  //   }
  // }

  // useEffect(() => {
  //   startWatching()
  // }, [])

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {/* {err ? <Text>Please enable location services</Text> : null} */}
      {permissionStatus === 'denied' ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)