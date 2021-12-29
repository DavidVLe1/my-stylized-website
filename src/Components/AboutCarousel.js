import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/CSSCarousel.css';

function AboutCarousel() {
    return (

        <div className='about' id='about'>
            <div className='about-title'>
                <br></br>
                <h1>About</h1>
                <hr></hr>
                <div className='aboutCarousel'>
                    
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <div className='left-image'>
                                <img className="short-bio_pic" src='../assets/Business_Profile.jpg' alt="First slide" />
                            </div>
                            
                            
                            <Carousel.Caption>
                            <div className='carousel-text'>
                                <h5>Profile</h5>
                                <p>Currently finishing my Masters program in Applied Computer Science and seeking full time<br></br>
                                software engineer positions and internships in the Chicago area or remote. If you<br></br>
                                think I am a good fit, please contact me by my email: 
                                <a href='mailto:le.davidv18@gmail.com'> le.davidv18@gmail.com</a>.
                                </p>
                            </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="Education" src="../assets/reading_books.gif" alt="Second slide"/>
                            <Carousel.Caption>
                            <div className='carousel-text'>
                                <h5>Education</h5>
                                <p>Saint Xavier University <br></br>Masters of Applied Computer Science (2022)</p>
                                <p>University Of Illinois at Chicago <br></br> Bachelors of Science in Chemistry (2018)</p>
                            </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="Skills" src="../assets/programing_gif.gif" alt="Third slide"/>
                            <Carousel.Caption>
                            <div className='carousel-text'>
                                <h5>Skills</h5>
                                <p>Technical: Java, C++, Python, Javascript, TypeScript, PHP</p>
                                <p>Technologies: SQL, MongoDB, Node.js, Angular.js, React, Visual Studio, Github, Git, Docker, Bash</p>
                            </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default AboutCarousel
