import 'react-native-gesture-handler'
import * as React from 'react'
import {
    View, 
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import {COLORS, DIMENS} from '../constants/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem 
} from '@react-navigation/drawer'

import AuthContext from '../contexts/auth'
import {UserContext} from '../providers/User'
import Dashboard from '../screens/dashboard'
import Login from '../screens/login'
import SignUp from '../screens/signup'
import PasswordReset from '../screens/password.reset'
import About from '../screens/about'
import Covid19 from '../screens/covid19'
import News from '../screens/news'
import Maternal from '../screens/maternal'
import GetStarted from '../screens/get.started'
import General from '../screens/general'
import Tips from '../screens/tips'
import Diagnose from '../screens/diagnosis'

import Doctors from '../screens/doctors'
import { acc } from 'react-native-reanimated'
import Ambulance from '../screens/ambulance'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export const CustomDrawerContent = (props) => {
    const {accessToken} = React.useContext(UserContext)

    React.useEffect(()=> {
        // console.log('Drawer header')
        // console.log(userDetail)
    },[])

    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerHeader}>
            <Image 
                source={require('../imgs/logo.png')}
                style={styles.DrawerHeaderIcon}
            />
            <Text style={styles.DrawerHeaderText}></Text>
        </View>
        <DrawerItemList {...props} />
        {props.children}
      </DrawerContentScrollView>
    )
}

export const DrawerNavigation = () => {
    const {accessToken} = React.useContext(UserContext)

    return (
        <Drawer.Navigator initialRouteName="Dashboard"
            drawerContentOptions={{
                itemsContainerStyle: {
                    marginVertical: 0,
                },
                activeTintColor: COLORS.WHITE,
                inactiveTintColor: COLORS.WHITE,
                activeBackgroundColor: COLORS.ACCENT_1,
                itemStyle: {
                    marginHorizontal: 0,
                    padding: DIMENS.PADDING,
                    borderRadius: 0
                }
            }}
            drawerType={'slide'}
            hideStatusBar={'true'}
            drawerStyle={{
                backgroundColor: COLORS.PRIMARY,
                width: 240,
            }}

            drawerContent={ props => 
                <CustomDrawerContent {...props} />
            }
        >
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Covid" component={Covid19} />
            <Drawer.Screen name="News" component={News} />
            <Drawer.Screen name="Maternal" component={Maternal} />
            <Drawer.Screen name="Health Tips" component={Tips} />
            <Drawer.Screen 
                name="Login"
                component={Login}
                options={{headerShown: false, swipeEnabled: false }}
            />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}

export const DrawerNavigationLogged = () => {
    
    const {signOut} = React.useContext(AuthContext)
    const {accessToken} = React.useContext(UserContext)

    return (
        <Drawer.Navigator initialRouteName="Dashboard"
            drawerContentOptions={{
                itemsContainerStyle: {
                    marginVertical: 0,
                },
                activeTintColor: COLORS.WHITE,
                inactiveTintColor: COLORS.WHITE,
                activeBackgroundColor: COLORS.ACCENT_1,
                itemStyle: {
                    marginHorizontal: 0,
                    padding: DIMENS.PADDING,
                    borderRadius: 0
                }
            }}
            drawerType={'slide'}
            hideStatusBar={'true'}
            drawerStyle={{
                backgroundColor: COLORS.PRIMARY,
                width: 240,
            }}

            drawerContent={ props => 
                <CustomDrawerContent {...props} >
                    <DrawerItem label="Sign out" onPress={signOut} />
                </CustomDrawerContent>
            }
        >
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Diagnose" component={Diagnose} />
            <Drawer.Screen name="Doctors" component={Doctors} />
            <Drawer.Screen name="Ambulance" component={Ambulance} />
            <Drawer.Screen name="Help" component={GetStarted} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}

/* export const MainNavigation = () => {

    return (
        <AuthContext>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Dashboard"
                        component={Dashboard}
                        options={{
                            headerShown: false,
                            headerTitle: () =>
                                <View>
                                    <Image 
                                        style={{width: 30, height: 30}}
                                        source={require('../imgs/logo.png')}
                                    />
                                </View>,
                            headerRight: () => 
                                <TouchableOpacity
                                    style={{paddingLeft:10}}
                                >
                                    <Icon
                                        name="menu"
                                        size={25}
                                        color={COLORS.ACCENT_1}
                                    />
                                </TouchableOpacity>
                                ,
                        }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        options={{
                            headerShown: false
                        }}
                        component={SignUp}

                    />
                    <Stack.Screen
                        name="ResetPassword"
                        options={{
                            headerShown: false
                        }}
                        component={PasswordReset}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </AuthContext>
    )
} */

const styles = StyleSheet.create({
    DrawerHeader: {
        backgroundColor: COLORS.PRIMARY,
        padding: DIMENS.PADDING,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    DrawerHeaderIcon: {
        width: 80,
        height: 80,
        borderRadius: 10,

    },
    DrawerHeaderText: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingLeft: DIMENS.PADDING
    }
})