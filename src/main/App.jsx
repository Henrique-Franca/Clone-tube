import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/tamplate/Logo'
import Nav from '../components/tamplate/Nav'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
        </div>
    </BrowserRouter>


