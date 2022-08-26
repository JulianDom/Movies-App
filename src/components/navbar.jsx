import React from 'react'
import ReactDom from 'react-dom'
import App from '../App'

export default function navbar() {
    return (
        <header className='header'>
            <nav className='navbar'>
                 <div className='web-title'>
                    <h1>Cinema</h1>
                 </div>
                 <ul className='list'>
                    <li>Movies</li>
                    <li>Trailers</li>
                    <li>News</li>
                 </ul>
                 <span className="material-symbols-outlined">
                        menu </span>
                 </nav>
                 

        </header>
        
    )
}
