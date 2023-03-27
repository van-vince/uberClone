import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import  {OriginContextProvider, DestinationContextProvider}  from './src/context/contexts'
import { registerRootComponent } from 'expo';


const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  )
}

registerRootComponent(App)

const styles = StyleSheet.create({

  container: {
    flex: 1
  }
})