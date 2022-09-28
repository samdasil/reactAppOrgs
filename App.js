import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Home from './src/views/Home';

export default function App() {
  const fontOk = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold,
  });

  if(!fontOk){
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}
