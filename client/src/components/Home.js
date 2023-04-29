import React from 'react'
import Me from '../img/Untitled-Artwork.jpg';
import '../stylesheets/Home.css'

const Home = () => {
    return (
        <div className='mainContainer'>
            <left>
                <h1>Hi, I'm <span>Gaby!</span></h1>
                <h2>A full-stack software developer with a passion <br/>
                    for turning <span>ideas,</span> into <span>reality.</span></h2>
            </left>
            <img src={Me} alt='a drawing of Gaby Vazquez' />
        </div>
    )
}

export default Home