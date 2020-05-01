import React, {Component} from 'react'
import {View, TouchableHighlight, AsyncStorage, Text,StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import {COLORS,DIMENS} from '../constants/styles'
import {users} from '../../test-data/data.json'

class Profile extends Component{

	constructor( props ) {
		super( props )
    }
    
    static navigationOptions = {
        headerStyle:{
            borderBottomWidth: 0,
            elevation:0,
            shadowColor:'transparent',
            backgroundColor:COLORS.PRIMARY,
        }
    }

	render() {
        
        return (
            <View>
                <Text>Member Profile</Text>
            </View>
        )
    }
    
}

const STYLES = StyleSheet.create({
	textColor:{
		color: COLORS.PRIMARY
	},
	container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
		flexDirection:'column',
		height: '100%',
		backgroundColor:COLORS.SECONDARY,
	}
})

export default Profile