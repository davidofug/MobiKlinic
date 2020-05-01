import React, { Component } from 'react'
import {View,Image,Text, StyleSheet, StatusBar } from 'react-native'
import {COLORS,DIMENS,FONTS} from '../constants/styles'
import {displayName} from '../../app.json'

import Login from './login'

export default class Splash extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true
        }
    }

    componentDidMount() {
        setTimeout(() => {

            this.setState({
                isLoading:false
            })
    
        },3000 )
    }

    render(){

        if( !this.state.isLoading) {
            return <Login/>

        } else {
            
            return (
                <View style={styles.container}>

                    <StatusBar
                        backgroundColor={COLORS.SECONDARY}
                        barStyle="light-content"
                    />

                    <View style={styles.row1}>
                        <Image 
                            style={{width: 100, height: 100}}
                            source={require('../imgs/logo.png')}
                        />
                        <Text style={[styles.appName,styles.textBold]}>{displayName}</Text>
                    </View>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
	appName:{
		color: COLORS.BLACK,
		marginTop: 20,
		fontSize: FONTS.SIZE.HEADING,
		textTransform:'uppercase'
    },
    textBold:{
		fontWeight:'bold',
    },
	container: {
		flexDirection:'column',
		height: DIMENS.HEIGHT,
		backgroundColor:COLORS.SECONDARY,
	},
	row1: {
		flex: 2,
		padding: DIMENS.PADDING,
		justifyContent: 'center',
		alignItems: 'center'
	},
	maker:{
		fontSize: FONTS.SIZE.SMALLEST,
		color:COLORS.SECONDARY
	}
})