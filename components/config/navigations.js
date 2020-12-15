import 'react-native-gesture-handler'
import * as React from 'react'
import {
    View, 
    Button,
    Image
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/login'
import SignUp from '../screens/signup'
import PasswordReset from '../screens/password.reset'
import About from '../screens/about'
import Covid19 from '../screens/covid19'
import News from '../screens/news'
import Maternal from '../screens/maternal'
import Intro from '../screens/intro'
import General from '../screens/general'
import Tips from '../screens/tips'

import Doctors from '../screens/doctors'

const Stack = createStackNavigator()

export const MainNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Covid"
                component={Covid19}
                options={{
                    headerTitle: props =>
                        <View>
                            <Image 
                                style={{width: 30, height: 30}}
                                source={require('../imgs/logo.png')}
				            />
                       </View>,
                    headerRight: () => (
                      <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#000"
                      />
                    ),
                  }}
              />
              <Stack.Screen name="News" component={News} />
              <Stack.Screen name="General" component={General} />
              <Stack.Screen name="Maternal" component={Maternal} />
              <Stack.Screen name="Intro" component={Intro} />
              <Stack.Screen name="Tips" component={Tips} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ResetPassword" component={PasswordReset} />
              <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}