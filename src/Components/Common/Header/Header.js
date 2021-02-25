import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/messier_catalog'>Messier Catalog</NavLink>
                <NavLink exact activeClassName='selected' to='/messier_catalog/:messier_id'>Messier Object Details</NavLink>
                <NavLink exact activeClassName='selected' to='/messier_catalog/create'>Create New</NavLink>
            </header>
        )
    }
}
