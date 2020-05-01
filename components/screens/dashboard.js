import React, {Component} from 'react'
import {View, TouchableHighlight, Text,StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {COLORS,DIMENS} from '../constants/styles'
import CustomHeader from '../parts/custom-header'

export default class Dashboard extends Component{

	constructor( props ) {
		super( props )
    }

	render() {
        
        return (
            <View style={STYLES.wrapper}>
                <StatusBar
                    backgroundColor={COLORS.PRIMARY}
                    barStyle="light-content"
                />
                <CustomHeader 
                    style={STYLES.header}                     
                    left={
                        <Icon
                            name="menu"
                            size={32}
                            color={COLORS.SECONDARY}
                            style={STYLES.leftHeader}
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    title={
                        <Text
                        style={[STYLES.centerHeader,STYLES.title]}
                        >
                            Dashboard
                        </Text>
                    }
                />

               <View style={STYLES.body}>
                    <Icon
                        name="smile"
                        size={60}
                        color={COLORS.GREY}
                    />
                    <Text style={STYLES.alert}>No data to show now.</Text>
               </View>

            </View>
        )
    }
    
}

const STYLES = StyleSheet.create({
    wrapper : {
        flex:1,
        backgroundColor:COLORS.SECONDARY,
    },
    header : {
        flex:1,
    },
    body : {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    alert : {
        color: COLORS.GREY,
        textAlign:'center',
        marginTop:15,
    },
    subtitle : {
        flexDirection:'row',
        fontSize:10,
        color: COLORS.GREY
    },
    label : {
        fontWeight:'bold',
        marginLeft: 5,
        marginRight:5
    },
    title: {
        fontWeight:'bold',
        color:COLORS.SECONDARY,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    leftHeader:{
        marginLeft:10,
        flex:1
    },
    centerHeader: {
        flex:2
    },
    rightHeader: {
        flex: 1
    }
})
