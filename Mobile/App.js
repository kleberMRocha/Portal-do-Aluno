import React from 'react';
import Routes from './src/routes';
import {useFonts} from 'expo-font';
import {Nunito_400Regular ,Nunito_600SemiBold, Nunito_700Bold} from '@expo-google-fonts/nunito';
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  const [fontsLoader] = useFonts({Nunito_400Regular,Nunito_600SemiBold,Nunito_700Bold});

  if(!fontsLoader) return null; 


  return(
      <AuthProvider>
          <Routes/>
      </AuthProvider>
  );

}