import * as React from 'react'
import {
    View,
    Alert,
    Switch,
    ScrollView,
    TextInput,
    TouchableOpacity, 
    Text,
    StyleSheet,
    StatusBar, 
    Button, 
} from 'react-native'

import Picker from '@react-native-community/picker'
import Icon from 'react-native-vector-icons/Feather'

import {
    COLORS,
    DIMENS 
} from '../constants/styles'

import AsyncStorage from '@react-native-community/async-storage'

import { 
    _removeStorageItem, 
    generateRandomCode, 
    MyDate
} from '../helpers/functions'

const NewDiagnosis = ({navigation}) => {

    const [diagnosis, updateDiagnosis] = React.useState({
        fullname:'',
        gender:'female',
        age_group: '',
        phone:'',
        condition:'',
        isPregnant: false,
        diagnosises:[]
    })

/*     static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: COLORS.SECONDARY,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                marginTop: (Platform.OS === 'ios') ? 0 : 2
            },
            headerTitle: 'Add Diagnosis',
            headerTintColor: COLORS.BLACK,
            headerRight: (
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
            ), 
        }     
    } */

    _updateAge = (value) => {
        updateDiagnosis({...diagnosis, age_group:value})

    }

    _updateGender = (value) => {
        updateDiagnosis({...diagnosis, gender:value})
    }

    _updatePregnancy = value => {
        updateDiagnosis({...diagnosis, isPregnant: value})
    }

    _save = async () => {
        
        const { fullname, gender, age_group, phone, condition, isPregnant, service } = diagnosis
        const code = generateRandomCode(5), date = MyDate()

        const newDiagnosis = {
            code,
            date,
            fullname,
            msdn:phone,
            gender,
            age_group,
            condition,
            isPregnant,
        }

        
        if (fullname && gender && age_group && condition) {

            const data = await AsyncStorage.getItem('@diagnosis')
            const prevDiagnosis = data !== null ? JSON.parse(data) : []
            
            AsyncStorage.setItem('@diagnosis', JSON.stringify([newDiagnosis, ...prevDiagnosis]), () => {
                
            Alert.alert(
                    'Successful',
                    'Diagnoisis saved',
                    [
                        { text: 'OK', }
                    ]
                )
            })

            updateDiagnosis({
                fullname: '',
                gender:'',
                age_group: '',
                phone: '',
                condition: '',
                isPregnant: false
            })
            
        } else {
            Alert.alert(
                'Ooops!',
                'Complete all fields',
                [
                    { text: 'OK'}
                ]
            )
        }
    }

    _getData = async () => {
        const data = await AsyncStorage.getItem('@diagnosis')
        Alert.alert(
            'Success',
            data,
            [
                { text: 'OK' }
            ]
        )
    }

    let {fullname, phone, condition } = diagnosis

    return(

        <View style={STYLES.wrapper}>
            <StatusBar
                backgroundColor={COLORS.SECONDARY}
                barStyle="dark-content"
            />
            
            <ScrollView style={STYLES.body} keyboardDismissMode='on-drag'>
                <Text style={STYLES.terms}>
                    Enter patient details.
                </Text>
                <TextInput style={STYLES.input}
                    autoCorrect={false}
                    // underlineColorAndroid='rgba(0,0,0,0.7)'
                    placeholderTextColor='rgba(0,0,0,0.7)'
                    selectionColor={COLORS.SECONDARY}
                    onChangeText={( fullname ) => setState({fullname,showError:false} )}
                    value={fullname}
                    placeholder='Full name'
                />

                <View style={STYLES.pickers}>
                    <Picker selectedValue = {diagnosis.gender} onValueChange = {_updateGender}>
                        <Picker.Item label = "Gender" value = "Gender" />
                        <Picker.Item label = "Female" value = "Female" />
                        <Picker.Item label = "Male" value = "Male" />
                        <Picker.Item label = "Other" value = "Other" />
                    </Picker>
                </View>

                <View style={STYLES.labeled}>
                    <Text style={STYLES.label}>
                        Is pregnant? {diagnosis.isPregnant == false ? 'No' : 'Yes'}
                    </Text>
                    <Switch
                        style={STYLES.field}
                        onValueChange={_updatePregnancy}
                        value={diagnosis.isPregnant}
                    />
                </View>                  

                <View style={STYLES.pickers}>
                    <Picker selectedValue={diagnosis.age_group} onValueChange={_updateAge} >
                        <Picker.Item label = "Age group" value = "Age group" />
                        <Picker.Item label = "0 - 3" value = "0 - 3" />
                        <Picker.Item label = "3 - 10" value = "3 - 10" />
                        <Picker.Item label = "10 - 17" value = "10 - 17" />
                        <Picker.Item label = "17 - 40" value = "17 - 40" />
                        <Picker.Item label = "40 - 60" value = "40 - 60" />
                        <Picker.Item label = "60 above" value = "60 above" />
                    </Picker>
                </View>

                <TextInput style={STYLES.input}
                    autoCorrect={false}
                    // underlineColorAndroid='rgba(0,0,0,0.7)'
                    placeholderTextColor='rgba(0,0,0,0.7)'
                    selectionColor={COLORS.SECONDARY}
                    onChangeText={ phone  => setState( {phone,showError:false} )}
                    value={phone}
                    placeholder='Phone number'
                />

                <TextInput style={STYLES.textarea}
                    autoCorrect={false}
                    multiline={true}
                    // underlineColorAndroid='rgba(0,0,0,0.7)'
                    placeholderTextColor='rgba(0,0,0,0.7)'
                    selectionColor={COLORS.SECONDARY}
                    onChangeText={( condition ) => setState( {condition,showError:false} )}
                    value={condition}
                    placeholder='Patience condition'
                />
                <TouchableOpacity
                        style={STYLES.submit}
                        onPress={ () => _save(navigation) }
                    >
                        <Text style={STYLES.submitText}>Save</Text>
                        <Icon
                            name="arrow-right"
                            size={20}
                            color={COLORS.WHITE}
                        />

                </TouchableOpacity>

                {/* <TouchableOpacity
                        style={STYLES.submit}
                        onPress={ () => _getData() }
                    >
                        <Text style={STYLES.submitText}>Get
                            <Icon
                                name=""
                                size={15}
                                color={COLORS.WHITE}
                            />
                        </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={STYLES.submit}
                    onPress={() => {

                        AsyncStorage.removeItem('diagnosis')
                        AsyncStorage.removeItem('@diagnosis')
                        AsyncStorage.removeItem('@test')
                    }}
                    >
                        <Text style={STYLES.submitText}>Remove Items
                            <Icon
                                size={15}
                                color={COLORS.WHITE}
                            />
                        </Text>

                </TouchableOpacity> */}

            </ScrollView>

        </View>

    )
}

export default NewDiagnosis

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
        paddingHorizontal:20
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
        color: 'rgba(0,0,0,0.7)',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: COLORS.GREY,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor:COLORS.GREY_LIGHTER
    },
    textarea: {
        color: 'rgba(0,0,0,0.7)',
        minHeight: 70,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderColor: COLORS.GREY,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
    },
    terms:{
        paddingVertical:10,
        textAlign: 'center',
        color: 'grey'
    },
    pickers : {
        // borderBottomColor: 'rgba(0,0,0,0.7)',
        // borderBottomWidth:1,
        borderColor: COLORS.GREY,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: -10,
        marginBottom:10
    },
    labeled: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: COLORS.GREY,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,

    },
    label: {
        flex: 2
    },
    field: {
        flex: 1,
        justifyContent:'flex-end',
        
    },
    submit: {
        flexDirection:'row',
        padding: DIMENS.PADDING,
        paddingHorizontal:15,
		justifyContent:'space-between',
		alignItems:'center',
        backgroundColor: COLORS.PRIMARY,
        borderRadius:50
	},
	submitText:{
		color:COLORS.BLACK,
		textAlign:'center',
        textTransform: 'uppercase',
        fontWeight:'bold'
	}
})