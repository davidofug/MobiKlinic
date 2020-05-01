import React, {Component} from 'react'
import {View,Modal,Image,Alert,Text, TextInput,StyleSheet, StatusBar,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {COLORS,DIMENS} from '../constants/styles'
import {URLS} from '../constants/API'
import {users} from '../../test-data/data.json'
import {Drawer} from '../config/navigators'
import SignUp from './signup'

export default class Login extends Component {

	constructor( props ) {
		super( props )

		this.state = {
			username: '',
			password:'',
			showError:false,
			isLoggedIn:false,
			toSignUp:false,
			users:'',
			msg:''
		}
	}
	
	_doLogin() {
		this.setState({msg:'',showError:false})
		const {username,password} = this.state
		let userFound = false

		if( password != undefined || username != undefined ) {
			if ( password.length > 0 && username.length > 0 ) {
				if( users != '' ) {
					
					if ( typeof users != 'undefined' && users.length > 0 ) {

						users.forEach( USER => {
							if( USER.msdn == username && USER.pin == password ) {
								userFound = true
							}
						})

						if (userFound)
							this.setState({msg:``,isLoggedIn:true,showError: false})
						else
							this.setState({msg: `Wrong username or password`,showError:true})

					} else {
						this.setState({msg:`App can't find user`,showError:true})
					}

				} else {

					fetch( URLS.BASE, {
						'username':username,
						'password':password
					}).then( response => {
						console.log( response)
					}).catch( error => {
						console.error( error )
					})

				}
 
			} else {
				this.setState({msg:`Username and password required`,showError:true})
			}
		} else {
			this.setState({msg:`Username and password required`,showError:true})
		}
	}

	static navigationOptions = {
		header: null
	}

	_modal = (status,msg) => (
		<Modal
			animationType="slide"
			transparent={true}
			visible={status}
			onPress={() => !status}
		>
		<View style={{marginTop: 22}}>
		  <View>
			<Text>{msg}</Text>
		  </View>
		</View>
	  </Modal>
	)

	render(){

		const {isLoggedIn,toSignUp,msg,username,password,showError} = this.state

		if(showError) {
			Alert.alert(
				'Error',
				msg,
				[
					{ text: 'OK', }
				]
			)
		}

		if(isLoggedIn) {
			return <Drawer/>
		} else if(toSignUp) {
			return <SignUp/>
		}

		return(
			<View style={styles.container}>
				<StatusBar
					backgroundColor={COLORS.PRIMARY}
					barStyle="light-content"
				/>

				<View style={styles.logoContainer}>
					<Image 
						style={{width: 70, height: 70}}
						source={require('../imgs/logo.png')}
					/>
					<Text style={styles.title}>MobiKlinic</Text>
					<Text style={styles.subTitle}>Sign in</Text>
				</View>

				<View style={styles.formContainer}>
					<View>
						
						<TextInput style={styles.input}
							autoCorrect={false}
							// underlineColorAndroid={COLORS.WHITE_LOW}
							placeholderTextColor='grey'
							selectionColor={COLORS.SECONDARY}
							onChangeText={( username ) => this.setState( {username,showError:false} )}
							value={username}
							placeholder='Phone number e.g: 256778xxxxxx'
						/>

						<TextInput style={styles.input}
							password={true}
							secureTextEntry={true}
							autoCorrect={false}
							//underlineColorAndroid={COLORS.WHITE_LOW}
							placeholderTextColor='grey'
							selectionColor={COLORS.SECONDARY}
							onChangeText={( password ) => this.setState( {password,showError:false} )}
							value={password}
							placeholder='Password'
						/>

						<TouchableOpacity
							style={styles.submit}
							onPress={ () => this._doLogin() }
						>
							<Text style={styles.submitText}>Sign in</Text>
							<Icon
								// name="log-in"
								name="arrow-right"
								size={20}
								strokeSize={3}
								// color={COLORS.WHITE}
							/>

						</TouchableOpacity>

						{/*<TouchableOpacity
							onPress={ () => this.setState({toSignUp:true})}
						>
							<Text style={[styles.textColor,styles.linkItem]}>or, sign up</Text>
						</TouchableOpacity> */}

					</View>

				</View>
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		// backgroundColor:COLORS.PRIMARY,
		paddingLeft:DIMENS.FORM.PADDING,
		paddingRight:DIMENS.FORM.PADDING,
	},
	logoContainer: {
		flexGrow:1,
		alignItems:'center',
		justifyContent:'center'
	},
	title:{
		color: COLORS.WHITE_LOW
	},
	subTitle:{
		color: COLORS.SECONDARY,
		fontWeight:'bold',
		paddingVertical:20
	},
	textColor:{
		color: COLORS.WHITE_LOW
	},
	linkItem:{
		paddingTop: DIMENS.PADDING,
		textAlign:'center'
	},
	formContainer:{
		marginBottom:40
	},
	fieldContainer:{
		flex:1,
		flexDirection:'row',
		alignItems:'flex-end',
		justifyContent:'flex-end'
	},
	inputIcon:{
		
	},
	input: {
		// color: COLORS.SECONDARY,
		backgroundColor:COLORS.SECONDARY,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#000',
		borderRadius: 50,
		paddingHorizontal: 15,
		paddingVertical: 5,
		marginBottom: 10,
		fontFamily:'Roboto',
	},
	btn:{
		padding: DIMENS.PADDING,
	},

	errorMsg:{
		color:COLORS.ERRORS
	},
	submit:{
		padding: DIMENS.PADDING,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		backgroundColor: COLORS.SECONDARY,
		borderRadius: 50,
		paddingHorizontal:15
	},
	submitText:{
		//color:COLORS.PRIMARY,
		// textAlign:'center',
		// textTransform: 'uppercase',
		fontWeight:'bold'
	}
})