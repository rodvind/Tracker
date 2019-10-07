import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps'
import styled from 'styled-components';

import { Context as TrackContext } from '../context/TrackContext'

const StyledText = styled.Text`
  padding: 10px;
  font-size: 48;
`
const StyledMap = styled(MapView)`
  height: 300px;
`



const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')

  // console.log('State: ', state)
  const track = state.find(t => t._id === _id )
  // const trackCoord = state.fid
  const initialCoords = track.locations[0].coords

  // console.log('Track: ', track)
  // console.log('Initail: ', initialCoords)


  return <>
    <StyledText>{track.name}</StyledText>
    <MapView 
      initialRegion={{
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
        ...initialCoords
      }}
    >
      <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
    </MapView>
  </>
}

const styles = StyleSheet.create({})

export default TrackDetailScreen