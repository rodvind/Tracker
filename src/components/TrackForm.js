import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements';
import styled from 'styled-components';

import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const StyledButton = styled(Button)`
  margin: 10px;
`

const TrackForm = (params) => {
  const { state: { name, recording, locations },
     startRecording, 
     stopRecording, 
     changeName 
    } = useContext(LocationContext)

    console.log(locations.length)

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
    
  </>
}

export default TrackForm