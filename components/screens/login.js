import * as React from 'react'
import axios from 'axios'

import {
	View,
	Modal,
	Image,
	Alert,
	Text,
	TextInput,
	StyleSheet,
	StatusBar,
	TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import {
	COLORS,
	DIMENS
} from '../constants/styles'
import {URLS} from '../constants/API'
import {Drawer} from '../config/navigations'
import SignUp from './signup'

const Login = ({props}) => {

	React.useEffect(() => {
		user.isLoggedIn && props.navigation.navigate({Dashboard})

	}, [] )

	navigationOptions = {
		header: null
	}

	const [error,setErrors] = React.useState({isError:false, msg:''})
	const [isLoading, setLoading] = React.useState(false)

	const [user, setUser] = React.useState({
		username: '',
		password: '',
		isLoggedIn: false,
		msg: '',
		accessToken: '',
		refreshToken: ''
	})

	const _doLogin = async () => {

		setLoading(true)

		const {password, username, msg, isLoggedIn} = user

		if( password != undefined || username != undefined || password != '' || username != '') {

			if ( password.length > 0 && username.length > 0 ) {

				try {

					const response = await axios.post(`${URLS.BASE}/users/login`, {
						'username': username,
						'password': password
					})

					const {result, accessToken, refreshToken} = response.data
					
					if(result == 'Success') {
						setUser({...user, isLoggedIn: true, accessToken, refreshToken})
						// props.navigation.navigate({Dashboard})
						console.log(props)
						setLoading(false)

					} else {

						console.log(response)

						setErrors({isError: true, msg:'Something is wrong!'})

						Alert.alert(
							'Failure',
							`Login failed`,
							[
								{ text: 'OK', }
							]
						)
					}
					
				} catch (e) {
					console.log(e)
				}
			}
		} else {
			Alert.alert(
				'Failed',
				`Wrong username/password`,
				[
					{ text: 'OK', }
				]
			)
		}
	} 
/* 
	if(user.isLoggedIn)
		return <Dashboard /> */

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
				{isLoading ? <Text>Logging in, please wait...</Text> : <Text style={styles.subTitle}>Sign in</Text>}
			</View>

			<View style={styles.formContainer}>
				{error.isError && <Text>{error.msg}</Text>} 
				<View>
					
					<TextInput style={styles.input}
						autoCorrect={false}
						// underlineColorAndroid={COLORS.WHITE_LOW}
						placeholderTextColor='grey'
						selectionColor={COLORS.SECONDARY}
						onChangeText={ text => setUser({...user, username: text, showError:false} )}
						value={user.username}
						placeholder='Phone number e.g: 256778xxxxxx'
					/>

					<TextInput style={styles.input}
						password={true}
						secureTextEntry={true}
						autoCorrect={false}
						//underlineColorAndroid={COLORS.WHITE_LOW}
						placeholderTextColor='grey'
						selectionColor={COLORS.SECONDARY}
						onChangeText={ text => setUser({...user, password: text, showError:false} )}
						value={user.password}
						placeholder='Password'
					/>

					<TouchableOpacity
						style={styles.submit}
						onPress={_doLogin}
					>
						<Text style={styles.submitText}>Sign in</Text>
						<Icon
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

export default Login

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
		color: COLORS.PRIMARY
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
		color: COLORS.ACCENT_1,
		fontWeight:'bold'
	}
})