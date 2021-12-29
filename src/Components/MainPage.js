import React from 'react';
import "../Styles/MainPage.css";
import mountain from "../assets/mountain.png"
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
                <img className='mountainPicture' src={mountain} alt='mountain'></img>
                

            </div>
        </div>
    )
}
 
export default MainPage
