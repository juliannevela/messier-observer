import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <img width='200' height='200' alt='spinning solar system' src={process.env.PUBLIC_URL + '/Assets/planet-spinner.png'} />
        )
    }
}
