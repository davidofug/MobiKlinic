import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
// Navigators
import { createAppContainer,createDrawerNavigator, createStackNavigator, createTabNavigator } from 'react-navigation'
//import {createMaterialTopTabNavigator } from 'react-navigation-tabs'

//Screens
import Dashboard from '../screens/dashboard'
import Diagnosis from '../screens/diagnosis'
import NewDiagnosis from '../screens/newdiagnosis'
import ViewDiagnosis from '../screens/singlediagnosis'
import DiagnosisFollowUp from '../screens/diagnosisfollowup'
import Doctors from '../screens/doctors'
import Ambulance from '../screens/ambulance'
import Health from '../screens/health'
import Profile from '../screens/profile'
import Settings from '../screens/settings'
import About from '../screens/about'
import Logout from '../screens/logout'

/*
const Tabs = createMaterialTopTabNavigator({ Check, Stats, Info },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#C1282D',
            },
            indicatorStyle:{
                backgroundColor: 'rgba(255,255,255, 0.29)'
            }
        },
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#C1282D'
            },
            headerTintColor: '#fff',
        }
    }
)

export default Tabs
TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

Plain old component
import Plain from './Plain'

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
*/
const DiagnosisNav = createStackNavigator({
    Diagnosis: { screen: Diagnosis },
    NewDiagnosis: { screen: NewDiagnosis },
    ViewDiagnosis : { screen: ViewDiagnosis},
    DiagnosisFollowUp : { screen: DiagnosisFollowUp},
    path:Diagnosis
})

export const DiagnosisStack = createAppContainer(DiagnosisNav)

/*
export const Tabs = createTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
  order: ['TabA', 'TabB', 'TabC']
}) */

const DrawerNav = createDrawerNavigator({

    Dashboard:{
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Dashboard"
        },
        screen: Dashboard
    },
    Diagnosis: { 
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="users" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Diagnosis",
            header:null

        },
        screen: DiagnosisStack 
    },
    Doctors: {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="users" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Medical Experts"
        },
        screen: Doctors 
    },
    Ambulance: {
        navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Icon name="truck" size={15} style={{ color: tintColor }} />
        ),
        drawerLabel: "Ambulance"
        },
        screen: Ambulance
    },
    'Health info': {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="thermometer" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Health info"
        },
        screen: Health 
    },
    Profile: {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="user" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Profile"
        },
        screen: Profile
    },
    Settings: {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="settings" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Settings"
        },
        screen: Settings
    },
    About: {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="book" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "About"
        },
        screen: About 
    },
    Logout: {
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="log-out" size={15} style={{ color: tintColor }} />
            ),
            drawerLabel: "Log out"
        },
        screen: Logout
    },
})

export const Drawer = createAppContainer(DrawerNav)