import React, {Component} from 'react'
import {View,Alert, ScrollView, Picker, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {COLORS,DIMENS} from '../constants/styles'

export default class DiagnosisFollowUp extends Component{

	constructor( props ) {
        super( props )
        this.state = {
            id: props.navigation.state.params.code,
            type: null,
            details: '',
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: COLORS.PRIMARY
            },
            headerTitle: 'Provide details',
            headerTintColor: COLORS.SECONDARY,
            headerRight: (
                <TouchableOpacity
                    onPress={() => Alert.alert(
                            'Success',
                            'Follow up saved',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('Diagnosis') }
                            ]
                        )
                    }
                    style={{paddingRight:10}}
                >
                    <Icon
                        name="check"
                        size={25}
                        color={COLORS.SECONDARY}
                    />
                </TouchableOpacity>
            ),
        }
    }

    _updateType = (value) => {

        this.setState({type:value})

    }

	render() {
        
        let { details } = this.state
               
        return(

            <View style={STYLES.wrapper}>
                <StatusBar
                    backgroundColor={COLORS.PRIMARY}
                    barStyle="light-content"
                />
                
                <ScrollView style={STYLES.body}>
                    <View style={STYLES.terms}>
                        <Text>If this is a returning patient, proceed by providing the follow up details below.</Text>
                        <Text style={STYLES.tip}>
                            Tap the <Icon name="check" color="black"/> at the top right. To save.
                        </Text>
                    </View>

                    <View style={STYLES.pickers}>

                        <Picker selectedValue = {this.state.type} onValueChange = {this._updateType}>
                            <Picker.Item label = "Type" value = "0" />
                            <Picker.Item label = "Trimester 1" value = "1" />
                            <Picker.Item label = "Trimester 2" value = "2" />
                            <Picker.Item label = "Trimester 3" value = "3" />
                            <Picker.Item label = "General" value = "4" />
                        </Picker>
                    </View>

                    <TextInput style={STYLES.input}
                        autoCorrect={false}
                        multiline={true}
                        underlineColorAndroid='rgba(0,0,0,0.7)'
                        placeholderTextColor='rgba(0,0,0,0.7)'
                        selectionColor={COLORS.SECONDARY}
                        onChangeText={( details ) => this.setState( {details,showError:false} )}
                        value={details}
                        placeholder='Follow up description...'
                    />

                </ScrollView>

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
        padding:20
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
    tip: {
        color:'rgba(0,0,0,0.4)',
        paddingTop:15,
        paddingBottom:15
    },
    input: {
		color: 'rgba(0,0,0,0.6)',
    },
    terms:{
        paddingTop:10,
        paddingBottom:10
    },
    pickers : {
        borderBottomColor: 'rgba(0,0,0,0.7)',
        borderBottomWidth:1,
        marginBottom:5
    },
    labeled: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.7)',
        borderBottomWidth:1,
    },
    label: {
        flex: 2
    },
    field: {
        flex: 1,
        justifyContent:'flex-end'
    }
})
