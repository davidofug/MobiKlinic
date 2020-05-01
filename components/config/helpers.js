
navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: COLORS.PRIMARY,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitle: 'Add Diagnosis',
        headerTintColor: COLORS.SECONDARY,
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

export const navigationOptionsh