import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity,Text,StyleSheet, StatusBar } from 'react-native'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage';
import {COLORS,DIMENS} from '../constants/styles'
import CustomHeader from '../parts/custom-header'

class Diagnosis extends Component{

	constructor( props ) {
        super( props )
        this.state = {
            data: []
        }
    }

    static navigationOptions = {
        header:null
    }
   
    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ViewDiagnosis',item)}
            >
                <ListItem

                    title={
                        <Text style={STYLES.listTitle}>CODE: {item.code}</Text>
                    }

                    subtitle={(

                        <View style={STYLES.wrapper}>
                            <View style={STYLES.subtitle}>
                                <Text style={STYLES.label}>Date</Text><Text>{item.date}</Text>
                            </View>
                            <View style={STYLES.subtitle}>
                                <Text style={STYLES.label}>Gender</Text><Text>{item.gender}</Text>
                                <Text style={STYLES.label}>Age Group</Text><Text>{item.age_group}</Text>
                            </View>

                            <View style={STYLES.subtitle}>
                                <Text style={STYLES.label}>Pregnant?</Text><Text>{item.isPregnant ? 'Yes':'No'}</Text>
                            </View>
                        </View>

                    )}
                    leftAvatar={
                        <Icon
                            name="activity"
                            size={25}
                            color='rgba(0,0,0,.3)'
                        />                        
                    }
                    rightAvatar= {
                        <Icon
                            name="chevron-right"
                            size={25}
                            color='rgba(0,0,0,.3)'
                        />
                    }
                    bottomDivider={true}
                />  
            </TouchableOpacity>
        )
    }

    componentWillMount() {
        this._getDiag()
    }

    componentWillUnmount() {
        this.setState({date:[]})
    }
    
    _getDiag = async () => {
        try {
            const value = await AsyncStorage.getItem('@diagnosis')
            this.setState({ data: value ? JSON.parse(value) : this.state.data })
            
        } catch (err) {
            throw err
        }
    }

    _header = () => (
        <CustomHeader
                        
            left={
                <TouchableOpacity
                    style={{paddingLeft:10}}
                    onPress={()=>this.props.navigation.openDrawer()}
                >
                    <Icon
                        name="menu"
                        size={25}
                        color={COLORS.SECONDARY}
                    />
                </TouchableOpacity>
            }

            title={
                <Text
                    style={[
                        STYLES.centerHeader,
                        STYLES.title
                    ]}
                >
                    Diagnosis
                </Text>
            }

            right={
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('NewDiagnosis')}
                    style={{paddingRight:10}}
                >
                    <Icon
                        name="plus"
                        size={25}
                        color={COLORS.SECONDARY}
                    />
                </TouchableOpacity>
            }
        />
    )

	render() {

        let {data} = this.state

        if( typeof data === 'object' && data.length == 0 )
        
            return(

                <View style={STYLES.wrapper}>
                    <StatusBar
                        backgroundColor={COLORS.PRIMARY}
                        barStyle="light-content"
                    />

                    {this._header()}

                    <View style={STYLES.body}>

                        <Icon
                            name="smile"
                            size={60}
                            color={COLORS.GREY}
                        />

                        <Text style={STYLES.alert}>You don't have Diagnosis info yet.</Text>

                    </View>

                </View>

            )

        return (
            <View style={STYLES.wrapper}>
                <StatusBar
                    backgroundColor={COLORS.PRIMARY}
                    barStyle="light-content"
                />

                {this._header()}

                <FlatList
                    data = { data }
                    renderItem = { this._renderItem }
                    keyExtractor = { this._keyExtractor }
                />
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
    title: {
        fontWeight:'bold',
        color:COLORS.SECONDARY,
        textAlign:'center'
    },
    alert : {
        color: COLORS.GREY,
        textAlign:'center',
        marginTop:15,
    },
    listTitle: {
        color:COLORS.PRIMARY,
        fontSize:16,
        fontWeight:'bold'
    },
    subtitle : {
        flexDirection:'row',
        fontSize:10,
        opacity:0.5
    },
    label : {
        fontWeight:'bold',
        marginLeft: 5,
        marginRight:5
    },
    leftHeader:{
        flex:1,
        paddingLeft:10
    },
    centerHeader: {
        flex:2,
        flexDirection:'row'
    },
    rightHeader: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})

export default Diagnosis