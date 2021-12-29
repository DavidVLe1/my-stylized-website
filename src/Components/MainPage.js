import React from 'react';
import "../Styles/MainPage.css";

function MainPage() {
    return (
        <div className='home' id='home'>
            <div className='mainpage-border'>
                <div className='mainPage'>
                    <h1>Hello, I'm David Le
                    <hr></hr>
                        <h4>and this is my personal resume website.</h4>
                    </h1>
                </div>
                <img className='mountainPicture' src='../assets/mountain.png' alt='mountain'></img>
                

            </div>
        </div>
    )
}
 
export default MainPage
