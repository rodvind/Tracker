import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements';
import styled from 'styled-components';

import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const StyledButton = styled(Button)`
  margin: 10px;
`

const TrackForm = (params) => {
  const { state: { name, recording, locations },
     startRecording, 
     stopRecording, 
     changeName 
    } = useContext(LocationContext)

    // console.log(locations.length)

    const [saveTrack] = useSaveTrack()

  return <>
    <Spacer>
      <Input
        value={name}
        placeholder="Enter name" 
        onChangeText={changeName}  
      />
    </Spacer>
    
    {recording 
      ? <StyledButton title="Stop" onPress={stopRecording} />
      : < StyledButton title = "Start Recording" onPress = {startRecording} />  
    }
    {
      !recording && locations.length
      ? <StyledButton title="Save Recording" onPress={saveTrack} />
      : null
    }
    
  </>
}

export default TrackForm