import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps'
import styled from 'styled-components';

import { Context as LocationContext } from '../context/LocationContext'

const StyledMap = styled(MapView)`
  height: 300;
`

const Map = (params) => {
  // let points = []
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 51.049999 + i * 0.001,
  //       longitude: -114.066666 + i * 0.001
  //     })
  //   } else {
  //     points.push({
  //       latitude: 51.049999 - i * 0.002,
  //       longitude: -114.066666 + i * 0.001
  //     })
  //   }
    
  // }
  const { state: { currentLocation, locations } } = useContext(LocationContext)
  // console.log('1-Current: ', currentLocation)
  // console.log('2-Location: ', locations)

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return <StyledMap
    initialRegion={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
    // region={{
    //    ...currentLocation.coords,
    //   latitudeDelta: 0.01,
    //   longitudeDelta: 0.01
    // }}
    // initialRegion={{
    //   latitude: 51.04999,
    //   longitude: -114.066666,
    //   latitudeDelta: 0.01,
    //   longitudeDelta: 0.01

    // }}
  >
    {/* <Polyline coordinates={points} /> */}
    <Circle 
      center={currentLocation.coords}
      radius={30}
      strokeColor="rgba(158, 158, 255, 1.0)"
      fillColor="rgba(158, 158, 255, 0.3)"
    />
    <Polyline coordinates={locations.map(loc => loc.coords)} />
  </StyledMap>

  // return <StyledMap></StyledMap>
}

// const styles = StyleSheet.create({
//   map: {
//     height: 300
//   }
// })

export default Map;