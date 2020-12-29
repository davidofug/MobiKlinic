import * as React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from  'react-native'
import {COLORS} from '../constants/styles'

const Loader = (props) => {
    return (
      <View style={styles.loader}>
          <ActivityIndicator
            color={COLORS.ACCENT_1}
            size={'large'}
          />
          {props.title ? <Text>{props.title}</Text>:null}
      </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex:1,
        backgroundColor:COLORS.BACKGROUND,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    }
})

  export default Loader