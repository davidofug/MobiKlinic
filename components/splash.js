import React, { Component } from 'react'
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation'

import Home from './views/home'
import Login from './views/forms/login'
import signUp from './views/forms/signup'
import Doctors from './views/doctors'
import Tabs from './config/tabs'
import {COLORS} from './constants/styles'

export default class Splash extends Component {
    render(){
        return( <AppCreateAppContainer /> )
    }
}

const AppNavigation = createStackNavigator({

	Home: Home,
	Login: Login,
	signUp: signUp,
	Doctors: Doctors,
	
    Tabs: {
        screen: Tabs,
        defaultNavigationOptions: {
			headerLeft: null,
            headerStyle:{
				borderBottomWidth: 0,
				elevation:0,
				shadowColor:'transparent',
                backgroundColor:COLORS.PRIMARY,
            }
        }
    }
})

const AppCreateAppContainer = createAppContainer(AppNavigation)