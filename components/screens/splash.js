import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Login from "./login"

function Splash() {

  useEffect(() => {
    SplashScreen.hide()
  })
  return <Login/>
}

export default Splash