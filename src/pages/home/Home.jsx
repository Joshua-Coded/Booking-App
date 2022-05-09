import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './home.css';
import Featured from '../../components/featured/Featured';


export default function Home() {
    return (
        <div>
            < Navbar />
            < Header />
            <div className='homeContainer'>
                <Featured />
            </div>
        </div>
    )
}