import React, { Component } from 'react'
import Login from './login'

export default class Logout extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.navigation.navigate({Login})
    }
    render() {
        return <Login/>
    }
}