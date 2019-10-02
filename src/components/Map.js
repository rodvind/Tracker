import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps'
import styled from 'styled-components';

// const StyledMap = styled.MapView`
//   height: 300px;
// `

const Map = (params) => {
  let points = []
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 51.049999 + i * 0.001,
        longitude: -114.066666 + i * 0.001
      })
    } else {
      points.push({
        latitude: 51.049999 - i * 0.002,
        longitude: -114.066666 + i * 0.001
      })
    }
    
  }

  return <MapView 
    style={styles.map} 
    initialRegion={{
      latitude: 51.04999,
      longitude: -114.066666,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01

    }}
  >
    <Polyline coordinates={points} />
  </MapView>

  // return <StyledMap></StyledMap>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map;