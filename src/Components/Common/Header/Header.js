import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Earth from '../../../Assets/SVG/svg/003-rocket.svg';
import SolarSystem from '../../../Assets/SVG/svg/001-solar-system.svg';
import Jupiter from '../../../Assets/SVG/svg/004-jupiter.svg';
import Uranus from '../../../Assets/SVG/svg/002-uranus.svg';
export default class Header extends Component {
    render() {
        return (
            <header>
                <Link className='navLink' to='/'>
                    <img className='headerImg' alt='earth' src={Earth} />
                    <figcaption className='headerCap'>Home</figcaption>
                </Link>
                <Link className='navLink' to='/messier_catalog'>
                    <img className='headerImg' alt='jupiter' src={Jupiter} />
                    <figcaption className='headerCap'>Catalog</figcaption>
                </Link>
                <h1 className='title'>Messier Observer</h1>
                <Link className='navLink' to='/messier_catalog/create'>
                    <img className='headerImg' alt='uranus' src={Uranus} />
                    <figcaption className='headerCap'>Create</figcaption>    
                </Link>
                <Link className='navLink' to='/about'>
                    <img className='headerImg' alt='solar system' src={SolarSystem} />
                    <figcaption className='headerCap'>About</figcaption>
                </Link>
            </header>
        )
    }
}
