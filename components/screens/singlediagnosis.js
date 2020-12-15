import React, {Component} from 'react'
import {View,Alert, TextInput,TouchableOpacity, Text,StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS, DIMENS } from '../constants/styles'

export default class ViewDiagnosis extends Component {

	constructor( props ) {
        super( props )
    }

    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: COLORS.SECONDARY,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                marginTop: (Platform.OS === 'ios') ? 0 : 2
            },
            headerTitle: 'Diagnosis details',
            headerTintColor: COLORS.BLACK,
            /* headerRight: (
                <TouchableOpacity
                    onPress = {_save()}
                    style={{paddingRight:10}}
                >
                    <Icon
                        name="check"
                        size={25}
                        color={COLORS.SECONDARY}
                    />
                </TouchableOpacity>
            ), */
        }     
    }
    
    render() {
        
        const { navigation } = this.props
        
        return(
            <View style={STYLES.wrapper}>
                <StatusBar
                    backgroundColor={COLORS.SECONDARY}
                    barStyle="dark-content"
                    />

                <View style={STYLES.body}>
                    <View style={{padding: 20}}></View>

                    <View style={{marginLeft: 15,marginRight:15}}>

                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Number</Text>
                        <Text>{navigation.getParam('code')}</Text>
                    </View>
                        
                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Phone</Text>
                            <Text>{navigation.getParam('msdn')}</Text>
                    </View>
                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Gender</Text>
                        <Text>{navigation.getParam('gender')}</Text>
                    </View>
                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Age group</Text>
                        <Text>{navigation.getParam('age_group')}</Text>
                    </View>
                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Condition</Text>
                            <Text>{navigation.getParam('condition')}</Text>
                    </View>
                    <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Pregnant?</Text>
                        <Text>{navigation.getParam('isPregnant') == false ? 'No' : 'Yes'}</Text>
                    </View>
{/*                 <View style={{borderBottomColor:'#d3d3d3',borderBottomWidth:1,padding:5}}>
                        <Text style={{fontWeight:'bold'}}>Service Rendered</Text>
                        <Text>{item.service}</Text>
                    </View> */}

                    <View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DiagnosisFollowUp', navigation)}

                        >
                            <View style={STYLES.button}>
                                <Text style={STYLES.btnText}>
                                    Follow up 
                                </Text>
                                <Icon
                                    style={STYLES.icon}
                                    name="arrow-right"
                                    size={20}
                                    color={COLORS.SECONDARY}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    </View>

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
        /*justifyContent:'center',
        alignItems:'center',*/
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
        alignItems:'center'
    },
    leftHeader:{
        marginLeft:10,
        flex:1
    },
    centerHeader: {
        flex:2,
        alignItems:'center'
    },
    rightHeader: {
        paddingRight:10
    },
    button: {
        backgroundColor: COLORS.PRIMARY,
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        color: COLORS.SECONDARY
    },
    btnText: {
        color: COLORS.SECONDARY,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    icon: {
        marginLeft: 10
    }
})
