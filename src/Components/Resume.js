import React from 'react';
import "../Styles/Resume.css";

function Resume() {
    return (
        <div className='resume' id='resume'>
            <h1>Resume</h1>
            <hr></hr>
            <h2><b>Education</b></h2>
            <h2>Saint Xavier University | MS in Applied Computer Science</h2>
            <h3>2020-2022</h3>
            <h4><b>Relevant Coursework:</b> Full stack Development, Data visualization, Cloud Computing, TCP/IP Arch and Proto, Software Engineering 
            Web Development, Advanced Database Topics, Modern OS Security, Mobile Applications, Systems Analysis and Design</h4>
            <br></br>
            <h2>Moraine Valley Community College</h2>
            <h3>2019-2020</h3>
            <h4><b>Relevant Coursework:</b> Java Programming I, Advanced Computer Science, Database Design, Intro. To Computer Science, Programming Principles</h4>
            <br></br>
            <h2>University of Illinois at Chicago | BS in Chemistry</h2>
            <h3>2014-2018</h3>
            <h4><b>Relevant Coursework:</b> Program Design I, Legal and Public Policy Themes</h4>
            <br></br>
            <h2><b>Projects</b></h2>
            <h3><b>Messaging App</b></h3>
            <ul>
                <li><h4>Uses an Angular model with default blank username and input box for user to modify and submit to server.</h4></li>
                <li><h4>Uses socket communication and standard HTTP CRUD type requests.</h4></li>
                <li><h4>Implemented a full stack messaging application using Angular and Node.js.</h4></li>
            </ul>
            <br></br>
            <h3><b>GiphyClone</b></h3>
            <ul>
                <li><h4>Uses GIPHY API, JS, CSS, HTML, and PHP to create a GUI that is similar to the Giphy website.</h4></li>
                <li><h4>This website uses PHP for adding event listening functionalities that load more images from the GIPHY API.</h4></li>
            </ul>
            <br></br>

            <h3><b>my-stylized-Website</b></h3>
            <ul>
                <li><h4>This website was designed as a personal website for showing my resume and is made through the use of React, SCSS, CSS, JavaScript for a more user friendly interface experience.</h4></li>
            </ul>

            <h2><b>Programming Languages and Technologies</b></h2>
            <ul>
                <li><h4>Programming Languages: Java, C++, Python, Javascript, TypeScript, PHP</h4></li>
                <li><h4>Technologies: SQL, MongoDB, Node.js, Angular.js, React, Visual Studio, Github, Git, Docker, Bash</h4></li>
            </ul>
            
        </div>
    )
}

export default Resume
