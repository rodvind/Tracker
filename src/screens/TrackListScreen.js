import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  // console.log(state)
  return <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <FlatList 
      data={state}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('TrackDetail', { _id: item._id })
          }} >
          <ListItem chevron title={item.name} />
        </TouchableOpacity>
        )
      }}
    />
    {/* <Button 
      title="Go to Track Detail"
      onPress={() => navigation.navigate('TrackDetail')}
    /> */}
  </>
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen