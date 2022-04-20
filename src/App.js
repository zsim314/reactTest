import React from 'react';

import {Footer, Blog, Possibility, Features, whatZach, Header} from './containers'
import { CTA, Brand, Navbar } from './component'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div>
                <h1>
                </h1>
            </div>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <whatZach />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;