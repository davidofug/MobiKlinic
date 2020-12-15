
import * as React from 'react'
import SplashScreen from 'react-native-splash-screen'
import {MainNavigation} from '../config/navigations'

const Splash = () => {

  React.useEffect(() => {
    SplashScreen.hide()
  },[])

  return <MainNavigation />

}

export default Splash